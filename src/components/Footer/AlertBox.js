import React, { useContext } from 'react'
import { AlertBoxContainer, AlertBoxMessage, AlertBoxTitle, AlertBoxButton, AlertBoxLoading } from './FooterElement'

import { VscError, VscPass } from 'react-icons/vsc'


import FooterContext from './FooterContext'

const AlertBox = () => {


  const {setIsSuccess,loading,setLoading, isSuccess} = useContext(FooterContext);



  const close = () => {
    setIsSuccess(null);
    setLoading(null);
  }




  return (

    <>

      {loading ?

          <AlertBoxContainer>
            <AlertBoxLoading fontSize={50} color={'blue'} />
            <AlertBoxTitle> Loading </AlertBoxTitle>
            <AlertBoxMessage> Please Wait</AlertBoxMessage>
          </AlertBoxContainer>

        : 
        
        <AlertBoxContainer>

        {isSuccess ?
          <>
            <VscPass fontSize={50} color={'green'} />
            <AlertBoxTitle > Success </AlertBoxTitle>
            <AlertBoxMessage> Email sent successfully</AlertBoxMessage>
            <AlertBoxButton onClick={close}> Close </AlertBoxButton>
          </>

          :

          <>
            <VscError fontSize={50} color={'red'} />
            <AlertBoxTitle > Error</AlertBoxTitle>
            <AlertBoxMessage > Try Again Later</AlertBoxMessage>
            <AlertBoxButton onClick={close}> Close </AlertBoxButton>

          </>


        }


      </AlertBoxContainer>

      }


    </>

  )
}

export default AlertBox

