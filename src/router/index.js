import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { PrivateRouter, PublicRouter } from '../common/Router'
import { PrivateMap, PublicMap } from './map'

const HandlerRoutes = () => {

    const publicRoutesComponents = PublicMap.map(route => {
        const { component, exact, path, restricted } = route
        return (
            <PublicRouter
                key={path}
                component={component}
                exact={exact}
                path={path}
                restricted={restricted}
            />
        )
    })

    const privateRoutesComponents = PrivateMap.map(route => {
        const { component, exact, path, restricted } = route
        return (
            <PrivateRouter
                key={path}
                component={component}
                exact={exact}
                path={path}
                restricted={restricted}
            />
        )
    })

    return (
        <Router>
            <Switch>
                {[...privateRoutesComponents, ...publicRoutesComponents]}
            </Switch>
        </Router>
    )
}

export default HandlerRoutes