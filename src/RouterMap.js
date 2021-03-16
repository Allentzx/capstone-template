import Dashboard from "./screen/dashboard/Dashboard"
import Register from "./screen/create-user/Register"
import AddUserPostion from "./screen/addUserPosition/AddUserPosition"
import AddUserPos from "./screen/addUserPosition/AddUserPos"
const route = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/AddUserPos",
        exact: true,
        main: () => <AddUserPos/>
    },
    {
        path: "/AddUserPosition",
        exact: true,
        main: () => <AddUserPostion />
    },
    {
        path: "/register",
        exact: true,
        main: () => <Register />
    }
]

export default route