import "./App.css";
import Soma from "./components/operacoes/Soma";
import Divide from "./components/operacoes/Divide";
import Multiplica from "./components/operacoes/Multiplica";
import Subtrai from "./components/operacoes/Subtrai";

export default function App() {
  return (
    <div>
      <header className="cabecalho">Header</header>
      <aside>Aside</aside>
      <main>Main</main>
      <footer>Footer</footer>
      <span>
        <Soma a={10} b={5} />
        <Subtrai a={10} b={5} />
        <Multiplica a={10} b={5} />
        <Divide a={10} b={5} />
      </span>
    </div>
  );
}