import React from "react";
import "./App.css";
import Header from "./components/Header";
import RowData from "./components/RowData";



const App = () => {
    document.title = "Employee Directory";
    return ( <div>
        <Header>
        </Header>   
        <RowData>
        </RowData>
        </div>
    );
};

export default App;