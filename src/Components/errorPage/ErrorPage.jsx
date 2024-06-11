/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <Helmet>
        <title>4O4</title>
      </Helmet>
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
