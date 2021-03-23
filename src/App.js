import React, {useCallback} from 'react';
import './App.css';
import Boards from "./components/Boards";
import Tasks from "./components/Tasks";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Button from "./components/Button";

function App() {
    const divStyle = {display: "grid", textAlign: "center"};

    return (
        <Router>
            <Switch>
                <Route exact path="/boards">
                    <div style={divStyle}>
                        <Boards/>
                    </div>
                </Route>
                <Route exact path="/tasks">
                    <div style={divStyle}>
                        <Tasks/>
                    </div>
                </Route>
                <Route>
                    <div style={divStyle}>
                        <div style={{fontSize: "49px", fontWeight: "bold"}}>Home Page</div>
                        <Button/>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
