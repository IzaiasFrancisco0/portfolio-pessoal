import TecnologiasCard from './TecnologiasCard';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function Tecnologias() {
    const {t} = useTranslation();

    return (
        <article id="tecnologias" className="h-auto md:flex flex-col items-center justify-center w-full h-auto lg:h-screen bg-gray-900 text-gray-100">
            <h2 className="text-3xl text-center pt-8 mb-8 border-b-4 border-blue-800 pb-2 rounded-xl">{t('title-tec')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[100%] lg:w-[80%] gap-6 p-6 bg-gray-900 h-auto text-white">
                <TecnologiasCard
                    imagem={FaHtml5}
                    nome="HTML"
                    nivel={t('nivel2')}
                />
                    <TecnologiasCard
                    imagem={FaCss3}
                    nome="CSS"
                    nivel={t('nivel2')}
                />
                    <TecnologiasCard
                    imagem={RiTailwindCssFill}
                    nome="TailwindCSS"
                    nivel={t('nivel2')}
                />
               
                    <TecnologiasCard
                    imagem={IoLogoJavascript}
                    nome="Javascript"
                    nivel={t('nivel2')}
                />
                     <TecnologiasCard
                    imagem={SiTypescript}
                    nome="Typescript"
                    nivel={t('nivel')}
                />
                
                    <TecnologiasCard
                    imagem={FaReact}
                    nome="React"
                    nivel={t('nivel')}
                />
                    <TecnologiasCard
                    imagem={FaNodeJs}
                    nome="Node.js"
                    nivel={t('nivel')}
                />
                    <TecnologiasCard
                    imagem={FaGithub}
                    nome="GitHub"
                    nivel={t('nivel')}
                />
            </div>
        </article>
    )
}