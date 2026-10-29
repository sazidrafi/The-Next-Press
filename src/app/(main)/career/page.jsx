import Link from "next/link";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

export const metadata = {
  title: "The Next Press - Career",
};

const jobs = [
  {
    id: 1,
    title: "Staff Reporter",
    department: "Newsroom",
    location: "Dhaka",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Sub-Editor",
    department: "Editorial",
    location: "Dhaka",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Photojournalist",
    department: "Multimedia",
    location: "Rajshahi",
    type: "Part-time",
  },
];

const CareerPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      {/* heading */}
      <div className="mb-10">
        <div className="mb-4 h-12 w-1.5 rounded-full bg-error"></div>
        <h1 className="text-4xl font-bold">Careers</h1>
        <p className="mt-4 text-lg text-gray-500">
          Help us tell the stories that matter. We are always looking for
          curious, careful and hardworking people.
        </p>
      </div>

      {/* open roles */}
      <section>
        <h2 className="mb-4 text-xl font-bold">Open positions</h2>

        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col gap-4 rounded-md border border-base-300 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-bold">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.department}</p>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {job.type}
                  </span>
                </div>
              </div>

              <Link
                href={`mailto:careers@thenextpress.com?subject=Application for ${job.title}`}
                className="btn btn-error text-white"
              >
                Apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* closing note */}
      <p className="mt-10 text-sm text-gray-500">
        Do not see a role that fits? Send your CV to{" "}
        <a
          href="mailto:careers@thenextpress.com"
          className="text-error hover:underline"
        >
          careers@thenextpress.com
        </a>{" "}
        and we will keep it on file.
      </p>
    </div>
  );
};

export default CareerPage;
