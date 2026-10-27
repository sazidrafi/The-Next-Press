//import React from 'react';

import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Breaking News: Bangladesh Announces New Education Policy",
  },
  {
    id: 2,
    title: "Breaking News: Global Technology Leaders Gather for AI Summit",
  },
  {
    id: 3,
    title: "Breaking News: Stock Markets Rise Amid Positive Economic Outlook",
  },
  {
    id: 4,
    title:
      "Breaking News: Scientists Discover New Advances in Renewable Energy",
  },
  {
    id: 5,
    title:
      "Breaking News: Bangladesh Cricket Team Prepares for Upcoming Series",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex  justify-between items-center py-2 bg-gray-200 container mx-auto px-2 my-3">
      <button className="btn text-white bg-red-500">Latest</button>
      <Marquee pauseOnHover={true} speed={50}>
        {news.map((n) => (
          <span key={n.id} className="mx-5 font-semibold">
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
