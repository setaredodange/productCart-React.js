import './Product.css';



// function Product(){
//     return(
//     <div>

//     <h2> Product Card</h2>
        
//         <div className="card">
       
//             <img src="download.jpg"/> 
//             <h1>iPhone 14</h1>
//             <p className="price"> $1200</p>
//             <p> it is the best and new phone for 2022 , smart and beautiful color</p>
//             <p><button> Add to cart</button></p>

//         </div>


//     </div>

//     );
// }

// export default Product;

function Product(props){
    return(
    <div>

    <h2> Product Card</h2>
        
        <div className="card">
       
        <img src={props.img}/>
            <h1>{props.name}</h1>
            <p className="price"> {props.price}</p>
            <p> {props.content}</p>
            <p><button> Add to cart</button></p>

        </div>


    </div>

    );
}

export default Product;