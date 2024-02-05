import { FC } from "react";
import Image from "next/image";
// import { Titillium_Web } from "next/font/google";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";

// const titillium = Titillium_Web({ 
//    weight: ['300', '400', '600', '700'], 
//    subsets: ['latin'] 
// });

const Home: FC = () => {
   return (
      <Layout>
         Hello
      </Layout>
   )
}

export default Home;