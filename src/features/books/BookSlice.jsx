import { createSlice } from "@reduxjs/toolkit"

const initialBooks ={
    books: [
        { id:1, title: "Love Bangladesh", author: "Anisul Islam" },
        { id: 2, title: "Bangladeshi", author: "Anisul Islam" },
      ],
}

 export const bookSlice = createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state) => state,
        addBook:(state,action) => {
        state.books.push(action.payload)
        },
    }
})

export const  {showBooks,addBook} = bookSlice.actions;
export default bookSlice.reducer;