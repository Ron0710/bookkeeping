"use client";
import { useState } from "react";

// Define the Type for Proof of Transaction
interface ProofOfTransaction {
  id: number;
  title: string;
  description: string;
  type: "image" | "video" | "embed"; // Limit type to accepted values
  content: string;
}

// Sample proof of transaction data
const proofOfTransactions: ProofOfTransaction[] = [
  {
    id: 1,
    title: "Official Receipt #2025001",
    description: "Payment received for business registration service.",
    type: "embed",
    content:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61553389666414%2Fvideos%2F2372857219765031%2F&show_text=false&width=357&t=0",
  },
  {
    id: 2,
    title: "Bank Transfer Confirmation",
    description: "Transaction successful via online banking.",
    type: "embed",
    content:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61553389666414%2Fvideos%2F507947055346176%2F&show_text=false&width=267&t=0",
  },
  {
    id: 3,
    title: "Facebook Payment Confirmation",
    description: "Proof of payment via Facebook Messenger.",
    type: "embed",
    content:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61553389666414%2Fvideos%2F905434471435018%2F&show_text=false",
  },
  {
    id: 4,
    title: "Cash Payment Receipt",
    description: "Manual payment received at the office.",
    type: "embed",
    content:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61553389666414%2Fvideos%2F868736055224954%2F&show_text=false&width=267&t=0",
  },
];

export default function ProofOfTransaction() {
  const [selectedProof, setSelectedProof] = useState<ProofOfTransaction | null>(
    null
  );

  return (
    <div className="flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center p-8">
        {/* Centered Container with Full Height */}
        <div className="container w-[95%] bg-white shadow-2xl rounded-3xl p-12 h-full  flex items-center transition-transform hover:scale-[1.01] duration-300 ease-in-out">
          <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Title & Description */}
            <div className="w-full">
              <h1 className="text-5xl font-extrabold text-blue-700 text-center">
                Proof of Transactions
              </h1>
              <p className="text-xl text-gray-600 mt-4 text-center">
                Here are the verified proof of payments and transactions.
              </p>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {proofOfTransactions.map((proof) => (
                  <div
                    key={proof.id}
                    className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 cursor-pointer h-full flex flex-col items-center justify-between"
                    onClick={() => setSelectedProof(proof)}
                  >
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                      {proof.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mt-2 text-center">
                      {proof.description}
                    </p>

                    {/* Render Different Media Types */}
                    <div className="mt-4 w-full">
                      {proof.type === "image" && (
                        <img
                          src={proof.content}
                          alt={proof.title}
                          className="w-full h-48 object-cover rounded-md shadow-md"
                        />
                      )}
                      {proof.type === "video" && (
                        <video
                          src={proof.content}
                          controls
                          className="w-full h-48 object-cover rounded-md shadow-md"
                        />
                      )}
                      {proof.type === "embed" && (
                        <iframe
                          className="w-full h-72 rounded-md shadow-md"
                          src={proof.content}
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal View for Selected Proof */}
      {selectedProof && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedProof.title}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProof.description}</p>

            <div className="mt-4">
              {selectedProof.type === "image" && (
                <img
                  src={selectedProof.content}
                  alt={selectedProof.title}
                  className="w-full rounded-md shadow-md"
                />
              )}
              {selectedProof.type === "video" && (
                <video
                  src={selectedProof.content}
                  controls
                  className="w-full rounded-md shadow-md"
                />
              )}
              {selectedProof.type === "embed" && (
                <iframe
                  className="w-full h-60 rounded-md shadow-md"
                  src={selectedProof.content}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
