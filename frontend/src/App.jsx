import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-slate-800">
        <div className="h-1/5 w-full flex justify-center items-center font-semibold text-white text-3xl">
          Total Users {users.length ? users.length : 0}
        </div>
        <div>
          {users.map(user => {
            <div key={user.id} className="text-white h-24 w-96 border-2">
              {user.name}
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
