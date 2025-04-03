"use client";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { addServiceThunk } from "@/app/redux/slice/serviceSlice"; // Example for redux action
import { useRouter } from "next/navigation";
interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  file: File | null; // file should be a File object, or null if no file is selected
  price: string;
  description: string;
}

interface ServiceFormData {
  service: string;
  forms: FormData[];
}

// Yup validation schema for the form data
const validationSchema = Yup.object().shape({
  service: Yup.string().required("Service name is required"),
  forms: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Form name is required"),
      file: Yup.mixed()
        .nullable()
        .required("File is required")
        .test("fileType", "Must be a valid file", (value) => {
          return value instanceof File;
        }),
      price: Yup.string().required("Price is required"),
      description: Yup.string().required("Description is required"),
    })
  ),
});

export default function AddServiceModal({ isOpen, onClose }: AddModalProps) {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const handleSubmit = async (
    values: ServiceFormData,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      const formData = new FormData();

      // Append the service name
      formData.append("service", values.service);

      // Loop through the forms array and append each form's data
      values.forms.forEach((form, index) => {
        formData.append(`forms[${index}][name]`, form.name);
        if (form.file && form.file instanceof File) {
          formData.append(`forms[${index}][file]`, form.file); // Properly append file
        } else {
          formData.append(`forms[${index}][file]`, ""); // Optional: handle empty file case
        }
        formData.append(`forms[${index}][price]`, form.price);
        formData.append(`forms[${index}][description]`, form.description);
      });

      // Dispatch the action with FormData
      await dispatch(addServiceThunk(formData)).unwrap();
      router.refresh();
      resetForm(); // Clear the form after submission
      onClose(); // Close modal
    } catch (err) {
      console.error("❌ Failed to add service:", err);
    }

    setSubmitting(false);
  };

  return (
    <Transition appear show={isOpen} as="div">
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            enter="transition-all duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <Dialog.Title className="text-lg font-semibold text-gray-900">
                Add New Service
              </Dialog.Title>

              <Formik
                initialValues={{
                  service: "",
                  forms: [
                    {
                      name: "",
                      file: null, // Set file as null initially
                      price: "",
                      description: "",
                    },
                  ],
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, values, setFieldValue }) => (
                  <Form className="mt-4 space-y-4">
                    <div>
                      <label className="block text-gray-700">
                        Service Name
                      </label>
                      <Field
                        name="service"
                        className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                      />
                      <ErrorMessage
                        name="service"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">Forms</label>
                      <FieldArray
                        name="forms"
                        render={(arrayHelpers) => (
                          <div>
                            {values.forms.map((_, index) => (
                              <div key={index} className="space-y-3">
                                <div>
                                  <label className="block text-gray-700">
                                    Form Name
                                  </label>
                                  <Field
                                    name={`forms[${index}].name`}
                                    className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                                  />
                                  <ErrorMessage
                                    name={`forms[${index}].name`}
                                    component="p"
                                    className="text-red-500 text-sm"
                                  />
                                </div>

                                <div>
                                  <label className="block text-gray-700">
                                    File
                                  </label>
                                  <input
                                    type="file"
                                    name={`forms[0].file`} // Adjust this according to the index if using FieldArray
                                    onChange={(event) => {
                                      // Manually set the file value in Formik
                                      const file = event.target.files
                                        ? event.target.files[0]
                                        : null;
                                      setFieldValue(`forms[0].file`, file); // Set file directly
                                    }}
                                    className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                                  />
                                  <ErrorMessage
                                    name={`forms[0].file`}
                                    component="p"
                                    className="text-red-500 text-sm"
                                  />
                                </div>

                                <div>
                                  <label className="block text-gray-700">
                                    Price
                                  </label>
                                  <Field
                                    name={`forms[${index}].price`}
                                    className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                                  />
                                  <ErrorMessage
                                    name={`forms[${index}].price`}
                                    component="p"
                                    className="text-red-500 text-sm"
                                  />
                                </div>

                                <div>
                                  <label className="block text-gray-700">
                                    Description
                                  </label>
                                  <Field
                                    name={`forms[${index}].description`}
                                    className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                                  />
                                  <ErrorMessage
                                    name={`forms[${index}].description`}
                                    component="p"
                                    className="text-red-500 text-sm"
                                  />
                                </div>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() =>
                                arrayHelpers.push({
                                  name: "",
                                  file: "",
                                  price: "",
                                  description: "",
                                })
                              }
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2"
                            >
                              Add Form
                            </button>
                          </div>
                        )}
                      />
                    </div>

                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Adding..." : "Add Service"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
