import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export  const refreshFun =()=>{
  console.log('zaybal')
}

const UserContext = ({ children }) => {
  const [user, setUser] = useState( false);
  const [loading, setLoading] = useState(true)



  useEffect(()=>{
    setLoading(false)
    setUser(localStorage.getItem('user') && true)
  },[])
  
  return (
    <Context.Provider value={{ user, setUser, loading }}>{children}</Context.Provider>
  );
};

export default UserContext;
