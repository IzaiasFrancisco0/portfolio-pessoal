import React from 'react';
import { useTranslation } from 'react-i18next';


type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
};

const ProjetoCard: React.FC<ProjectCardProps> = ({ image, title, description, githubUrl, liveUrl }) => {
  const {t} = useTranslation();

  return (
    <div className="relative group h-auto lg:h-64 overflow-hidden rounded-lg shadow-lg w-[98%] md:w-auto mx-auto md:mx-0">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain md:object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="lg:text-2xl text-xl font-bold text-white mb-2">{title}</h3>
        <p className="lg:text-xl text-lg text-gray-300 mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {t('btn-project')}
          </a>
        </div>
      </div>
    </div>
  );
};



export default ProjetoCard;
