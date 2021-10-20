import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { user, signInUsingGoogle } = useAuth();
    // console.log(user);

    const location = useLocation();
    // console.log('came', location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleRegister = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div className="login-form mt-5 pt-5">
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div><hr /></div>
                <button onClick={handleGoogleRegister} className="btn button">Google SignIn</button>
            </div>
        </div>
    );
};
export default Register;