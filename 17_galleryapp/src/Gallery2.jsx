import axios from "axios";
import { useState } from "react";

const Gallery2 = () => {

  const [userData, setUData] = useState([])

  const getData = async () => {
    console.log('Data');

    const responce = await axios.get('https://picsum.photos/v2/list?page=3&limit=20')

    setUData(responce.data)

  }



  let printUserData = (
    <p className="text-gray-400 text-center w-full mt-10">
      No users available — click <span className="font-semibold text-blue-500">Get Data</span> to load the gallery.
    </p>
  );


  if (userData.length > 0) {
    printUserData = (
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 mt-10">
        {userData.map((prop, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid group relative"
          >
            <img
              src={prop.download_url}
              alt={`Gallery image ${index}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-sm font-semibold">View</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          User Image Gallery
        </h1>

        <button
          onClick={getData}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition-all duration-200"
        >
          Get Data
        </button>

        {printUserData}
      </div>
    </div>
  )
}

export default Gallery2