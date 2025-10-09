import { divisao } from "../../operacao"; 

type DivideProps = {
  a: number;
  b: number;
};

export default function Divide(props : DivideProps) {
  const resultado = divisao(props.a, props.b);
  return <div>Divide: {resultado}</div>;
}
