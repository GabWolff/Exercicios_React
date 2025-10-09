import { multiplicacao } from "../../operacao";

type MultiplicaProps = {
  a: number;
  b: number;
};

export default function Multiplica(props : MultiplicaProps) {
  const resultado = multiplicacao(props.a, props.b);
  return <div>Multiplica: {resultado}</div>;
}