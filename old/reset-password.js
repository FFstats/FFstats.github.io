import React from 'react';
import { ResetCSS } from '../../src/assets/styles/style';
import { GlobalStyle, AppWrapper } from '../../src/components/theme/app.style';
import Alert from '../../src/components/Alert/index';
import SignUpForm from '../../src/components/SignUpForm/index';
import { useUserStore } from '../../src/store/user';
import { Link } from 'gatsby';
import { useProtectedRoute } from '../../src/hooks/useProtectedRoute';

const Test = () => {
    const [alertText, setAlertText] = React.useState('');
    const [sendPasswordResetEmail] = useUserStore((state) => [state.sendPasswordResetEmail]);
    const { loaded } = useProtectedRoute({ userLogged: false, redirectTo: '/dashboard' });

    async function handleSubmit(e) {
        e.preventDefault();

        const elementsArray = [...e.target.elements];
        const formData = elementsArray.reduce((acc, elem) => {
            acc[elem.id] = elem.value;
            return acc;
        }, {});
        const { email } = formData;

        try {
            await sendPasswordResetEmail(email);
        } finally {
            setAlertText(`Password reset link sent to ${email}`);
        }
    }

    if (!loaded) return null;

    return (
        <div>
            {alertText && <Alert>{alertText}</Alert>}
            <ResetCSS />
            <GlobalStyle />
            <AppWrapper>
                <SignUpForm title="Reset Password" handleSubmit={handleSubmit} hidePasswordField />
            </AppWrapper>
        </div>
    );
};

export default Test;
