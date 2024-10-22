import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ title, date, description, link, imageSrc }) => {

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md min-w-[280px] max-w-[320px] flex flex-col ">
      <img src={imageSrc} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold truncate">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="mt-2 text-sm text-gray-800 line-clamp-3 h-16">{stripHtmlTags(description)}</p>
        <a href={"/noticia/" + link} className="block font-bold w-full text-end mt-4 hover:underline text-l_color_v">
          Seguir Leyendo →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
