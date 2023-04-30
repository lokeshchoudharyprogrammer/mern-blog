import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { UserContext } from "./UserContext";
import { UserContext } from './../Context/UserContext';
import Home from "../Home/Home";

export default function NavBar() {

    const { setUserInfo, userInfo } = useContext(UserContext);
    // console.log(setUserInfo)
    // const [username, setUsername] = useState("")
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {

                setUserInfo(userInfo.username);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    console.log(username)

    return (
        <>
            <header>
                <Link to="/" className="logo">MyBlog</Link>
                <nav>
                    {username && (
                        <>
                            <Link to="/create">Create new post</Link>
                            <a onClick={logout}>Logout ({username})</a>
                        </>
                    )}
                    {!username && (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </nav>
            </header>

        </>
    );
}