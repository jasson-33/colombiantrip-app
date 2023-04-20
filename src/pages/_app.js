import Layout from '@/components/layout';
import ColombianContextProvider from '@/context/ColombianContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ColombianContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColombianContextProvider>
  );
}
