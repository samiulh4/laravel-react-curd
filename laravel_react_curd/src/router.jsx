import {createBrowserRouter} from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout.jsx';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import SignIn from './views/SignIn.jsx'
import SignUp from './views/SignUp.jsx'
import Users from './views/Users.jsx'
import UserForm from './views/UserForm.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />,
            },
            {
                path: '/sign-up',
                element:  <SignUp />,
            }
        ]
    }
]);

export default router;