import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { TicketsList } from "./components/TicketsList/TicketsList";
import { Offline, Online } from "react-detect-offline";

function App() {
  return (
    <div className="aviasales">
      <Online>
        <Header />
        <div className="aviasales__main">
          <Filter />
          <TicketsList />
        </div>
      </Online>
      <Offline>
        <div>Sorry</div>
      </Offline>
    </div>
  );
}
export default App;
