import React from 'react';
import '../Login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


const Signup = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div>
            <div className="container login-form bg-white mt-5 w-25 shadow p-3 mb-5 bg-body rounded">
                <form>
                    <h4 className="text-center fw-bold fst-italic ">Sign Up</h4>
                    <hr />
                    <div className="mb-3">
                        <input type="text" className="form-control shadow-none" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control shadow-none" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control shadow-none" id="exampleInputPassword1" placeholder=" Confirm Password" />
                    </div>
                    <button type="submit" className="btn login-btn text-dark fw-bold">Sign Up</button>

                    <span className="text-center d-block pt-4 fw-bold text-muted">Or Sign up with</span><hr />
                    <div className="d-flex justify-content-center">
                        <button className="log-icon">{facebook}</button>
                        <button className="log-icon">{google}</button>
                        <button className="log-icon">{twitter}</button>
                    </div>
                </form>
                <span className="text-muted d-block text-center pt-4 mt-4"> Already member ?
                    <Link className="text-muted " to="/login"> Login now</Link>
                </span>
            </div>
        </div>
    );
};

export default Signup;