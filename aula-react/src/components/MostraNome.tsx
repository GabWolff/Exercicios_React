type MostraNomeProps = {
  children: string;
};

export default function MostraNome(props : MostraNomeProps) {
  console.log(props);
  return <h1>{props.children}</h1>;
}
