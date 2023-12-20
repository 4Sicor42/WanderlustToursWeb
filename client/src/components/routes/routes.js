import Admin from "../pages/admin"
import Search from "../pages/searchExc"
import Auth from "../pages/auth"
import Excursion from "../pages/excursion"
import Excursions from "../pages/AllExcursions"
import NotFound from "../pages/NotFound"



import { ADMIN_ROUTE, ALL_EXCURIONS_ROUTE, EXCURION_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE,NOT_FOUND_ROUTE } from "../utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: SEARCH_ROUTE,
        Component: Search
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: EXCURION_ROUTE + '/:id',
        Component: Excursion
    },
    {
        path: ALL_EXCURIONS_ROUTE,
        Component: Excursions
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: NotFound
    },
    
]