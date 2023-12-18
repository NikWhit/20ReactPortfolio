import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from 'App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
    {
        index: true, 
        element: <About />
    }, {
        path: '/About',
        element: <About />
    }, {
        path: '/Contact',
        element: <Contact />
    }, {
        path: '/Portfolio',
        element: <Portfolio />
    }, {
        path: '/Resume',
        element: <Resume />
    }, 
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)

// src 23-Ins_React-Router *modified to meet criteria