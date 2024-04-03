import React, { createContext, useEffect, useState } from "react";
import UserTokenStorage from "../storages/UserTokenStorage";
const AuthContext = createContext({});

const AuthContextProvider = (props) => {
    const [userToken, setUserToken] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const onLoad = async () => {
        let tk = await UserTokenStorage.readItem();
        setUserToken(tk);
    };
    useEffect(() => { onLoad(); }, []);

    return (
        <AuthContext.Provider value={{ userToken, setUserToken, user, setUser, loading, setLoading }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
