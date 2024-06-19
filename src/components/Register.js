import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/account/register', { email, password });
            if (response.data.success) {
                navigate('/login'); 
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="registerdiv">
                    <div className="form-group col-sm-12">
                        <label>Email</label>
                        <br />
                        <div className="col-lg-9">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-group col-sm-12">
                        <label>Password</label>
                        <br />
                        <div className="col-lg-9">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-group col-sm-12">
                        <label>Confirm Password</label>
                        <br />
                        <div className="col-lg-9">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12 btn-submit">
                            <button type="submit" className="btn btn-success">Register</button>
                            <Link to="/login">Already have an account? Click to Login</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
