import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomeLayout from './layouts/HomeLayout';
import JobDetailsLayout from './components/JobDetailsLayout';
import AuthLayout from './components/AuthLayout';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Protected Home Routes */}
          <Route 
            path='/' 
            element={
                <HomeLayout />
            } 
          >
            <Route path='/job/:jobId' element={<JobDetailsLayout />} />
          </Route>


            <Route path = '/bookmarks' element = {
              <PrivateRoute>
                <HomeLayout />
              </PrivateRoute>
            } />


          {/* Auth Routes */}
          {!token ? (
            <Route path='/auth' element={<AuthLayout />}>
              <Route path='/auth/register' element={<Register />} />
            </Route>
          ) : (
            // Redirect to home if token exists
            <Route path='/auth/*' element={<Navigate to="/" />} />
          )}

          {/* Fallback Route: Redirect all unknown paths to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
