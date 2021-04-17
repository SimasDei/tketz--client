import { useState } from 'react';

import { useRequest } from '../../hooks/';
import { HttpRequest } from '../../types/index';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: HttpRequest.POST,
    body: { email, password },
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = doRequest();
    console.log('🚀 ~ file: signup.tsx ~ line 15 ~ onSubmit ~ data', data);
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
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
