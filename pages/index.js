import Link from 'next/link';
import Head from 'next/head';
import { useState,useEffect } from 'react';
import axios from 'axios';

// const Index = () => (

//     const [data, setData] = useState({ hits: [] });
//   <div>
//       <Head>
//       <meta name="google-site-verification" content="RgfVe_zgXrs-sgnYxtrTniH-YjyCQewNqYodKg_RKXU" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta charSet="utf-8" />
//     </Head>
//    <Link href="/about" title="About Page">
//   <a>About Page</a>
// </Link>
//     <p>Hello Next.js</p>
//   </div>
// );



function Index() {
    const [data, setData] = useState({ hits: [] });


    useEffect(async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
      );
  
      setData(result.data);
      return true;
    },[]);
  
    return (
        <div>
        <Head>
        <meta name="google-site-verification" content="RgfVe_zgXrs-sgnYxtrTniH-YjyCQewNqYodKg_RKXU" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
{/* 
     <Link href="/about" title="About Page">
    <a>About Page</a>
  </Link>
      <p>Hello Next.js</p> */}
      </div>
    );
  }
  

export default Index;