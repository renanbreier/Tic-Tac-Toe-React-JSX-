import Game from "./componentes/Board";
import reactLogo from './assets/react.svg';

export default function App() {
  return (
    <>
      <main>
      <h1 className="title">JOGO DA VELHA</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      </main>
      <Game />
    </>
  );
}
