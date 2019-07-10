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
    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
              );
              setData(result.data);
        }
        fetchData();
      }, []);

    return (
        <div>
        <Head>
        <meta name="google-site-verification" content="RgfVe_zgXrs-sgnYxtrTniH-YjyCQewNqYodKg_RKXU" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.id}>{item.title}</a>
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