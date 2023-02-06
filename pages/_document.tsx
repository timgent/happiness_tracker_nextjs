import { Html, Head, Main, NextScript } from 'next/document'
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
