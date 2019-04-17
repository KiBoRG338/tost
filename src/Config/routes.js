import { TEST1, TEST2, TEST3 } from './routs';
import Test1 from 'Pages/Test1'
import Test2 from 'Pages/Test2'
import Test3 from 'Pages/Test3'

const routes = [
    {
        path: TEST1,
        exact: true,
        component: Test1
    },
    {
        path: TEST2,
        exact: true,
        component: Test2
    },
    {
        path: TEST3,
        exact: true,
        component: Test3
    }
];



export default routes;