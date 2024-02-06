import { IUserDataSingle } from "@/interfaces/user.interface";
import Link from "next/link";
import { FC } from "react";
import styles from './UserItem.module.scss';

const UserItem: FC<IUserDataSingle> = ({user}) => {
   


   return (
      <div className={styles.item}>
         <h3>{user.id} - </h3>
         <h3>{user.name}</h3>

         <Link href={`/users/${user.id}`}>Details</Link>
      </div>
   )
}

export default UserItem