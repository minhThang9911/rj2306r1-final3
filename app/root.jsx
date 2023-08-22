import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "./styles/app.css";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { Provider } from "react-redux";
import store from "./redux/store";

export const links = () => [
    { rel: "stylesheet", href: cssBundleHref },
    { rel: "stylesheet", href: styles },
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <ThemeProvider theme={dark}>
                    <Provider store={store}>
                        <Outlet />
                    </Provider>
                </ThemeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
