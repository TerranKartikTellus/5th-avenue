import Head from "next/head";

export default function Headd({title}){
return (
  <Head>
        <title>{title}</title>
        <meta name="description" content="This is a description of my page." />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="/my-script.js"></script> */}
      </Head>
)}