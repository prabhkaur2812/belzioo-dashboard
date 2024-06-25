import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import walkingshoes from "../../../../../assets/Images/Walkingshoes.webp"
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    setErrorMessage('');

    axios.post("http://localhost:3001/login", { username: email, password }).then((res) => {
      console.log(res)
      localStorage.setItem("auth_token", res.data.accessToken)
      navigate("/")
    }).catch((err) => {
      console.log(err)
    })
  };
  return (
    <section className=" bg-light">
      <div className="container ">
        <div className="row d-flex justify-content-center  gap-4 align-items-center ">
          <div className="col-lg-12 col-xl-11">
            <div className=" text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">
                      Sign In
                    </p>

                    <form onSubmit={handleLogin}>
              {/* <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                <p className="lead fw-semibold fs-4 mb-4 me-3">Sign In </p>
              </div> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg fs-6"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg fs-6"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <Link to={""} className="text-body text-decoration-none">
                  Forgot password?
                </Link>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn bg-primary btn-lg text-light style">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{' '}
                  <Link to={"/auth/Register"} className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img0
                      src={walkingshoes}
                        className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="vh-100">
    //   <div className="container-fluid h-custom  ">
    //     <div className="row d-flex gap-4 align-items-center justify-content-center h-100">
    //       <div className="col col-md-3">
    //         <form onSubmit={handleLogin}>
    //           <div className="d-flex flex-row align-items-center justify-content-center gap-3">
    //             <p className="lead fw-semibold fs-4 mb-4 me-3">Sign In </p>
    //           </div>
    //           <div className="form-outline mb-4">
    //             <input
    //               type="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="form-control form-control-lg fs-6"
    //               placeholder="Enter a valid email address"
    //             />
    //             <label className="form-label" htmlFor="form3Example3">
    //               Email address
    //             </label>
    //           </div>
    //           <div className="form-outline mb-3">
    //             <input
    //               type="password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               className="form-control form-control-lg fs-6"
    //               placeholder="Enter password"
    //             />
    //             <label className="form-label" htmlFor="form3Example4">
    //               Password
    //             </label>
    //           </div>
    //           {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    //           <div className="d-flex justify-content-between align-items-center">
    //             <div className="form-check mb-0">
    //               <input className="form-check-input me-2" type="checkbox" />
    //               <label className="form-check-label" htmlFor="form2Example3">
    //                 Remember me
    //               </label>
    //             </div>
    //             <Link to={""} className="text-body text-decoration-none">
    //               Forgot password?
    //             </Link>
    //           </div>
    //           <div className="text-center text-lg-start mt-4 pt-2">
    //             <button type="submit" className="btn bg-primary btn-lg text-light style">
    //               Login
    //             </button>
    //             <p className="small fw-bold mt-2 pt-1 mb-0">
    //               Don't have an account?{' '}
    //               <Link to={"/auth/Register"} className="link-danger">
    //                 Register
    //               </Link>
    //             </p>
    //           </div>
    //         </form>
    //       </div>
    //       <div className=" col col-md-7 ">
    //         <img
    //           src={walkingshoes}
    //           className="w-75 shoes"
    //           alt="Sample image"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Login;