import './App.css';
import Header from './FrontPage/header';
import Footer from './FrontPage/Footer';
import HomeBanner from './FrontPage/HomeBanner';
import CarDetail from './CarProfile/CarDetail';
import UserProfile from './UserProfile/UserProfile';
import ComponentPages from './ComponentPage/Borla';
import './responsive.scss';

function App() {
  return (
    <div>
      <Header />
      {/* <HomeBanner /> */}
      {/* <CarDetail /> */}
      {/* <UserProfile /> */}
      <ComponentPages />
      <Footer />
    </div>
  );
}

export default App;
