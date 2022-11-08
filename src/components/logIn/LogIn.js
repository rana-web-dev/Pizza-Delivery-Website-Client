import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const LogIn = () => {


    const { logIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.form?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => console.log(error));
    }


    return (
        <div className="hero bg-base-200 max-w-screen-xl mx-auto">
            <div className="hero-content w-full lg:w-1/2">
                <div className="card shadow-2xl bg-base-100 w-full">
                    <form onSubmit={handleLogIn} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">LogIn</button>
                            <p className='pt-5 flex justify-between items-center'>
                                <p>Have an account <Link to='/signUp' className='text-orange-400'>SignUp</Link></p>
                                <button className='btn' onClick={googleSignIn}>Google</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;