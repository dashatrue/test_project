import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './Components/Home';
import SignUpPage from './Components/Signup';

const App=()=>{

    return (
        <Router>
            <div className="container">
                <NavBar/>
                <Switch>
                    <Route path="/signup">
                        <SignUpPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);