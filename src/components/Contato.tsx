import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contato() {
  const {t} = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-10 px-4 mt-16 lg:mt-32 w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">

        <div className="">
          <h2 className="text-lg font-semibold mb-4 border-b-4 border-blue-800 pb-2">{t('title-about')}</h2>
          <p className="text-sm leading-6">
           {t("about-footer")}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-4 border-blue-800 pb-2">{t('title-contact')}</h2>
          <p className="text-sm pb-2">{t("description-contact-email")}</p>
          <p className="text-sm pb-2">{t("description-contact-number")}</p>
          <p className="text-sm">{t("description-contact-location")}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-4 border-blue-800 pb-2">{t('title-media')}</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/IzaiasFrancisco0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/izaias-francisco/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/izaiasfrancisco0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-14 text-sm text-gray-400">
        © {new Date().getFullYear()} Izaias Francisco. Todos os direitos reservados.
      </div>
    </footer>
  );
}
