import React, { useState, useEffect } from 'react'

export const Context = React.createContext()

export const ContextProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const [ candidato, setCandidato ] = useState(null);

  const [option, setOption] = useState([{topic: 'react'}, {topic: 'javaScript'}])

  const [questions, setQuestions] = useState(null)

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
