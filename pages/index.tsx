import { NextPage } from 'next';
import axios from 'axios';

import { User } from '../types';
import { SSR_URL, CURRENT_USER_URL, MAIN_HOST } from '../utils';

interface HomeProps {
  currentUser?: User | null;
}

export const Home: NextPage<HomeProps> = ({ currentUser }) => {
  console.log('🚀 ~ file: index.tsx ~ line 4 ~ currentUser', currentUser);
  return (
    <div>
      <h2>Tharr she blows ! 🐳</h2>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const isServerSide = typeof window === 'undefined';

  try {
    const { data } = await axios.get<HomeProps>(isServerSide ? SSR_URL : CURRENT_USER_URL, {
      headers: req.headers,
    });

    return data;
  } catch (error) {
    return { currentUser: null };
  }
};

export default Home;
