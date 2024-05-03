import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ensure location.state is not null before accessing its properties
  const [id, setId] = useState(location.state ? location.state.id : "");
  const [title, setTitle] = useState(location.state ? location.state.title : "");
  const [author, setAuthor] = useState(location.state ? location.state.author : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2 className="text-5xl text-center my-6">Update book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            className="input outline mt-5"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            className="input outline mt-5"
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className="btn mt-6" type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
