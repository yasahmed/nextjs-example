import Link from 'next/link';
import Head from 'next/head';

const Index = () => (
  <div>
      <Head>
      <meta name="google-site-verification" content="RgfVe_zgXrs-sgnYxtrTniH-YjyCQewNqYodKg_RKXU" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
   <Link href="/about" title="About Page">
  <a>About Page</a>
</Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;