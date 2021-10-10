import React, { useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAutht';
const Login = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const { user, googleSignIn } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const [error, setError] = useState('')


    const handleGoogleLohin = (e) => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                history.push(location.state?.from);
            })
            .catch(error => {
                console.log(error.message);
                setError(error)
            })
    }
    return (
        <div>
            <div className="container login-form bg-white mt-5 w-25 shadow p-3 mb-5 bg-body rounded">
                <form>
                    <h4 className="text-center fw-bold fst-italic ">Login</h4>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control shadow-none" id="exampleInputPassword1" />
                        <small className="text-end pt-2 d-block text-muted fw-bol">Forget Password ?</small>
                    </div>
                    <button type="submit" className="btn login-btn text-dark fw-bold">Log in</button>

                    <span className="text-center d-block pt-4 fw-bold text-muted">Or login with</span><hr />
                    <div className="d-flex justify-content-center">
                        <button className="log-icon">{facebook}</button>
                        <button onClick={handleGoogleLohin} className="log-icon">{google}</button>
                        <button className="log-icon">{twitter}</button>
                    </div>
                </form>
                <span className="text-muted d-block text-center pt-4 mt-4"> Not a member ?
                    <Link className="text-muted " to="/signup"> Sign up now</Link>
                </span>
            </div>
        </div>
    );
};

export default Login;