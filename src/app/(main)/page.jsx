import Link from "next/link";
import heroBg from "@/assets/homepage_hero_bg.jpg";

export default function Home() {
  const default_Category_Id = "0";

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content w-full max-w-7xl text-neutral-content  backdrop-blur-[2px] rounded-full">
        <div className="max-w-3xl text-left">
          <div className="mb-6 h-16 w-1.5 rounded-full bg-error"></div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl text-black">
            The Next Press
          </h1>

          <p className="mb-5 max-w-2xl text-lg font-medium leading-relaxed md:text-2xl">
            Stay informed with the latest breaking news, trending stories, and
            in-depth reports from around the world.
          </p>

          <Link href={`/category/${default_Category_Id}`}>
            <button className="btn btn-error btn-lg rounded-xl px-8 text-white shadow-lg">
              Explore News
              <span className="text-xl">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
