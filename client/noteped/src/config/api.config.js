import axios from "axios";


const Apimaneger = axios.create({

    baseURL: process.env.NEXT_PUBLIC_API_BASE,
    withCredentials: true,
    
})

export default Apimaneger;