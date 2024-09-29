import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This project has been coded by
          <a
            href="https://github.com/shajmin306"
            target="_blank"
            rel="noreferrer"
          >
            Shajmin Rahman
          </a>{" "}
          and is open sourced on
          <a
            href="https://github.com/shajmin306/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
