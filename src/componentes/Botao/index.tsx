import { ReactElement } from "react";
import "./Botao.css";

interface ButtonProps {
  children: string | ReactElement;
}

const Botao = ({ children }: ButtonProps) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
