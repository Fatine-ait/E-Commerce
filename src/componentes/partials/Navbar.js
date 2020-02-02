import React from 'react'
import{Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#"><Link to="/"><h5 className="car"> <i className="fa fa-car"></i>   Car acquisition</h5></Link></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active" >
                            <a className="nav-link" href="#">  <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <span className="badge badge-warning"> <i className="fa fa-cart-plus">Cart</i> </span><br/>
           
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
