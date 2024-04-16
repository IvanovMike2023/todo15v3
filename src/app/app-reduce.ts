export type AppLoadType = 'loading' | 'sucseded' | 'failed'| 'idle'
type InitStateType = typeof initState

type setStatusACType=ReturnType<typeof setStatusAC>
const initState = {
    status: 'loading' as AppLoadType
}

export const appReduce = (state: InitStateType = initState, action: appActionsType): InitStateType => {
    switch (action.type) {
        case'APP/Set-STATUS':
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const setStatusAC=(status:AppLoadType)=>({type:'APP/Set-STATUS',status} as const)
export type appActionsType = setStatusACType
