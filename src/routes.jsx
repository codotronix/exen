import { Home, Exam, Certify } from './components/pages'

const routes = [
    {
        path: "/", component: Home, displayName: "Home"
    },
    {
        path: "/exam/:examId", component: Exam, displayName: "Exam"
    },
    {
        path: "/certify/:certId", component: Certify, displayName: "Certify"
    }
]

export default routes