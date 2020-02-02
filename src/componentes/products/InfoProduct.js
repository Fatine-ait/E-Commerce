 import React, { Component } from 'react'
 import{Link} from 'react-router-dom'
  

 export default class InfoProduct extends Component {
     
     render() {
       
        const params = new URLSearchParams(this.props.location.search);
        const nom = params.get('nom'); 
        const prix = params.get('prix'); 
        const avatar = params.get('avatar'); 
        const des = params.get('des'); 
         return (
           <div>
               <p  > </p> 
               <div class="card-group">
   
  <div class="card">
    <img class="card-img-top" src={avatar} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{prix} $   </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
       
    </div>
    <p  className="showdetail">
                      
                       <Link to="/"> <a href="#" className="btn btn-danger" >Continue your shopping</a></Link>
                       </p>
  </div>

  <div class="card">
     
    <div class="card-body">
      <h5 class="card-title">{nom}</h5>
      <p class="card-text">{des}</p>
      
       
             <div>
      <p class="card-text"><small class="text-muted">Choose Color:</small></p>
      <section class="box">
				<section class="color-left grapefruit-light"></section>
				<section class="color-right grapefruit-dark"></section>
			 
			</section>
		 
			<section class="box">
				<section class="color-left bittersweet-light"></section>
				<section class="color-right bittersweet-dark"></section>
				 
			</section>
	 
			<section class="box">
				<section class="color-left sunflower-light"></section>
				<section class="color-right sunflower-dark"></section>
			 
			</section>
	 
			<section class="box">
				<section class="color-left grass-light"></section>
				<section class="color-right grass-dark"></section>
			 
			</section>
		 
			<section class="box">
				<section class="color-left mint-light"></section>
				<section class="color-right mint-dark"></section>
			 
			</section>
	 
			<section class="box">
				<section class="color-left aqua-light"></section>
				<section class="color-right aqua-dark"></section>
			 
			</section>
		 
			<section class="box">
				<section class="color-left blueJeans-light"></section>
				<section class="color-right blueJeans-dark"></section>
			 
			</section>
	 
			<section class="box">
				<section class="color-left lavander-light"></section>
				<section class="color-right lavander-dark"></section>
				 
			</section>
	 
			<section class="box">
				<section class="color-left pinkRose-light"></section>
				<section class="color-right pinkRose-dark"></section>
			 
			</section>
		 
			<section class="box">
				<section class="color-left lightGray-light"></section>
				<section class="color-right lightGray-dark"></section>
			 
			</section>
		 
			<section class="box">
				<section class="color-left mediumGray-light"></section>
				<section class="color-right mediumGray-dark"></section>
				 
			</section>
		 
			<section class="box">
				<section class="color-left darkGray-light"></section>
				<section class="color-right darkGray-dark"></section>
			 
			</section>
	 

	 
      </div>
    </div>
  </div>
</div>
           </div>  
         )
        
     }
 }
 