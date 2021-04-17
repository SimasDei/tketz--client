import 'bootstrap/dist/css/bootstrap.css';

interface AppProprs {
  Component: React.FC;
  pageProps: any;
}

export const App: React.FC<AppProprs> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
