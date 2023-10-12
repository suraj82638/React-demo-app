/* eslint-disable react-refresh/only-export-components */

import classes from "./NewPost.module.css";
import Modal from "../componants/Modal";
import { Form, Link, redirect } from "react-router-dom";
const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="" name="body" required rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts",
    {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json",
      },
    });
  return redirect("/");
}
