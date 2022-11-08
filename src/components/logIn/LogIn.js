import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    
    return (
        <div className="hero bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body w-96">
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
                            <p className='pt-5'>
                                Have an account <Link to='/signUp' className='text-orange-400'>SignUp</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;