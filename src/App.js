import './App.css';
import Login from './components/Login';
import Timer from './components/Timer';
import useToken from './components/useToken';
import {  Route, Routes } from 'react-router-dom';

function App() {
  const{token, setToken} = useToken();
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
        <Routes>
        <Route path= "/" exact element ={<Login/>}></Route>
        <Route path= "Timer" exact element ={<Timer/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
