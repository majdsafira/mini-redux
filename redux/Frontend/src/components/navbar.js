import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../features/users/userSlice";

const Navbar = () => {
  let history = useHistory();
  const isLogged = useSelector((state) => state.users.isLogged);
  const dispatch = useDispatch();
  const handleLogout = () => {

    dispatch(logout());
    // history.push("/home");
    // navigate('/home' , {replace:true})
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Products
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            {isLogged && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/productList">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" onClick={handleLogout} to="/home">
                    Logout
                  </NavLink>
                </li>
              </>
            )}
            {!isLogged && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
