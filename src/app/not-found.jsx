import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import heroBg from "@/assets/homepage_hero_bg.jpg";

export const metadata = {
  title: "The Next Press - Page not found",
};

const floaters = [
  { icon: "🗞️", position: "top-[12%] left-[8%]", duration: "3s", delay: "0s" },
  {
    icon: "📰",
    position: "top-[18%] right-[10%]",
    duration: "4s",
    delay: "0.6s",
  },
  {
    icon: "❓",
    position: "bottom-[16%] left-[14%]",
    duration: "3.5s",
    delay: "1.2s",
  },
  {
    icon: "🔍",
    position: "bottom-[20%] right-[8%]",
    duration: "4.5s",
    delay: "0.3s",
  },
];

const NotFound = () => {
  const default_Category_Id = "0";

  return (
    <div
      className="hero relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay"></div>

      {/* floating emojis */}
      {floaters.map((item) => (
        <span
          key={item.icon}
          aria-hidden="true"
          className={`pointer-events-none absolute inline-block text-4xl opacity-60 md:text-5xl motion-safe:animate-bounce ${item.position}`}
          style={{
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </span>
      ))}

      <div className="hero-content w-full max-w-3xl px-4 text-white">
        <div className="text-left">
          <div className="mb-6 h-16 w-1.5 rounded-full bg-error"></div>

          {/* 4 [search icon] 4 */}
          <div className="mb-2 flex items-center gap-3 text-8xl font-extrabold md:text-9xl">
            <span>4</span>
            <FaSearch
              aria-hidden="true"
              className="text-error motion-safe:animate-bounce"
              style={{ animationDuration: "2s" }}
            />
            <span>4</span>
          </div>

          <p className="mb-2 text-lg font-semibold tracking-widest text-error">
            ERROR 404
          </p>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Page not found
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
            The page you are looking for may have been moved, renamed or never
            existed. Let us get you back to the news.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn btn-error rounded-xl px-8 text-white">
              Back to Home
            </Link>
            <Link
              href={`/category/${default_Category_Id}`}
              className="btn btn-outline rounded-xl px-8 text-white hover:bg-white hover:text-black"
            >
              Browse News
            </Link>
          </div>

          <p className="mt-10 text-sm text-gray-300">
            The Next Press, journalism without fear or favour
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
