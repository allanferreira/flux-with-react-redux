import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes'

export default ({ children }) => (
    <BrowserRouter>
        {children}
        { routes.map((routeProps, index) =>
            <Route key={index} {...routeProps} />
        )}
    </BrowserRouter>
)

export { routes }
