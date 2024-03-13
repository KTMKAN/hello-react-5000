import { createBrowserRouter } from 'react-router-dom';

import LayoutA from '@/src/layouts/LayoutA'

import TestPageA from '@/src/pages/TestPageA'
import TestPageB from '@/src/pages/TestPageB'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutA />,
        children: [
            { path: "TestPageA.do", element: <TestPageA /> },
            { path: "TestPageB.do", element: <TestPageB /> },
        ]
    },
]);

export default router;