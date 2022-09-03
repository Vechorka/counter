

const initialState = {
    value: 0
}

export type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: AllActionsType):InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return{
            ...state, value: state.value + 1
        }
        case "RESET-VALUE":
            return{
                ...state, value: 0
            }
        case "SET-LOCAL-STORAGE-VALUE":
            return {
                ...state, value: action.value
            }
        default:
            return state
    }
}

type AllActionsType = IncValueActionType | ResetValueActionType | setLocalStorageActionType
type IncValueActionType = ReturnType<typeof incValueAC>
type ResetValueActionType = ReturnType<typeof resetValueAC>
type setLocalStorageActionType = ReturnType<typeof setLocalStorageValueAC>
export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setLocalStorageValueAC = (value: number) => ({type: 'SET-LOCAL-STORAGE-VALUE', value} as const)