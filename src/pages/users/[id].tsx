import UserDetail from "@/components/screens/user-detail/UserDetail";
import { IUserDataSingle } from "@/interfaces/user.interface";
import { UserService } from "@/services/user.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const UserDetailPage: NextPage<IUserDataSingle> = ({user}) => {
  return (
    <UserDetail user={user}/>
  )
}

interface Params extends ParsedUrlQuery {
   id: string
}

//SSG
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const users = await UserService.getAll()

    return {
      paths: users.map(user => ({
         params: {
            id: user.id.toString(),
         }
      })),
      fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<IUserDataSingle> = async ({
   params,
}) => {
   console.log(params)
   const user = await UserService.getById(Number(params?.id))

   return {
      props: {user},
      revalidate: 60,
   }
}


export default UserDetailPage;