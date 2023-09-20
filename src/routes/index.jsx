import Dashboard from '../components/Dashboard/index'
import Form from '../components/Form'
import CropsDisplay from '../components/CropsDisplay'

const publicRoutes = [
    { path: '/', component: Dashboard },
    { path: '/form', component: Form },
    { path: '/crops-display', component: CropsDisplay },
    //add more public paths here
]

//when users not login yet
const privateRoutes = [
    //add more private paths here
]

export { privateRoutes, publicRoutes };