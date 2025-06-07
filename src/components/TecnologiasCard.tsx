type TecnologiaCardProps = {
  imagem: React.ElementType;
  nome: string;
  nivel: string;
};

const TecnologiasCard: React.FC<TecnologiaCardProps> = ({ imagem: Icon, nome, nivel }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center border-2 border-blue-900 text-center duration-1000 hover:scale-105">
      <Icon className="text-6xl text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{nome}</h3>
      <span className="text-gray-400">{nivel}</span>
    </div>
  );
};

export default TecnologiasCard;
