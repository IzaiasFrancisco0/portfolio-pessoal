import { useTranslation } from "react-i18next";
import ProjectCard from './ProjetoCard';

export default function Projetos() {
  const { t } = useTranslation();

  return (
    <div id="projetos" className="flex flex-col items-center justify-center w-full h-auto text-gray-100">
      <h2 className="text-3xl w-full lg:w-auto text-center mb-6 border-b-4 border-blue-800 pb-2 rounded-xl">
        {t("projetos-title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[90%] md:grid-cols-3 w-[100%] gap-6 p-6 bg-gray-900 h-auto text-white">
        <ProjectCard
          image="./MovieFlix.png"
          title={t("project1-title")}
          description={t("project1-desc")}
          githubUrl="https://github.com/IzaiasFrancisco0/frontend-filmes"
          liveUrl="https://site-filmes-phi.vercel.app"
        />
        <ProjectCard
          image="./Barbearia.png"
          title={t("project2-title")}
          description={t("project2-desc")}
          githubUrl="https://github.com/IzaiasFrancisco0/Sistema-Barbearia"
          liveUrl="https://izaiasfrancisco0.github.io/Sistema-Barbearia/"
        />
        <ProjectCard
          image="./FormCadastro.png"
          title={t("project3-title")}
          description={t("project3-desc")}
          githubUrl="https://github.com/IzaiasFrancisco0/form-users-cadastro-y7nt"
          liveUrl="https://form-users-cadastro-y7nt.vercel.app/"
        />
        <ProjectCard
          image="./burger.png"
          title={t("project4-title")}
          description={t("project4-desc")}
          githubUrl="https://github.com/IzaiasFrancisco0/burger-page"
          liveUrl="https://burger-page1.vercel.app/"
        />
        <ProjectCard
          image="./landingPage.png"
          title={t("project5-title")}
          description={t("project5-desc")}
          githubUrl="https://github.com/IzaiasFrancisco0/Landing-Page-Construtor"
          liveUrl="https://izaiasfrancisco0.github.io/Landing-Page-Construtor/"
        />
        <ProjectCard
          image="./pizzaria.png"
          title={t("project6-title")}
          description={t("project6-desc")}
          githubUrl="https://github.com/IzaiasFrancisco0/site-pizzaria"
          liveUrl="https://izaiasfrancisco0.github.io/site-pizzaria/"
        />
      </div>
    </div>
  );
}
