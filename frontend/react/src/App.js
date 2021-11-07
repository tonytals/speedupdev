import React from "react";
import {
  BrowserRouter as Router,  Routes,  Route,  Link
} from "react-router-dom";
import DesireList from "./DesireList";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/DesireList">Lista de Desejos</Link>
            </li>
            <li>
              <Link to="/ToDoList">Lista de Afazeres</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/DesireList" element={<DesireList />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/users" element={<Users />}>
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}