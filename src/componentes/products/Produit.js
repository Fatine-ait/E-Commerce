import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import{Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
const PRODUCTS = [
  
{
   id:3,
   name:'Renault',
   price:5410  ,
   img:'https://www.cdn.renault.com/content/dam/Renault/master/vehicules/megane-bfb-rs-ph1/design/renault-megane-rs-design-019.jpg.ximg.l_3_m.smart.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
},
{
   id:4,
   name:'Citroen',
   price:24700,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/citroen-c3.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
},
 
{
   id:6,
   name:'Toyota',
   price:37700,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
},
{
   id:6,
   name:'Toyota',
   price:37700 ,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
},
{
   id:6,
   name:'Toyota',
   price:37700,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
},
{
   id:6,
   name:'Toyota',
   price:37700,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
},
{
   id:6,
   name:'Toyota',
   price:37700 ,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.' 
},
{
   id:6,
   name:'Toyota',
   price:37700 ,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false ,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.'
}, {
   id:6,
   name:'Toyota',
   price:37700 ,
   img:'https://www.wandaloo.com/files/Voiture-Neuve/toyota-c-hr.jpg',
   inCart:false,
   des:'Dynamic redirects are a fairly common occurrence in any web application, React apps included, but despite this, tutorials illustrating them are not so easy to come by. And examples of redirects with more than one piece of dynamic data are non-existent, which is why I decided to write a piece about just that.' 
} 

];

const CartItem = ({product, removeCartItem}) => (
  <li className="list-group-item">
    <span className="badge">{product.count}</span>
    <a 
      className="c-btn-delete"
      onClick={removeCartItem}
    >
      <i className="fa fa-trash" />
    </a>
    {" "}
    {product.name}
  </li>
)

const Cart = ({toggleCart, productCount, children}) => {
  return (
    <div className="well clearfix">
      <h5 className="ourproduct">Our Product</h5>
      {children}
     
    </div>
     
  );
}
  
const Product = ({product, addToCart}) => (
  
   <div class="card">
     <img class="card-img-top" src={product.img} alt=""/>
     <div class="card-body">
       <h4 class="card-title">{product.name}</h4>
       <h4 class="card-title">{product.price} $</h4>
       <p class="card-text">
       <Link to={"/produitdetails"+"?"+ "code"+"="+product.id+"&" +"nom"+"="+product.name+"&" +"prix"+"="+product.price+"&" +"avatar"+"="+product.img+"&" +"des"+"="+product.des}>         <a href="#" className="btn btn-warning">  Show Details</a></Link>  <b/>
                       <a href="#"  onClick={addToCart} className="btn btn-danger" >Add To Cart</a> 
                       </p>
     </div>
     
   </div>
   
)

const Shop = ({
  productsData, 
  toggleCart, 
  showCart, 
  addToCart, 
  cartItems, 
  removeCartItem
  }) => {
  let products = [], 
      cartListItems = [], 
      productCount = 0,
      totalPrice = 0,
      totalPriceUI = null;
  if (productsData) {
    products = productsData.map(
      (productItem, index) => (
        <Product 
          product={productItem} 
          addToCart={() => addToCart(index)}
        />
      )
    );
  }
  
  if (cartItems.length > 0) {
    cartListItems = cartItems.map(
      (cartListItem, index) => (
        <CartItem 
          product={cartListItem} 
          removeCartItem={() => removeCartItem(index)}
        />
      )
    );
    for(var i = 0; i < cartItems.length; i++) {
      productCount += cartItems[i].count;
      totalPrice += cartItems[i].price * cartItems[i].count;
    }
    totalPriceUI = 
      <li className="list-group-item">
        <h4>Total Price: ${totalPrice}</h4>
        <a className="btn btn-primary">Checkout</a>
      </li>;
  }
  return (
    <div>
        
      <Cart toggleCart={toggleCart} productCount={productCount} > 
        <div className={"c-dropdown " + (showCart ? "is-active" : "")}>
          <ul className="list-group">
            {cartListItems}
            {totalPriceUI}
          </ul>
        </div>      
      </Cart>
        
      <div className="container">
        <div className="row">
          {products}
        </div>
       
      </div>
      <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                   
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
    </div>
  );
}

export default class Produit extends React.Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
      showCart: false,
      cartItems: []
    };
    this.toggleCart = this.toggleCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }
  
  toggleCart() {
    this.setState({
      showCart: !this.state.showCart
    });
  }
  
  addToCart(index) {
    //console.log(index);
    let inCartItems = this.state.cartItems;
    let itemToAdd = this.state.products[index];
    const cartCheck = () => {
      let result = false;
      for (let i = 0; i < inCartItems.length; i++) {
        if (itemToAdd.id === inCartItems[i].id) {
          result = i;
        } 
      }
      return result;
    }
    if(inCartItems.length === 0 || cartCheck() === false) {
      //console.log("new item in cart");
      itemToAdd.count = 1;
      inCartItems.push(itemToAdd);
      //console.log(inCartItems);
    } else {
      //console.log("same item in cart");
      inCartItems[cartCheck()].count += 1;
    }
    this.setState({
      cartItems: inCartItems,
      showCart: true
    });
    //console.log(this.state.cartItems)
  }
  
  removeCartItem(index) {
    const itemRemoved = this.state.cartItems;
    itemRemoved.splice(index, 1);
    this.setState({
      cartItems: itemRemoved
    });
  }
  
  render() {
    return (
      <Shop 
        productsData={this.state.products}
        toggleCart={this.toggleCart}
        showCart={this.state.showCart}
        addToCart={(index) => this.addToCart(index)}
        cartItems={this.state.cartItems}
        removeCartItem={(index) => this.removeCartItem(index)}
      />
      
    );
  }
}

ReactDOM.render(
  <BrowserRouter>  <Produit /> </BrowserRouter> , 
 
  document.querySelector("#root")
);