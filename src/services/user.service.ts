import { IUser } from "@/interfaces/user.interface";
import axios from "axios"


axios.defaults.baseURL = process.env.API_URL;

export const UserService = {
   async getAll() {
      const {data} = await axios.get<IUser[]>(`/users`)
      return data
   },

   async getById(id: number) {
      const {data} = await axios.get<IUser>(`/users/${id}`)
      return data
   }
}