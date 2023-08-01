import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg";

export const Home =() => {
    const books = ['Mahabharata' ,'Ramayana' , 'Garud Puran' , 'Top-down Approach'];
    const filteredBooks = books.filter((book) => {
        return book!=='Top-down Approach';
    });

    return (
        <>
        <h1>This is home page</h1>
        <NavLink to={"/user"} >User route </NavLink>
        <NavLink to={"/profile"} >Profile</NavLink>

        <ul>
            {
                filteredBooks.map((book) => {
                   return <li> {book} </li>
                })
            }
        </ul>
        <img src={logo} alt="react logo" />
        </>
    )
}