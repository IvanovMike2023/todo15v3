export type AppLoadType = 'loading' | 'sucseded' | 'failed'| 'idle'
type InitStateType = typeof initState

export type setStatusACType=ReturnType<typeof setStatusAC>
export type setErrorusACType=ReturnType<typeof setappErrorusAC>
const initState = {
    error: null as null | string,
    status: 'loading' as AppLoadType
}

export const appReduce = (state: InitStateType = initState, action: appActionsType): InitStateType => {
    switch (action.type) {
        case'APP/Set-STATUS':
            return {
                ...state, status: action.status
            }
        case'APP/Set-ERROR':
            return {
                ...state, error: action.error
            }
        default:
            return state
    }
}

export const setStatusAC=(status:AppLoadType)=>({type:'APP/Set-STATUS',status} as const)
export const setappErrorusAC=(error:null | string)=>({type:'APP/Set-ERROR',error} as const)
export type appActionsType = setStatusACType | setErrorusACType
