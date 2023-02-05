import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Cover from './Cover/Cover';
import Timeline from './Timeline/Timeline';
import Faq from './Faq/Faq';
import Mission from './Mission/Mission';
import Gallary from './Gallary/Gallary';
import Payment from './Payment/Payment';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cover/>
      <Mission/>
      <Timeline/>
      <Gallary/>
      <Payment/>
      <Faq/>
      <Footer/>
      
    </div>
  );
}

export default App;
