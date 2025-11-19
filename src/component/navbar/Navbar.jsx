import logo from "../../assets/imagee1.jpg";
import style from './navbar.module.css'
export default function Navbar() {
  return (
    <>
   
      <div className="Navbar p-5">
        <div className="row">
          <div className="container-fluid d-flex align-items-center justify-content-between ">
            <div className="logo col-md-3 ">
              <a href="#">
                <img src={logo} alt="logo" style={{ width: "125px" }} />
              </a>
            </div>
            <div className="nav-link col-md-6 gap-4 d-flex " >
              <a href="" className={`${style.a}`}>Become a renter</a>
              <a href=""  className={`${style.a}`}>Rental deals</a>
              <a href=""  className={`${style.a}`}>How it works</a>
              <a href=""  className={`${style.a}`}>Why choose us</a>
            </div>
            <div className="sign d-flex align-items-center">
              <a href=""  className="" style={{color:'black'}}>
                Sign in
              </a>

          
              <button type="button" className="btn btn-primary mx-2 px-3 py-2  " style={{fontSize:'20px'}}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
