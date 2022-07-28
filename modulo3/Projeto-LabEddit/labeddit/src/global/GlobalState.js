import React, { Children } from 'react'
import { GlobalContext } from './GlobalContext'


export const GlobalState = () => {
    const Provider = GlobalContext.Provider
    const values = {

    }
    return (
        <Provider value={values}>{Children}</Provider>
    )
}
