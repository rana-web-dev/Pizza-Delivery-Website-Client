import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../title/title";

const LogIn = () => {
  useTitle("Login");
  const { logIn, googleSignIn, loading } = useContext(AuthContext);
  const [userCreateSuccess, setUserLogInSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        if (loading) {
          return <h1 className="text-5xl">Loading...</h1>;
        }
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserLogInSuccess('User LogIn Successfully');
        toast('User LogIn Successfully');
        navigate(from, { replace: true });
        if (loading) {
          return <h1 className="text-5xl">Loading...</h1>;
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero lg:min-h-screen max-w-screen-xl mx-auto">
      <ToastContainer />
      <div className="hero-content w-full lg:w-1/2">
        <div className="card shadow-2xl bg-base-100 w-full">
          <form onSubmit={handleLogIn} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">LogIn</button>
              <p>{userCreateSuccess}</p>
              <p className="pt-5 flex justify-between items-center">
                <p>
                  Have an account{" "}
                  <Link to="/signUp" className="text-orange-400">
                    SignUp
                  </Link>
                </p>
                <button className="btn" onClick={handleGoogleLogIn}>
                  Google
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
