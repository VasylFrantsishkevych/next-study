import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {

const {push, replace} = useRouter();


   return <div>Car page</div>
}

export default CarPage;