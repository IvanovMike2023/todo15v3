import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
import {Provider} from 'react-redux';
import {store} from './app/store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//++++++++
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
//
// // Types
// type PhotoType = {
//     albumId: string;
//     id: string;
//     title: string;
//     url: string;
// };
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });
//
// const photosAPI = {
//     getPhotos() {
//         return instance.get<PhotoType[]>("pictures?delay=3");
//     },
// };
//
// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     photos: [] as PhotoType[],
// };
//
// type InitStateType = typeof initState;
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "PHOTO/GET-PHOTOS":
//             return { ...state, photos: action.photos };
//         case "PHOTO/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "PHOTO/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };
//
// const getPhotosAC = (photos: PhotoType[]) => ({ type: "PHOTO/GET-PHOTOS", photos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "PHOTO/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "PHOTO/SET-ERROR", error }) as const;
// type ActionsType =
//     | ReturnType<typeof getPhotosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;
//
// const getPhotosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     photosAPI
//         .getPhotos()
//         .then((res) => {
//             dispatch(getPhotosAC(res.data));
//            // dispatch(setLoadingAC(false))
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//            // dispatch(setLoadingAC(false))
//
//         }).then(()=>{
//         dispatch(setLoadingAC(false));
//     });
// };
//
// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//
//     const photos = useAppSelector((state) => state.app.photos);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const error = useAppSelector((state) => state.app.error);
//
//     const getPhotosHandler = () => {
//         dispatch(getPhotosTC());
//     };
//
//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <h2 style={{ color: "red" }}>{!!error && error}</h2>
//             {isLoading && <Loader />}
//             <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//             <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
//                 {photos.map((p) => {
//                     return (
//                         <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <div>
//                                 <img src={p.url} alt="" />
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// 📜 Описание:
// При нажатии на кнопку "Подгрузить фотографии" появляется Loading... и сообщение об ошибке.
// Ваша задача состоит в том, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
// Т.е. если ответ придет успешный - Loader убираем
//      если ответ придет с ошибкой - Loader тоже убираем.
// Напишите код, с помощью которого можно реализовать данную задачу
// В качестве ответа напишите строку кода.

// 🖥 Пример ответа: .then(() =>  dispatch(getPhotosAC(res.data)))

//++++++++++++++++++++++++++++++??
//
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";
//
// // TYPES
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// };
//
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };
//
// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });
//
// const api = {
//     getTodos() {
//         return instance.get<TodoType[]>("todo");
//     },
//     getUsers() {
//         return instance.get<UsersResponseType>("user");
//     },
// };
//
// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     todos: [] as TodoType[],
//     users: [] as UserType[],
// };
//
// type InitStateType = typeof initState;
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/GET-TODOS":
//             return { ...state, todos: action.todos };
//         case "APP/GET-USERS":
//             return { ...state, users: action.users };
//         case "APP/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "APP/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };
//
// const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
// const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;
//
// type ActionsType =
//     | ReturnType<typeof getUsersAC>
//     | ReturnType<typeof getTodosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;
//
// // Utils functions
// function baseErrorHandler(dispatch: Dispatch, message: string) {
//     dispatch(setError(message));
//     dispatch(setLoadingAC(false));
// }
//
// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getTodos()
//         .then((res) => {
//             dispatch(getTodosAC(res.data));
//             dispatch(setLoadingAC(false));
//         })
//         .catch((e: AxiosError) => {
//             console.log(e)
//            baseErrorHandler(dispatch,e.message)
//         });
// };
//
// const getUsersTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getUsers()
//         .then((res) => {
//             dispatch(getUsersAC(res.data.items));
//             dispatch(setLoadingAC(false));
//         })
//         .catch((e: AxiosError) => {
//             // ❗❗❗ XXX ❗❗❗
//         });
// };
//
// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// // COMPONENTS
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };
//
// const App = () => {
//     return (
//         <>
//             <h1>✅Todos & 🙂Users</h1>
//             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                 <Todos />
//                 <Users />
//             </div>
//         </>
//     );
// };
//
// const Todos = () => {
//     const dispatch = useAppDispatch();
//     const todos = useAppSelector((state) => state.app.todos);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//
//     useEffect(() => {
//         dispatch(getTodosTC());
//     }, []);
//
//     return (
//         <div>
//             <h2>✅ Список тудулистов</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             {todos.map((t) => {
//                 return (
//                     <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                         <input type="checkbox" checked={t.completed} />
//                         <b>Описание</b>: {t.title}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
//
// const Users = () => {
//     const dispatch = useAppDispatch();
//     const users = useAppSelector((state) => state.app.users);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//
//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, []);
//
//     return (
//         <div>
//             <h2>🙂 Список юзеров</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <div>
//                 {users.map((u) => {
//                     return (
//                         <div key={u.id}>
//                             <b>name</b>:{u.name} - <b>age</b>:{u.age}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// 📜 Описание:
// Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// Откройте network и вы увидите что запросы падают с ошибками,
// но в коде этот никак не обрабатывается.
// Для обработки ошибок написана утилитная функция baseErrorHandler.
// Ваша задача воспользоваться этой функцией и вывести ошибки на экран.
// Что нужно написать вместо XXX, чтобы ошибки обработались и пользователь их увидел ?
//❗ Код фиксить не нужно.


//+++++++++++++++++++++++++++++
//
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
//
// // Types
// type CommentType = {
//     postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;
// };
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/"});
//
// export const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>("comments");
//     },
// };
//
// // Reducer
// const initState = {
//     comments: [] as CommentType[],
// };
//
// type InitStateType = typeof initState;
//
// const appReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case "COMMENTS/GET-COMMENTS":
//             return { ...state, comments: action.comments };
//
//         default:
//             return state;
//     }
// };
//
// const getCommentsAC = (comments: CommentType[]) =>
//     ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
// type ActionsType = ReturnType<typeof getCommentsAC>;
//
// // Thunk
// const getCommentsTC = (): AppThunk => (dispatch) => {
//     commentsAPI.getComments().then((res) => {
//             console.log(res.data)
//             dispatch(getCommentsAC(res.data));
//         })
//         .catch((e: AxiosError) => {
//             console.log(e)
//             // alert(`Сообщение об ошибке: ${e.message}`);
//         });
// };
//
// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// // Components
// export const App = () => {
//     const comments = useAppSelector((state) => state.app.comments);
//     const dispatch = useAppDispatch();
//     useEffect(() => {
//         dispatch(getCommentsTC());
//     }, []);
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {comments.length ? (
//                 comments.map((c) => {
//                     return (
//                         <div key={c.id}>
//                             <b>Comment</b>: {c.body}{" "}
//                         </div>
//                     );
//                 })
//             ) : (
//                 <h3>❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее</h3>
//             )}
//         </>
//     );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// 📜 Описание:
// ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// В данном задании вам нужно найти ошибку и починить приложение.
// Если сделаете все верно, то увидите комментарии.
// В качестве ответа указать исправленную строку коду

// 🖥 Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))
