import "./CampoTexto.css";

interface FieldTextProps {
  valor: string;
  obrigatorio?: boolean;
  label: string;
  aoAlterado: (valor: string) => void;
  placeholder: string;
  tipo?: "text" | "password" | "date" | "email" | "number";
}

const CampoTexto = ({
  valor,
  obrigatorio = false,
  label,
  aoAlterado,
  placeholder,
  tipo = "text",
}: FieldTextProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;
