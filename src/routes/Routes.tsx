import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
// import ProductHeader from "../Pages/Product/ProductContent"
import { PageProduct } from "../Pages/Product"

export const PagesRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:products" element={<PageProduct/>}/>
        </Routes>
    )
}

export default Routes