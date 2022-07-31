import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { GetPosts } from '../Services/RequestsAPI';



export const GlobalState = (props) => {
    const GlobalContext = createContext()
    const Provider = GlobalContext.Provider
    const [pagination, setPagination] = useState(0)
    const [post, setPost] = useState([])

    useEffect(() => {
        GetPosts(setPost)
    }, [])


    const values = {
        post
    }
    return (
        <Provider value={values}>{props.children}</Provider>
    )
}
