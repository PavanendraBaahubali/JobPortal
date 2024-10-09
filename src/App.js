import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './layouts/HomeLayout';
import JobDetailsLayout from './components/JobDetailsLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<HomeLayout />} >
            <Route path='/job/:jobId' element = {<JobDetailsLayout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
