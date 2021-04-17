import { NextPage } from 'next';

import { User } from '../types';
import { buildClient } from '../api';
import { AUTH_API } from '../utils';

interface HomeProps {
  currentUser?: User | null;
}

export const Home: NextPage<HomeProps> = ({ currentUser }) => {
  return <div>{currentUser ? <h2>Tharr she blows ! 🐳</h2> : <h2>Hell no, esse 🦨</h2>}</div>;
};

Home.getInitialProps = async (context) => {
  try {
    const { data } = await buildClient(context).get(AUTH_API.CURRENT_USER);

    return data;
  } catch (error) {
    return { currentUser: null };
  }
};

export default Home;
