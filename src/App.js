import Card from "./components/Card.jsx";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between ">
          <h1>Все кросовки</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
