import './App.css';
import './responsive.scss';
import Header from './FrontPage/header';
import Footer from './FrontPage/Footer';
import HomeBanner from './FrontPage/HomeBanner';

function App() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Footer />
    </div>
  );
}

export default App;
