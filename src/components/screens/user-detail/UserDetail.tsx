import Layout from "@/components/layout/Layout";
import UserItem from "@/components/ui/user/UserItem";
import { IUserDataSingle } from "@/interfaces/user.interface";
import { FC } from "react";

const UserDetail: FC<IUserDataSingle> = ({user}) => {
   return (
      <Layout title={user.name} description="It is very nice user!">
         <UserItem user={user}/>
      </Layout>
   )
}

export default UserDetail;