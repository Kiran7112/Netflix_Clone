import { auth } from "./config/firebase";

export const login=()=>{
    localStorage.setItem("Token",auth.currentUser.email);
}
export const logout=()=>{
    localStorage.removeItem("Token");
}

export const isLogin=()=>{
    if(localStorage.getItem("Token")){
        return true;
    }
    return false;
}