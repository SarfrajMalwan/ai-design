//import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import '@/styles/aid.scss';
import '@/styles/chatbox.scss';
import '@/styles/navbar.scss';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []

  );
  return <Component {...pageProps} />;
}


