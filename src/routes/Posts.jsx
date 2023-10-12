import { Outlet } from "react-router-dom";
import { PostsList } from "../componants/PostsList";

const Posts = () => {
  return (
    <>
    <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
  );
};

export default Posts;

export async function Loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}