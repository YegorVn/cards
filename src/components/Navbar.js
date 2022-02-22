import { Link } from 'react-router-dom';
import home from '../images/icons/home.svg'

const Navbar = () => {
    return (
      <>
      <header className="ghost-header"></header>
      <header className="header col-12">
        <div className="header__navbar col-10 ms-auto me-auto d-flex">
          <Link to="/Main" className="header__link">
            <img
              src={home}
              width={30}
              height={30}
              className="header__icon mt-3 ms-1"
              alt=""
            />
          </Link>
          <Link to="/Create" className="ms-auto mt-3">
            Create
          </Link>
        </div>
      </header></>
      
    );
}

export default Navbar;