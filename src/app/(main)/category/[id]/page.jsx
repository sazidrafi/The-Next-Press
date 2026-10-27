//import React from 'react';

import LeftSidebar from "@/components/homepage/news/LeftSidebar";

import RIghtSidebar from "@/components/homepage/news/RIghtSidebar";
import NoNewsFound from "@/components/NoNewsFound";
import { getnews, getNewsByCategoryId } from "@/lib/data";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  //   console.log(id, " params id");

  const data = await getnews();
  const news = data.data.news_category;

  const category = await getNewsByCategoryId(id);
  const category_News = category.data;

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-5">
      <div className="col-span-3 ">
        <LeftSidebar news={news} activeId={id} />
      </div>

      <div className="font-bold text-lg bg-pink-100 col-span-6">
        News by Category
        <div className="space-y-4 mt-6">
          {category_News.length > 0 ? (
            category_News.map((news, idx) => {
              return (
                //news card
                <div key={idx} className="p-6 rounded-md border">
                  {news.title}
                </div>
              );
            })
          ) : (
            <NoNewsFound />
          )}
        </div>
      </div>

      <div className=" col-span-3">
        <RIghtSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
