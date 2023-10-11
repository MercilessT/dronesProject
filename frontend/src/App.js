import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import ContactsPage from "./components/ContactsPage/ContactsPage"
import Planning from "./components/Planning/Planning";
import TestPage from "./components/TestPage/TestPage";
import DroneList from "./components/DroneList/DroneList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/test" element={<TestPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/dronelist" element={<DroneList/>}/>
                <Route path="/planning" element={<Planning/>}/>
            </Routes>
        </Router>
    );
}


export default App;
