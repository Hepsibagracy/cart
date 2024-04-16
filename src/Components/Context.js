import { createContext, useReducer } from "react";
export const Cartcontext = createContext()

function Context (props){
    const  reducer=(state,action)=> {
        switch(action.type)
        {
            case "ADD":

        default:
            return state
        }
    }

    const [state,dispatch] = useReducer(reducer,[])//
    const info={}
    return(
      
        <>
         <Cartcontext.Provider value={state} >
                {props.children}
        </Cartcontext.Provider>
        
        </>
    )
}
export default Context;