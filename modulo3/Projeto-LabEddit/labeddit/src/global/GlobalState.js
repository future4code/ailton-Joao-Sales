import React, { Children } from 'react'
import { createContext } from "react";


export const GlobalState = () => {
    const GlobalContext = createContext()
    const Provider = GlobalContext.Provider

    const values = {

    }
    return (
        <Provider value={values}>{Children}</Provider>
    )
}
