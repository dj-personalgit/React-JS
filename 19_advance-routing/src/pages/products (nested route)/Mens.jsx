const Mens = () => {
    return (
        <div className="px-8 py-12 min-h-full">

            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Men's Collection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
                    <img
                        src="https://fortcollins.co.in/cdn/shop/files/fort-collins-men-black-pu-coated-jacket-with-classic-front-zip-org65-3.webp?v=1737785603&width=1080" 
                        width={100}
                        alt="Men Product"
                        className="rounded-md mb-4 mx-auto"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Classic Jacket</h2>
                    <p className="text-gray-600 mt-2">$120</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
                    <img
                        src="https://i.pinimg.com/736x/ab/d8/d9/abd8d964197be9a350c8499383cbd7a4.jpg"
                        width={100}
                        alt="Men Product"
                        className="rounded-md mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Casual Hoodie</h2>
                    <p className="text-gray-600 mt-2">$80</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
                    <img
                        src="https://static.spotboye.com/uploads/WhatsApp_Image_2025-07-29_at_3_14_53_PM_(1)__2025-7-29-9-37-7_original.jpg"
                        width={100}
                        alt="Men Product"
                        className="rounded-md mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Denim Shirt</h2>
                    <p className="text-gray-600 mt-2">$60</p>
                </div>

            </div>
        </div>
    )
}

export default Mens