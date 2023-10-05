import './App.scss';
import Login from './components/app/login/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './components/app/sign-up/SignUp';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <LoginSignUp/>
    // </div>
  );
}

export default App;
