import Document, { Head, Html, Main, NextScript } from 'next/document';
import { basePath } from '../../generated/basePath';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={`h-full`}>
        <Head>
          <link
            rel="icon"
            href={`${basePath}/favicon.ico`}
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
