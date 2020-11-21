import React, { useContext } from "react";
import { Context } from "../State/Store";
import { useHistory } from "react-router-dom";
//import RequestLogin from "./RequestLogin";

function Login () {
    const history = useHistory(); //permet la redirection directe ? en gardant en mémoire l'historic de l'utilisateur ?
    const [state, dispatch] = useContext(Context);

    let loginData = {
        username: '',
        password: ''
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        loginData.username = e.target.login.value;
        loginData.password = e.target.password.value;
        dispatch({type: 'LOGIN', payload: loginData});
        console.log(state);
        history.push('/login');
//        <Redirect to="/login" /> pas besoin avec history.push('/route');
        //React router rediriger sur <RequestLogin value=loginData>
    }
    return(
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="text" name="login"></input>
                <input type="password" name="password"></input>
                <input type="submit" value="login"></input>
            </form>
        </div>
        );
    }
    
    export default Login;