import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/courses" component={Courses} />

      </BrowserRouter>
    </div>
  );
}

export default App;
