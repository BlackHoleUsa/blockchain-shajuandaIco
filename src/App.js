import React from "react";
import './App.css';

import { Switch, withRouter } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import PublicRoute from './Routes/public.routes';
import MainLayout from "./hoc/Layout/Layout";


import Dashboard from './screens/Dashboard/Dashboard';

const Shajuanda = (props) => {

  return(

    <Switch>
      <MainLayout>
        <PublicRoute exact={true} route={`/${Routes.dashboard}`} component={Dashboard} restricted={true} />
      </MainLayout>
    </Switch>

  );

}

export default withRouter(Shajuanda);
