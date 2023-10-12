/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";
export const PostsList = () => {
  const posts = useLoaderData();
  return (
    <>
      {posts && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is no posts yet.</h2>
          <p>Try somthing to add.</p>
        </div>
      )}
    </>
  );
};
