import React, {useEffect, useState} from "react";
import Axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../State/Store";
import { createPortal } from "react-dom";

function RequestLogin () {
    const [data, setData] = useState({data : [] });
    const [state, dispatch] = useContext(Context);
    //const history = useHistory(); //pour la redirection avec history.push(url)

    // const { name } = useParams(); // GET UNIQUEMENT
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios({
                url :'http://localhost:8088/users/login',
                method: 'POST',
                headers: new Headers({"Content-Type": "application/json", "Accept":"application/json"}),
                data: state.userData//this.props
                })
            setData(result.data);
        };
        fetchData();
        dispatch({type: 'GET_USER_ID', payload: data});
    }, []);
    return (<div>Vous êtes login en tant que {state.userData.username}</div>);
}
export default RequestLogin;