
const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case 'RST-VALUE':
            return {
                ...state, value: 0
            }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }

        default:
            return state
    }
}


export type IncValuesActionType = ReturnType<typeof incCounterValueAC>
export type resetValueActionType = ReturnType<typeof resetValueAC>
export type setValuesFromLocalStorageActionType = ReturnType<typeof setValuesFromLocalStorageAC>
type ActionType = IncValuesActionType | resetValueActionType | setValuesFromLocalStorageActionType


export const incCounterValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValuesFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)
export const resetValueAC = () => ({type: 'RST-VALUE'} as const)

