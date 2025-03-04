import React from "react";

export default function MediaCard() {
  return (
    <div className="flex gap-6 justify-center">
      {/* Première carte */}
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-50 object-cover" src="/default_user.jpg" alt="Lizard" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Lizard</h2>
          <p className="mt-2 text-gray-600">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Deuxième carte */}
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-50 object-cover" src="/default_user.jpg" alt="Lizard" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Chameleon</h2>
          <p className="mt-2 text-gray-600">
            Chameleons are distinguished by their zygodactylous feet, long tongues, and their ability to change color to blend with their surroundings.
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
