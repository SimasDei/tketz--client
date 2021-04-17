import { useState } from 'react';
import axios from 'axios';

import { HttpRequest, Error } from '../types';

interface RequestProps {
  url: string;
  method: HttpRequest;
  body: any;
  onSuccess: (data?: any) => void;
}

export const useRequest = ({ url, method, body, onSuccess }: RequestProps) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios({ method, url, data: body });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Oh no! 🔥</h4>
          <ul className="my-0">
            {err.response.data.errors.map((error: Error) => (
              <li key={error.message}> {error.message} </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
