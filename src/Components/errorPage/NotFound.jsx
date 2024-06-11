import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Not Found| 4O4</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
