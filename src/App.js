import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App(props) {
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
          {props.data.map((el, i) => (
            <Card
              title={el.title}
              price={el.price}
              imgUrl={el.imgUrl}
              key={i}
              onClickAdd={() => console.log(el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
