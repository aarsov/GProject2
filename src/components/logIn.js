import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/account/login', { email, password });
            if (response.data.success) {
                navigate('/'); // Redirect to home page on successful login
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="logindiv">
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

                    <div className="form-group">
                        <div className="col-sm-12 btn-submit">
                            <button type="submit" className="btn btn-success">Login</button>
                            <Link to="/register">Don't have an account? Click to Register</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
