import React, {useEffect, useState} from "react";
import Axios from "axios";

function RequestLogin () {
    const [data, setData] = useState({data : [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios({
                url :'http://localhost:8088/users/login',
                method: 'POST',
                headers: new Headers({"Content-Type": "application/json", "Accept":"application/json"}),
                data: {'username': 'oui', 'password': 'oui'}
                })
            setData(result.data);
        };
        fetchData();
    }, []);
    console.log(data);
    return (<div>bonjour</div>);
}
export default RequestLogin;