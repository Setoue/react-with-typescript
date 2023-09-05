import "./ListaSuspensa.css";

interface ListHangingProps {
  label: string;
  aoAlterado: (value: string) => void;
  valor: string;
  itens: Array<String>;
  required: boolean;
}

const ListaSuspensa = ({
  label,
  aoAlterado,
  valor,
  itens,
  required,
}: ListHangingProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item as string}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
