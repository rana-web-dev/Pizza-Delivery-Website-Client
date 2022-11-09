import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const [check, setCheck] = useState();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            setCheck('User Create Success.')
        })
        .catch(error => setCheck(error.message));
    }

    return (
        <div className="hero bg-base-200 max-w-screen-xl mx-auto">
            <div className="hero-content w-full lg:w-1/2">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className='text-orange-500'>
                            {check}
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">SignUp</button>
                            <p className='pt-5'>
                                Have an account <Link to='/logIn' className='text-orange-400'>LogIn</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;