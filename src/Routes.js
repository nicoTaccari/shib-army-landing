import React from 'react'
import { Switch, Route } from "react-router-dom";


export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ } />
                <Route exact path='/Team' component={ } />
                <Route exact path='/Terms-and-conditions' component={ } />
            </Switch>
        </div>
    )
}

export default Routes
