import { soma } from "../../operacao";

type SomaProps = {
  a: number;
  b: number;
};

export default function Soma(props : SomaProps) {
  const resultado = soma(props.a, props.b);
  return <div>Soma: {resultado}</div>;
}