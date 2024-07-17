import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("this", userInfo.token);

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                userInfo.token ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}

export default ProtectedRoute;