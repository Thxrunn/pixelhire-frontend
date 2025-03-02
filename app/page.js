export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-100">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">PixelHire</h1>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Jobs</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Mentors</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Login</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to PixelHire
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Your global job and internship hub for big tech.
                    </p>
                    <a
                        href="#"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </main>
    );
}