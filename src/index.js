import React from "react";
import ReactDOM from "react-dom";
import messagesES from "./locales/es";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist";
import messagesEN from './locales/en';



const userLanguage = navigator.language || navigator.userLanguage;
const messages = userLanguage.startsWith('es-ES') ? messagesES : messagesEN;

ReactDOM.render(
    <IntlProvider locale={userLanguage} messages= {messages}>
            <JobsList/>
            
    </IntlProvider>, document.getElementById("root")
);