import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './componants/MainPage.jsx';
import Signin from './componants/Signin.jsx';
import Signup from './componants/Signup.jsx';
import Findpw from './componants/Findpw.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<MainPage/>}></Route>
          <Route path='/sign_in' element = {<Signin/>}></Route>
          <Route path='/sign_up' element = {<Signup/>}></Route>
          <Route path='/find_pw' element = {<Findpw/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
