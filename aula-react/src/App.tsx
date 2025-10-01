import Titulo from "./components/Titulo";

export default function App() {
  return(
    <div>
        <Titulo corDeFundo="green" corDeTexto="blue">Sou um titulo de teste</Titulo>
        <Titulo corDeFundo="purple" corDeTexto="yellow">Outro titulo</Titulo>
        <Titulo corDeFundo="orange" corDeTexto="black">Mais um titulo</Titulo>
        <Titulo corDeFundo="pink" corDeTexto="red">Ultimo titulo</Titulo>
    </div>
    );
}
