import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const NotFound: NextPage = () => {
   return (
      <Layout title='Not Found' description="This page is not exist">
         <div style={{textAlign: 'center'}}>
            <Image src='/404.png' alt="" width={450} height={433}/>
         </div>
         {/* <img src="/404.png" alt="" /> */}
      </Layout>
   )
}

export default NotFound;