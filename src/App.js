import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Hello" />
        </main>
        <footer className="footer">
          <small> Coded by Zahra Rabiei</small>
        </footer>
      </div>
    </div>
  );
}
