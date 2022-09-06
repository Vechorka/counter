import {combineReducers, createStore} from "redux";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers(
    {
        counter: counterReducer
    }
)

let preloadedState;
const persistedTodosString = localStorage.getItem('appState')
if (persistedTodosString){
    preloadedState = JSON.parse(persistedTodosString)
}

export  type AppStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, preloadedState)

store.subscribe(()=>{
    localStorage.setItem('appState' , JSON.stringify(store.getState()))
})

// type AppStoreType = typeof store
