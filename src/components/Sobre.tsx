import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Sobre() {
  const { t } = useTranslation();

  return (
 <motion.section
  id="sobre"
  className="flex flex-col-reverse md:flex-row w-full min-h-screen md:h-screen items-center justify-center mb-10 bg-gray-900 text-gray-100"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="w-[90%] md:w-[30%] text-2xl leading-10 mb-6 md:mb-0 border-l-2 border-blue-800 pl-2 lg:pl-6 rounded-lg">
    <h1 className="text-3xl font-semibold pb-4">{t('title-about')}</h1>
    <p className="text-2xl">{t('description-about')}</p>
    <button className="p-2 border-2 rounded-lg lg:w-[40%] mt-8 bg-blue-900 border-none hover:bg-blue-700 transition duration-500">
      <a href="./CV-IzaiasFrancisco.pdf" target="_blank" rel="noreferrer">Download CV</a>
    </button>
    <button className="p-2 border-2 rounded-lg lg:w-[40%] mt-8 bg-blue-900 border-none hover:bg-blue-700 transition duration-500 ml-4">
      <a href="https://github.com/IzaiasFrancisco0" target="_blank" rel="noreferrer">GitHub</a>
    </button>
  </div>

  <div className="w-[90%] md:w-[30%] flex justify-center lg:justify-end lg:ml-[5%]">
    <img
      className="w-[90%] pt-16 lg:pt-0 md:w-[70%] mb-12 rounded-full"
      src="./foto.png"
      alt="Foto de Izaias"
    />
  </div>
</motion.section>

  );
}
