import logo from './logo.svg';
import './App.css';
import Product from './Product/Product'

function App() {
  return (
    <div className="container">
    <Product img="download1.jpg" name="iPhone14"  price={1200} content="it is the best and new phone for 2022" count={2}/>
    <Product img="download4.jpg" name="iPhone13"  price={1100} content="smart and beautiful color" count={5}/>
    <Product img="images3.jfif" name="iPhone12"  price={900} content="it is the best  for 2020" count={0}/>

    </div>
  );
}

export default App;
