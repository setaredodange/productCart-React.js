import logo from './logo.svg';
import './App.css';
import Product from './Product/Product'
import Modal from './Modal/Modal'

function App() {

  const allProducts=[
    {id:1, img:"download1.jpg", name:"iPhone14",  price:1200 , content:"it is the best and new phone for 2022", count:2},
    {id:2, name:"iPhone13",  price:1100, content:"smart and beautiful color", count:5},
    {id:3, img:"images3.jfif", name:"iPhone12",  price:900, content:"it is the best  for 2020", count:3 }
   
  ]
  

  return (
    <div className="container">
    <Product {...allProducts[0]} >
      <button> off 50%</button>
    </Product>

    <Product {...allProducts[1]} >
    <button>off 40%</button>
    </Product>

    <Product {...allProducts[2]} >
    <button> off 30% </button>
    </Product>

    <Modal>

    <p> Are you sure want to delete this?</p>
                <ul className="cd-buttons">
                
                <li> <a href="#0"> Yes </a></li>
                <li><a href="#0"> No </a></li>

                </ul>    
    </Modal>

    </div>
  );
}

export default App;
