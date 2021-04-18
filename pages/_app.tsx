import { AppContext } from 'next/app';

import { Navbar } from '../components/Navbar';
import { buildClient } from '../api';
import { AUTH_API } from '../utils';
import { User } from '../types';

import 'bootstrap/dist/css/bootstrap.css';

export const AppComponent = ({ Component, pageProps }) => {
  return (
    <main>
      <Navbar currentUser={pageProps.currentUser} />
      <Component {...pageProps} />
    </main>
  );
};

AppComponent.getInitialProps = async (context: AppContext): Promise<{ currentUser: User | null }> => {
  try {
    const { data } = await buildClient(context.ctx).get(AUTH_API.CURRENT_USER);
    let pageProps = {};
    if (context.Component.getInitialProps) {
      pageProps = await context.Component.getInitialProps(context.ctx);
    }

    return { ...data, pageProps };
  } catch (error) {
    return { currentUser: null };
  }
};

export default AppComponent;
