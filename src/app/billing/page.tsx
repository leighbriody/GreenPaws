import React from "react";

export default function Billing() {
  // Dummy data for the user's profile and subscription
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "https://via.placeholder.com/150", // Replace with actual image URL
  };

  const subscriptionData = {
    currentPlan: "Premium Plan",
    monthlyCost: 19.99, // Replace with the actual monthly cost
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Manage Billing</h2>
        </div>
        <div className="flex flex-col mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Profile</h3>
            <div className="flex items-center mb-4">
              <img
                src={userData.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="text-gray-800 text-lg">{userData.name}</h4>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Subscription</h3>
            <div className="mb-2">
              <p className="text-gray-800">{subscriptionData.currentPlan}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                Monthly Cost: ${subscriptionData.monthlyCost.toFixed(2)}
              </p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
