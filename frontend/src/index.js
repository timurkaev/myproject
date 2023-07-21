import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import N2O from 'n2o-framework';
import createFactoryConfig from "n2o-framework/lib/core/factory/createFactoryConfig";
import authProvider from "n2o-framework/lib/core/auth/authProvider";
import CustomHeader from "./components/plugins/CustomHeader";

import 'n2o-framework/dist/n2o.css';
import './index.scss';

const config = {
    templates: {
      CustomHeader
    },
    security: {
        authProvider,
        externalLoginUrl: '/'
    }
};

ReactDOM.render(
    <React.StrictMode>
        <N2O {...createFactoryConfig(config)} />
    </React.StrictMode>,
    document.getElementById('root')
);