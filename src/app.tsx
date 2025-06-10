// Layout component that applies the theme to all routes
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material";
import React from "react";
import ChatScreen from "./feature/chat/ChatScreen.tsx";

// Create a theme instance
const theme = createTheme({
  // You can customize your theme here
});

const AppLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Outlet />
        </ThemeProvider>
    );
};

// Define the router with routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <ChatScreen />
            }
            // Add more routes here as needed
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;