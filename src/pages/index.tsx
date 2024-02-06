import Home from "@/components/screens/home/Home";
import { IUserData } from "@/interfaces/user.interface";
import { UserService } from "@/services/user.service";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";

const HomePage: NextPage<IUserData> = ({users}) => {
  return (
    <Home users={users}/>
  )
}

//SSG
export const getStaticProps: GetStaticProps<IUserData> = async () => {
  const users = await UserService.getAll()

    return {
      props: {users},
      revalidate: 60,
    }
}

// SSR
// export const getServerSideProps: GetServerSideProps<IUserData> = 
// async () => {
//     const users = await UserService.getAll()

//     return {
//       props: {users}
//     }
//   }

export default HomePage;

