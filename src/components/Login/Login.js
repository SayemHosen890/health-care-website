/*import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>login form</h2>
        </div>
    );
};

export default Login;*/
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();

    const location = useLocation();
    console.log('came', location.state?.from);
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/services';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // history.push(redirect_uri);
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div className="login-form mt-5 pt-5 mb-5">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to nirvana website? <Link to="/register">Create Account</Link></p>
                <div><hr /></div>
                <button
                    className="btn button"
                    onClick={handleGoogleLogin}
                >Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;