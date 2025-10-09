type NomeCompletoProps = {
  nome: string;
  sobrenome: string;
};

export default function NomeCompleto(props : NomeCompletoProps) {
  console.log(props);
  return (
    <div>
      {props.nome} {props.sobrenome}
    </div>
  );
}