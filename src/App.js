import './App.css';
import AdvancedBooking from './components/AdvancedBooking/AdvancedBooking';
import BookNow from './components/BookNow/BookNow';
import Downloads from './components/Downloads/Downloads';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <Home />
      <BookNow />
      <AdvancedBooking />
      <Services />
      <Foods />
      <Downloads />
      <Footer/>
    </div>
  );
}

export default App;
