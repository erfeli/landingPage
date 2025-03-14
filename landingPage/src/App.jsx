
import './App.css'
import NavigationBar from '/src/components/NavigationBar.jsx';
import Jumbotron from "./components/Jumbotron";
import Footer from './components/Footer';
import Card from './components/Card';

function App() {

  return (
    <>
      <NavigationBar />
      <Jumbotron />      
      <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
           
      <Footer />
    </>
  )
}

export default App
