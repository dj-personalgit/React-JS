import axios from "axios";
import { useEffect, useState } from "react";

const Gallery3 = () => {

    const [userData, setUData] = useState([]);
    const [idxpg, setIdxpg] = useState(3);

    const getData = async () => {
        console.log('Data');
        const responce = await axios.get(`https://picsum.photos/v2/list?page=${idxpg}&limit=10`)
        setUData(responce.data)
    }

    useEffect(() => {
        getData()
    }, [idxpg]);



    let printUserData = (
        <p className="text-gray-400 text-center w-full mt-10">
            No users available — <span className="font-semibold text-blue-500">Reload the page</span> to load the gallery.
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

                {printUserData}
            </div>


            {/* Page buttons */}
            <div className="flex justify-center items-center gap-4 mt-12">
                <button
                    onClick={() => {
                        if(idxpg > 1) {
                            setIdxpg(idxpg - 1)
                            setUData([])
                        }
                    }}
                    className="px-5 py-2.5 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                        Prev
                </button>

                <span className="text-gray-600 font-semibold text-lg select-none">Page {idxpg}</span>

                <button
                    onClick={() => {
                        setIdxpg(idxpg + 1)
                        setUData([])
                    }}
                    className="px-5 py-2.5 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 active:scale-95 transition-all duration-200">
                        Next
                </button>
            </div>


        </div>
    )
}

export default Gallery3