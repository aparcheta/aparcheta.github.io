import './App.css';
import Login from './views/Login';
import SignUp from './views/SignUp';
import AppRoutes from './routes/AppRoutes';
import AppNav from './components/AppNav';
import axios from 'axios';
import React, {useState} from 'react';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = "Bearer" + (user ? user.jwt_token : "");


  return (
    <div className="App">
      <AppNav user={user} setUser={setUser}/>
      <AppRoutes user={user} setUser={setUser}/>
     

      

    </div>
  );
}

export default App;
