import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { IColaborador } from "../../shared/interface/IColaborador";

interface FormsProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: Array<string>;
}

const Formulario = ({ aoColaboradorCadastrado, times }: FormsProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Data de entrada no time"
          placeholder="00/00/00"
          valor={data}
          aoAlterado={(valor) => setData(valor)}
          tipo="date"
        />
        <ListaSuspensa
          required={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
