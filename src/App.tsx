import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThemeContextProvider from "./context/theme-context";

function App() {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ThemeContextProvider>
        </BrowserRouter>
    );
}

export default App;