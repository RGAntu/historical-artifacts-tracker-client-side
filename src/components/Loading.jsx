import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        disabled
        type="button"
        className="text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-primary dark:hover:bg-primary dark:focus:primary inline-flex items-center justify-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..."
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116..."
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
