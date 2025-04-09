import Hero from "./component.jsx/hero";
import Car from "./component.jsx/spline";
import "./App.css";
import Dashboard from "./component.jsx/dashboard";
import Games from "./component.jsx/searchBar";
import SearchBar from "./component.jsx/searchBar";
import GameSearchApp from "./component.jsx/searchBar";
import Walk from "./component.jsx/walk";
const App = () => {
  return (
    <>
      {" "}
      <div className="h-100">
        {" "}
        <section id="">
          {" "}
          <Hero />
        </section>
        <section id="Car">
          {" "}
          <Car />
        </section>
        <section id="Games">
          {" "}
          <GameSearchApp />
        </section>
        {/* <Car /> */}
        <section id="Dashboard">
          {" "}
          <Dashboard />
        </section>
        <section id="Walk">
          <Walk />
        </section>
      </div>
    </>
  );
};
export default App;
