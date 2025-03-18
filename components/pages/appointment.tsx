"use client";
import { useState } from "react";

const services = [
  { id: 1, title: "Business Permit and Licensing Office" },
  { id: 2, title: "BIR Registration" },
  { id: 3, title: "DTI/SEC Registration" },
  { id: 4, title: "Building Permit" },
  { id: 5, title: "RDO Transfer" },
  { id: 6, title: "Bookkeeping Assistance" },
  { id: 7, title: "ITR Assistance" },
  { id: 8, title: "Authority to Print of Receipts" },
  { id: 9, title: "Accredited Printer Services" },
  { id: 10, title: "Certificate of Registration Update" },
  { id: 11, title: "SSS, PhilHealth, Pag-IBIG Registration" },
  { id: 12, title: "Online Services Assistance" },
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    address: "",
    email: "",
    contact: "",
    date: "",
    time: "",
    status: "Pending", // Default status
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.service ||
      !formData.name ||
      !formData.address ||
      !formData.email ||
      !formData.contact ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill out all fields.");
      return;
    }
    console.log("Appointment Submitted:", formData);
    alert("Appointment successfully submitted!");
  };

  return (
    <div className="flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center p-6 sm:p-8">
        {/* Centered Container with Full Height */}
        <div className="container w-[95%] bg-white shadow-2xl rounded-3xl p-6 sm:p-12 h-full flex items-center transition-transform hover:scale-[1.01] duration-300 ease-in-out">
          <section className="w-full flex flex-col items-center justify-between gap-8 md:gap-12">
            {/* Title & Description */}
            <div className="w-full">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 leading-tight text-center">
                Book an Appointment
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mt-3 sm:mt-4 text-center">
                Select a service and fill in your details to schedule an
                appointment.
              </p>

              {/* Appointment Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 w-full max-w-lg sm:max-w-none"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left Column (Stacks on Mobile) */}
                  <div className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Select Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">-- Select a Service --</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Right Column (Stacks on Mobile) */}
                  <div className="space-y-6">
                    {/* Address */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Status (Default: Pending) */}
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-700">
                        Status
                      </label>
                      <input
                        type="text"
                        name="status"
                        value={formData.status}
                        readOnly
                        className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
                  >
                    Submit Appointment
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
