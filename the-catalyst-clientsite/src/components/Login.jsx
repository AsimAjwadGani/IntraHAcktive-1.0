import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

// Mock data for users
// const [users, setusers] = useState([
//     { email: 'admin@bracu.com', password: 'admin123', role: 'oca' },
//     { email: 'bucc@club.bracu.edu', password: 'bucc123', role: 'club' },
//     { email: 'bucuc@club.bracu.edu', password: 'bucuc123', role: 'club' },
//     { email: 'robu@club.bracu.edu', password: 'robu123', role: 'club' },
//     { email: 'budtf@club.bracu.edu', password: 'budtf123', role: 'club' },
//     { email: 'buac@club.bracu.edu', password: 'buac123', role: 'club' },
//     { email: 'bizzbee@club.bracu.edu', password: 'bizzbee123', role: 'club' },]);
const users = [
  { email: 'admin@gmail.com', password: 'admin123', role: 'oca' },
  { email: 'bucc@gmail.com', password: 'bucc123', role: 'club' },
  { email: 'bucuc@club.bracu.edu', password: 'bucuc123', role: 'club' },
  { email: 'robu@club.bracu.edu', password: 'robu123', role: 'club' },
  { email: 'budtf@club.bracu.edu', password: 'budtf123', role: 'club' },
  { email: 'buac@club.bracu.edu', password: 'buac123', role: 'club' },
  { email: 'bizzbee@club.bracu.edu', password: 'bizzbee123', role: 'club' },
];

const Login = () => {

    // const loadedUsers = useLoaderData();
    // const [users, setUsers] = useState(loadedUsers);
    // console.log(users);
    
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // state for email
  const [password, setPassword] = useState(''); // state for password
  const [error, setError] = useState(''); // state for error message

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Find the user based on the entered email and password
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // Clear any previous error
      setError('');
      
      // Navigate based on the user's role
      if (user.role === 'oca') {
        navigate('/ocaDashboard'); // Navigate to OCA Admin dashboard
      } else if (user.role === 'club') {
        navigate('/panel'); // Navigate to Club Panel dashboard
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Login as an OCA or Club Panel member. If you haven't registered, please report to the OCA office.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email} // Bind input value to email state
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password} // Bind input value to password state
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
