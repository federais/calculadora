import { Route, Switch } from 'react-router-dom'

//INDEXES
import home from '../pages/home'
import matematica from '../pages/math'

//Matematica
import pitagoras from '../pages/math/pitagoras'


const router = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={home} />

            {/* Matematica */}
            <Route exact path={'/matematica'} component={matematica} />
            <Route exact path={'/matematica/pitagoras'} component={pitagoras} />


        </Switch>
    )
}

export default router