import {useState, createContext } from 'react'

export const MessageContext = createContext(null)

export const MessageProvider = ({children}) => {
    const [updateMessage, SetUpdateMessage] = useState()

    return (
        <MessageContext.Provider value={[updateMessage, SetUpdateMessage]}>
            {children}
        </MessageContext.Provider>
    )
}