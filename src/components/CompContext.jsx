import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const CompContent = ({ children }) => {
  const [name, setName] = useState("Ashik");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Employees() {
      const response = await fetch("https://dummyjson.com/users");

      const dat = await response.json();

      console.log(dat);
      setData(dat);
    }

    Employees();
  }, []);

  return (
    <MyContext.Provider value={[name, setName, data]}>
      {children}
    </MyContext.Provider>
  );
};

export default CompContent;