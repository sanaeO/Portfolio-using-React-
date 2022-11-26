
import { createContext , useReducer } from "react";

export const ThemeContext = createContext();
// Initial State :
const INITIAL_STATE = { 
    darkMode : false
}

// Reducer Of dark mode :
const themeReducer  = (state , action) => {
    switch (action.type)
    {
        case 'TOGGLE':
          return  {darkMode : !state.darkMode}
        default:
            return state
    }
}

export const ThemeProvider = (props) => {
  const [state , dispatch] = useReducer(themeReducer , INITIAL_STATE )

  return (
    <ThemeContext.Provider value={{state , dispatch}}>
        {props.children}
    </ThemeContext.Provider>
  )
}


