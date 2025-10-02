import Titulo from "./components/Titulo";
import Retangulo from "./components/Retangulo";
export default function SegundaAula() {
  return(
    <div>
        <Titulo corDeFundo="green" corDeTexto="blue">Sou um titulo de teste</Titulo>
        <Titulo corDeFundo="purple" corDeTexto="yellow">Outro titulo</Titulo>
        <Titulo corDeFundo="orange" corDeTexto="black">Mais um titulo</Titulo>
        <Titulo corDeFundo="pink" corDeTexto="red">Ultimo titulo</Titulo>
        <Retangulo corDeFundo="black" largura="200px" altura="400px"></Retangulo>
    </div>
        
    );
}
