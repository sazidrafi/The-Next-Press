//import React from 'react';

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center flex-col gap-4">
      <p className="text-5xl font-bold text-purple-600">
        This page is not found
      </p>
      <Link href="/">
        <button className="bg-purple-500 text-white font-semibold text-3xl p-3 rounded cursor-pointer ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
