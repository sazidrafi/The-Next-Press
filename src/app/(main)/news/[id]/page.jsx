//import React from 'react';

import { getNewsDetailsId } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye, FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

export async function generateMetadata({ params }) {
  const { id } = await params;
  // console.log(id, "params id");

  const news = await getNewsDetailsId(id);
  return {
    title: news.title,
    description: news.details,
  }


  // console.log(news, "News");
}

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, "Params");

  const news = await getNewsDetailsId(id);
  // console.log(news, "news");
  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <div className="badge badge-error text-white">
            Category #{news.category_id}
          </div>

          {/* News Title */}
          <h2 className="text-2xl font-semibold m-3">{news.title}</h2>

          <div className="flex justify-between items-center p-3 rounded">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={""}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
              <div>
                <h2 className="font-bold">{news.author?.name}</h2>
              </div>
            </div>
            <div className=" items-center gap-2">
              <div className="flex  gap-2">
                <FaStar className="text-lg text-yellow-300" />
                {news.rating.number}
              </div>
              <div className="flex gap-2">
                <FaRegEye className=" text-lg" /> {news.total_view}
              </div>
            </div>
          </div>

          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={400}
              className="w-full"
            />
          </figure>

          <p className="text-lg text-justify"> {news.details}</p>

          <div className="flex items-center justify-between gap-2">
            <Link href={`/category/${news.category_id}`}>
              <button className="btn p-5 text-white text-lg bg-rose-400">
                <GoArrowLeft className="text-3xl" />
                All News in this Category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
