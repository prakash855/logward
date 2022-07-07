import "./App.css";
import Post from "./components/Post/Post";
import UserForm from "./components/UserForm/UserForm";
import { useData } from "./contexts/user-context";

function App() {
  const { posts } = useData();

  return (
    <div className="App">
      <UserForm type="Comment" name="Name" />
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
