import React, { Component, useEffect, useState } from "react";
import RequestLogin from "./RequestLogin";


function Login () {
     return(
            <div>
                <form method="POST">
                    <input type="text" name="login"></input>
                    <input type="password" name="password"></input>
                    <input type="submit" value="login"></input>
                </form>
                <RequestLogin/>
            </div>
        );
}

export default Login;