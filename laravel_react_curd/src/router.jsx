import {createBrowserRouter} from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout.jsx';
import SignIn from './views/SignIn.jsx'
import SignUp from './views/SignUp.jsx'
import Users from './views/Users.jsx'

const router = createBrowserRouter([
        {
            path : '/',
            element : <GuestLayout />,
            children : [
                {
                    path: '/sign-in',
                    element: <SignIn />
                },
                {
                    path: '/sign-up',
                    element: <SignUp />
                }
            ]
        },
        {
            path: '/users',
            element: <Users />
        },
]);

export default router;