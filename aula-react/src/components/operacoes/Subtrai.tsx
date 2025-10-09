import { subtracao } from "../../operacao";

type SubtraiProps = {
  a: number;
  b: number;
};

export default function Subtrai(props : SubtraiProps) {
  const resultado = subtracao(props.a, props.b);
  return <div>Subtrai: {resultado}</div>;
}