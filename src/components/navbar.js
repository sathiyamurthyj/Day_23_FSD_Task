
import { FaCartShopping } from "react-icons/fa6";

const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li key="0"><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li key="1"><hr className="dropdown-divider"/></li>
                                    <li key="2"><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li key="3"><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li> 
                        </ul>                
                        <form className="d-flex">
                            <button type="button" className="btn btn-outline-dark">
                            <FaCartShopping /> Cart <span className="badge bg-secondary">{props.count}</span>
                            </button>
                        </form>                  
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;