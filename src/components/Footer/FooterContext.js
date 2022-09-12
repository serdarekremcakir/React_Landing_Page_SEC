import React,{createContext, useState} from 'react'

const FooterContext = createContext();

export const FooterContextProvider = ({children}) => {
    
    const [isSuccess,setIsSuccess] = useState(null);
    const [loading,setLoading] = useState(null);


  return (
    <FooterContext.Provider value={{isSuccess,setIsSuccess,loading,setLoading}}>
        {children}
    </FooterContext.Provider>
  )
}

export default FooterContext