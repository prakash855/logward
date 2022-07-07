import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const useData = () => useContext(UserContext);

const initialState = {
  createdAt: null,
  name: "",
  comment: "",
};

const UserProvider = ({ children }) => {
  const [post, setPost] = useState({ ...initialState });
  const [posts, setPosts] = useState([]);
  const [showReply, setShoeReply] = useState(false);
  return (
    <UserContext.Provider
      value={{
        post,
        setPost,
        posts,
        setPosts,
        initialState,
        showReply,
        setShoeReply,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useData, UserProvider };
