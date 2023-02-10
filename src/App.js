import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './componants/MainPage.jsx';
import Signin from './componants/Signin.jsx';
import Signup from './componants/Signup.jsx';
import Findpw from './componants/Findpw.jsx';
import Usefullweb from './componants/Usefullweb.jsx';
import Country from './componants/Country.jsx';
import Profile from './componants/Profile.jsx';
import Community from './componants/Community.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<MainPage/>}></Route>
          <Route path='/sign_in' element = {<Signin/>}></Route>
          <Route path='/sign_up' element = {<Signup/>}></Route>
          <Route path='/find_pw' element = {<Findpw/>}></Route>
          <Route path='/usefullweb' element = {<Usefullweb/>}></Route>
          <Route path = '/country' element = {<Country/>}></Route>
          <Route path = '/profile' element = {<Profile/>}></Route>
          <Route path = '/community' element = {<Community/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
