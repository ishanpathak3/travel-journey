import NavBar from "./components/NavBar";
import Description from "./components/Description";
import arrayData from "./components/Data";
function App() {
  const dataFinal = arrayData.map(
    function (item) {
      return (<Description
        key={item.id}
        {...item}
      />
      )
    }
  );

  return (
    <div className="container">
      <NavBar />
      <main>
        {dataFinal}
      </main>
    </div>
  );
}

export default App;
