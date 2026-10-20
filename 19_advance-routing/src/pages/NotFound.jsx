import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()
    const btnclick = () => {
        navigate('/')
    }
    return (
        <div className="h-[500px] flex flex-col items-center justify-center bg-gray-100 text-center px-6">

            <h1 className="text-9xl font-extrabold text-gray-300">404</h1>

            <h2 className="mt-6 text-4xl font-bold text-gray-800">
                Page Not Found
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-md">
                The page you're looking for doesn’t exist or has been moved.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={btnclick}>
                Go Back
            </button>

        </div>
    )
}

export default NotFound