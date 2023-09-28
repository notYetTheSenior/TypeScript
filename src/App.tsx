import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/productsPage";
import {AboutPage} from "./pages/aboutPage";
import {Navigation} from "./components/navigation";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ProductsPage />}/>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
        </>
    );
}

export default App;
