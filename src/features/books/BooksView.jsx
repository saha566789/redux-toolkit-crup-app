import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";


const BooksView = () => {
    const books = useSelector((state)=> state.booksReducer.books)
    const dispatch = useDispatch()
    const handleDelete = (id) =>{
   dispatch(deleteBook(id))
    }
    return (
        <div>
            <h1 className="text-5xl text-center my-6">List of Books</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
   <tbody>
    {
        books && books.map((book)=> {
            const {id,title,author} = book;
            return <>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                    <button className="btn btn-accent">Edit</button>
                    <button 
                    className="btn btn-error ml-4"
                    onClick={(()=>{handleDelete(id)})}
                    >Delete</button>
                </td>
            </tr>
            </>
        })
    }
   </tbody>
  </table>
</div>
        </div>
    );
};

export default BooksView;