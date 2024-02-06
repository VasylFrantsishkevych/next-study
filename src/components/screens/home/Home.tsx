import { FC } from "react";
// import { Titillium_Web } from "next/font/google";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";
import { IUserData } from "@/interfaces/user.interface";
import UserItem from "@/components/ui/user/UserItem";

// const titillium = Titillium_Web({ 
//    weight: ['300', '400', '600', '700'], 
//    subsets: ['latin'] 
// });

const Home: FC<IUserData> = ({users}) => {
   return (
      <Layout title="Home" description='It is cool'>
         <h1>Users List</h1>
         {users.length ? users.map(user => <UserItem key={user.id} user={user}/>) : <div>Users not found!</div>}
      </Layout>
   )
}

export default Home;