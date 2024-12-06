import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotpoundPage from "../pages/NotFoundPage/NotpoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import SignPage from "../pages/SignPage/SignPage";



export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/login',
        page: LoginPage,
        isShowHeader: true,
    },
    {
        path: '/sign',
        page: SignPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotpoundPage
    }
]
