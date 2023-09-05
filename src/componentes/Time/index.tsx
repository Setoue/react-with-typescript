import { IColaborador } from "../../shared/interface/IColaborador";
import Colaborador from "../Colaborador/index";
import "./Time.css";

interface TimeProps extends IColaborador {
  colaboradores: Array<IColaborador>;
  corSecundaria: string;
  corPrimaria: string;
}

const Time = ({
  colaboradores,
  corSecundaria,
  corPrimaria,
  nome,
}: TimeProps) => {
  const css = { backgroundColor: corSecundaria };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            data={colaborador.data}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
