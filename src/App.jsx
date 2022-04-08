import "./App.scss";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay/Overlay";
function App() {
  return (
    <div className="App">
      <Overlay location="Helsinki" />
      <Header />
      <Main />
    </div>
  );
}

export default App;