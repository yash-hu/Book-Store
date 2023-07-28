import { NavLink } from "react-router-dom"

export const Home =() => {
    const books = ['Mahabharata' ,'Ramayana' , 'Garud Puran' , 'Top-down Approach'];
    const filteredBooks = books.filter((book) => {
        return book!=='Top-down Approach';
    });

    return (
        <>
        <h1>This is home page</h1>
        <NavLink to={"/user"} >User route</NavLink>
        <ul>
            {
                filteredBooks.map((book) => {
                   return <li> {book} </li>
                })
            }
        </ul>
        </>
    )
}