import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { TicketsList } from "./components/TicketsList/TicketsList";
import { useSelector } from "react-redux";
import { Alert, Flex } from "antd";
import React from "react";

function App() {
  const { isOnline } = useSelector((state) => state.network);
  return (
    <>
      <div className="aviasales">
        <Header />
        <div className="aviasales__main">
          {isOnline ? (
            <>
              <Filter />
              <TicketsList />
            </>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Flex align="center" gap="middle">
                <Alert
                  showIcon
                  message="Error"
                  description="Sorry, there was an error, check your internet connection"
                  type="error"
                />
              </Flex>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
