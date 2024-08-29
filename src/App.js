import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { TicketsList } from "./components/TicketsList/TicketsList";

function App() {
  return (
    <div className="aviasales">
      <Header />
      <div className="aviasales__main">
        <Filter />
        <TicketsList />
      </div>
    </div>
  );
}
export default App;
