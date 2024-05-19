import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Lobby from "./routes/Lobby";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "auth",
                element: <Auth />,
            },
            {
                path: "",
                element: <Home />,
            },
            {
                path: "lobby",
                element: <Lobby />,
            }
        ],
    },
]);
//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);