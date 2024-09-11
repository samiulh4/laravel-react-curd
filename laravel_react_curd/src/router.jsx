import {createBrowserRouter} from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

const router = createBrowserRouter([
        {
            path: '/sign-in',
            element: <SignIn/>
        },
        {
            path: '/sign-up',
            element: <SignUp/>
        }
]);

export default router;