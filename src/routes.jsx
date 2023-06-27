import { Home, Exam, Certify } from './components/pages'

export const routes = [
    {
        path: "/", element: <Home />
    },
    {
        path: "/exam/:examId", element: <Exam />
    },
    {
        path: "/certify/:certId", element: <Certify />
    }
]