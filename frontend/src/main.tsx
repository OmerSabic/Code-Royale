import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Auth from "./routes/Auth";
import Dashboard from "./routes/Dashboard";
import Lobby from "./routes/Lobby";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";
import Game from "./routes/Game"
import Updates from "./routes/Updates"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <Dashboard/>,
            },
            {
                path: "lobby",
                element: <Lobby/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "account-settings",
                element: <Settings/>
            },
            {
                path: "game",
                element:<Game/>
            },
            {
                path: "updates",
                element: <Updates/>
            }
        ],
    },
    {
        path: "/auth",
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <Auth/>,
            },
        ]
    }
]);
//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);