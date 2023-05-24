import React from 'react';
import { ResetCSS } from '../assets/styles/style';
import { GlobalStyle, AppWrapper } from '../components/theme/app.style';
import RegisterForm from '../components/RegisterForm/index';
import Alert from '../components/Alert/index';

const Register = () => {
    const [alertText, setAlertText] = React.useState('');
    return (
        <div>
            {alertText && <Alert>{alertText}</Alert>}
            <ResetCSS />
            <GlobalStyle />
            <AppWrapper>
                <RegisterForm setAlertText={setAlertText} />
            </AppWrapper>
        </div>
    );
};

export default Register;
