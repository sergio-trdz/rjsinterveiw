import React, { useState } from 'react'

export const Context = React.createContext()

export const ContextProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const [ candidato, setCandidato ] = useState(null);

  const [option, setOption] = useState(undefined)

  const [questions, setQuestions] = useState([])

  return(
    <Context.Provider value={{
      user,
      setUser,
      candidato,
      setCandidato,
      option,
      setOption,
      questions,
      setQuestions,
    }}>
      {children}
    </Context.Provider>
  )
}
