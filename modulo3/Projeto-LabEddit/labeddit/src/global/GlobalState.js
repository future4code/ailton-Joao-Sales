import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { GetPosts } from '../Services/RequestsAPI';


export const GlobalContext = createContext()

export const GlobalState = (props) => {
    const Provider = GlobalContext.Provider
    const [pagination, setPagination] = useState(0)
    const [post, setPost] = useState([])

    useEffect(() => {
        GetPosts(setPost)
    }, [])


    const values = {
        post,
        setPost
    }
    return (
        <Provider value={values}>{props.children}</Provider>
    )
}
