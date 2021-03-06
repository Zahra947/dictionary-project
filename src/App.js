import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary </header>
        <main>
          <Dictionary defaultKeyword="Sun" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Zahra947/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source Code
            </a>{" "}
            by Zahra Rabiei
          </small>
        </footer>
      </div>
    </div>
  );
}
