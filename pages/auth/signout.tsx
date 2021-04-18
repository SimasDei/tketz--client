import { useEffect } from 'react';
import Router from 'next/router';

import { useRequest } from '../../hooks';
import { HttpRequest } from '../../types/index';
import { AUTH_API } from '../../utils';

export const Signout: React.FC = () => {
  const { doRequest, errors } = useRequest({
    url: AUTH_API.SIGN_OUT,
    method: HttpRequest.GET,
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <div>
      <h4>Signing out ✌️🐼</h4>
    </div>
  );
};

export default Signout;
