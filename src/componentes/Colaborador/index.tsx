import { IColaborador } from "../../shared/interface/IColaborador";
import "./Colaborador.css";

const Colaborador = ({
  nome,
  imagem,
  cargo,
  corDeFundo,
  data,
}: IColaborador) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data!).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
