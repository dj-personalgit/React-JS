const Womens = () => {
    return (
        <div className="px-8 py-12 min-h-full">

            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Women's Collection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
                    <img
                        src="https://via.placeholder.com/300x350"
                        alt="Women Product"
                        className="rounded-md w-full mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Elegant Dress</h2>
                    <p className="text-gray-600 mt-2">$140</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
                    <img
                        src="https://via.placeholder.com/300x350"
                        alt="Women Product"
                        className="rounded-md w-full mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Stylish Top</h2>
                    <p className="text-gray-600 mt-2">$55</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
                    <img
                        src="https://via.placeholder.com/300x350"
                        alt="Women Product"
                        className="rounded-md w-full mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Denim Jacket</h2>
                    <p className="text-gray-600 mt-2">$95</p>
                </div>

            </div>
        </div>
    )
}

export default Womens