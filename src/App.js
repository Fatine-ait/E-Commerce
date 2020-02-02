import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch,Route } from 'react-router-dom'
import Navbar from './componentes/partials/Navbar'
import Produit from './componentes/products/Produit'
import ProduitInfo from './componentes/products/InfoProduct'

function App() {
  return (
     <div>
        <Navbar/>
        <div  className="container">
        <Switch>
          <Route exact path="/" component={Produit}></Route> 
      
         <Route path="/produitdetails" component={ProduitInfo}></Route>
       
         
        
        </Switch>
        </div>
      
     </div>
     
  );
}

export default App;
