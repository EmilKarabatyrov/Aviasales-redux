import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { TicketsList } from "./components/TicketsList/TicketsList";
import { Offline, Online } from "react-detect-offline";
import { Alert } from "antd";

function App() {
  return (
    <>
      <Online>
        <div className="aviasales">
          <Header />
          <div className="aviasales__main">
            <Filter />
            <TicketsList />
          </div>
        </div>
      </Online>
      <Offline>
        <Alert
          showIcon
          message="Sorry, there was an error, check your internet connection"
          type="error"
        />
      </Offline>
    </>
  );
}

export default App;
