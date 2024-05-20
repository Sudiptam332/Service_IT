import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect, useState } from "react";

const Authentication = (props) => {


    useEffect(() => {
        //props.handelVisibleSign();
        gotoLogin();
    }, []);

    return <Login />

}

export default Authentication;