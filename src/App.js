import './App.css';
import Menu from './Components/Menu/Menu'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Foooter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Banner/>
      <Menu title='Chicken Meals' category='chicken'/>
      <Menu title='Desserts' category='Dessert'/>
      <Menu title='Pastas' category='Pasta'/>
      <Menu title='Sea Food' category='Seafood'/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
