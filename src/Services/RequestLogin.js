import React, {useEffect, useState} from "react";
import Axios from "axios";

async function requestLogin(data) {
    console.log(data);
    const result =  await Axios({
        url :'http://localhost:8088/users/login',
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json", "Accept":"application/json"}),
        data: data
    });
    console.log(result);
    return result;
}

export {requestLogin}