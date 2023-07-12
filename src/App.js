import './App.css';
import { BrowserRouter as Main, Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Header from './FrontPage/header';
import Footer from './FrontPage/Footer';
import HomeBanner from './FrontPage/HomeBanner';
import CarDetail from './CarProfile/CarDetail';
import UserProfile from './UserProfile/UserProfile';
import ComponentPages from './ComponentPage/Borla';
import HowToInstall from './ComponentPage/HowToInstall';
import GeneralPost from './ComponentPage/GeneralPost';
import Login from './Login';
import './responsive.scss';

function App() {
  return (
    <Main>
      <div>
        {/* <Header /> */}
        {/* <HomeBanner /> */}
        {/* <CarDetail /> */}
        {/* <UserProfile /> */}
        {/* <ComponentPages /> */}
        {/* <Login /> */}
        {/* <Footer /> */}

        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<HomeBanner />}></Route>
          <Route exact path='/vehicle-profile' element={<CarDetail />}></Route>
          <Route exact path='/user-profile' element={<UserProfile />}></Route>    
          <Route exact path='/component-page' element={<ComponentPages />}></Route> 
          <Route exact path='/how-to-install' element={<HowToInstall />}></Route>  
          <Route exact path='/general-post' element={<GeneralPost />}></Route>          
        </Routes>

      </div>
    </Main>
  );
}

export default App;
