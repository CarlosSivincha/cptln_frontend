

// eslint-disable-next-line react/prop-types
const NewsCard = ({ title, date, description, link, imageSrc }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="mt-2 text-sm text-gray-800">{description}</p>
        <a href={link} className="block mt-4 text-blue-500 hover:underline">
          Seguir Leyendo →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
