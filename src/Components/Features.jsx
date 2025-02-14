import React from "react";

export default function Features() {
  return (
    <>
    <div className="w-full text-center my-10 mx-auto max-w-6xl px-4">
    <div className="mb-8">
        <h3 className="font-semibold uppercase tracking-wide">— Key Features —</h3>
      </div>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Feature 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center gap-3">
            <img src="./document.png" alt="Document Icon" className="w-10 h-10" />
            <h5 className="font-semibold text-lg">Automated Document Retrieval</h5>
          </div>
          <p className="text-gray-600 mt-2">
            DigiLR seamlessly retrieves property documents from government databases, streamlining the process for users.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center gap-3">
            <img src="./titleCheck1.png" alt="Title Check Icon" className="w-10 h-10" />
            <h5 className="font-semibold text-lg">Title Check and Verification</h5>
          </div>
          <p className="text-gray-600 mt-2">
            Automated title verification by DigiLR ensures clear ownership, enhancing transparency and reducing risks for buyers.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center gap-3">
            <img src="./due-diligence.png" alt="Due Diligence Icon" className="w-10 h-10" />
            <h5 className="font-semibold text-lg">Due Diligence</h5>
          </div>
          <p className="text-gray-600 mt-2">
            DigiLR leverages technology for Due Diligence, obviating the need for manual intervention or discretion.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
