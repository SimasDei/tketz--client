import { useState } from 'react';
import axios from 'axios';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/signup', { email, password });
      console.log('🚀 ~ file: signup.tsx ~ line 12 ~ onSubmit ~ response', response.data);
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors.length > 0 && (
        <div className="alert alert-danger">
          <h4>Oh no! 🔥</h4>
          <ul className="my-0">
            {errors.map((error) => (
              <li key={error.message}> {error.message} </li>
            ))}
          </ul>
        </div>
      )}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
