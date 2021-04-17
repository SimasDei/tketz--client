import axios from 'axios';
import { NextPageContext } from 'next';

import { SSR_URL } from '../utils';

export const buildClient = ({ req }: NextPageContext) => {
  const isServerSide = typeof window === 'undefined';

  if (isServerSide) {
    return axios.create({
      baseURL: SSR_URL,
      headers: req.headers,
    });
  }
  return axios.create({
    baseURL: '/',
  });
};

export default buildClient;
