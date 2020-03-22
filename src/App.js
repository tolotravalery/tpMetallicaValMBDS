import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import Search from "./components/Search";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import {BrowserRouter, Route, Link} from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import Artiste from "./components/Artiste";


function App() {

    return (
        <div className="App-grow">
            <BrowserRouter>
                <Route exact path="/" component={Search}></Route>
                <Route path="/artiste/:artiste" component={Artiste}></Route>
                <Route path="/ui" component={TestMaterialUI}></Route>
                <Route path="/photos/:id" component={Photos}></Route>
                <Route path="/obligatoire" component={GroupeRock}></Route>
                <Route
                    path="/username"
                    component={() => <Username name="Michel" age="54"/>}
                />
                <Route path="/hobbies" component={ListeHobbies}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
