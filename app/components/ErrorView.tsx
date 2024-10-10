import { Link } from "@remix-run/react";

type TErrorViewProps = {
  statusCode: number;
  message?: string;
};

const ErrorView: React.FC<TErrorViewProps> = ({ statusCode, message }) => {
  const errorMessageMap: Record<number, string> = {
    404: "Whoops! That page doesn’t exist.",
    500: "Internal server error",
    502: "Bad gateway",
    503: "Service unavailable",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-9xl font-bold text-matcha-300 font-title">
        {statusCode}
      </h1>
      {message ? (
        <p className="text-4xl font-bold text-gray-500">{message}</p>
      ) : (
        <p className="text-4xl font-semibold text-gray-500">
          {errorMessageMap[statusCode] || "An error occurred"}
        </p>
      )}
      {statusCode === 404 && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-medium text-gray-500">
            Here are some helpful links instead:
          </p>

          <div className="flex gap-4">
            <Link to="/" className="text-matcha-300">
              Home
            </Link>
            <Link to="/products" className="text-matcha-300">
              Products
            </Link>
            <Link to="/blog" className="text-matcha-300">
              Blog
            </Link>
            <Link to="/contact" className="text-matcha-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorView;
