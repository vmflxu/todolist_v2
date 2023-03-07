import { BrowserRouter, Route, Routes } from "react-router-dom";
import Center from "../Center";
import Details from "../components/contents/Details";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Center />} />
                <Route path="details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;