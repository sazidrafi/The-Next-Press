
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NoNewsFound() {
  const [search, setSearch] = useState("");
  const router = useRouter();

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (search.trim()) {
//       router.push(`/search?q=${encodeURIComponent(search.trim())}`);
//     }
//   };

  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-7 flex h-36 w-36 items-center justify-center rounded-full bg-base-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className="h-24 w-24"
          >
            <rect
              x="23"
              y="13"
              width="54"
              height="72"
              rx="5"
              className="fill-base-100"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <rect
              x="32"
              y="23"
              width="36"
              height="19"
              rx="2"
              className="fill-base-300"
            />
            <path
              d="M32 50H68 M32 57H62 M32 64H66 M32 71H53"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity=".55"
            />
            <circle
              cx="74"
              cy="72"
              r="13"
              className="fill-base-100"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M83 81L91 89"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Message */}
        {/* <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Nothing to report
        </p> */}

        <h1 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
          No News Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-base-content/65">
          Looks like this page is a little quiet right now.
          Try another category or search for a different story.
        </p>

        {/* Search */}
        {/* <form
          onSubmit={handleSearch}
          className="mx-auto mt-7 flex w-full max-w-md gap-2"
        >
          <input
            type="search"
            placeholder="Search for news..."
            aria-label="Search news"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered min-w-0 flex-1"
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!search.trim()}
          >
            Search
          </button>
        </form> */}

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => router.back()}
            className="btn btn-outline btn-sm"
          >
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="btn btn-ghost btn-sm"
          >
            Explore Latest News
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
