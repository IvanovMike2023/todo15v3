import {setappErrorusAC, setErrorusACType, setStatusAC, setStatusACType} from "../app/app-reduce";
import {Dispatch} from "redux";
import {updateTaskAC} from "../features/TodolistsList/tasks-reducer";
import {ResponseType} from "../api/todolists-api";

export const handleServerAppError = <D>(dispatch: errorUtilsDispatch, data: ResponseType<D>) => {
    if (data.messages.length) {
        dispatch(setappErrorusAC(data.messages[0]))
    } else dispatch(setappErrorusAC('server not messages'))
    dispatch(setStatusAC('failed'))
}
export const handleServerNetworkError = (dispatch: errorUtilsDispatch, e: { message: string }) => {
    dispatch(setappErrorusAC(e.message))
    dispatch(setStatusAC('sucseded'))

}
type errorUtilsDispatch = Dispatch<setStatusACType | setErrorusACType>