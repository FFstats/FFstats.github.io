import React from 'react';
import { ResetCSS } from '../assets/styles/style';
import { GlobalStyle, AppWrapper } from '../components/theme/app.style';
import Alert from '../components/Alert/index';
import SignUpForm from '../components/SignUpForm/index';
import { useUserStore } from '../store/user';
import { Link } from 'gatsby';
import { useProtectedRoute } from '../hooks/useProtectedRoute';

const Test = () => {
    const [alertText, setAlertText] = React.useState('');
    const [logInWithEmailAndPassword] = useUserStore((state) => [state.logInWithEmailAndPassword]);
    const { loaded } = useProtectedRoute({ userLogged: false, redirectTo: '/dashboard' });

    async function handleSubmit(e) {
        e.preventDefault();

        const elementsArray = [...e.target.elements];
        const formData = elementsArray.reduce((acc, elem) => {
            acc[elem.id] = elem.value;
            return acc;
        }, {});

        const { email, password } = formData;
        try {
            await logInWithEmailAndPassword(email, password);
            setAlertText('');
        } catch {
            setAlertText('There was an error signing you up');
        }
    }

    if (!loaded) return null;

    return (
        <div>
            {alertText && <Alert>{alertText}</Alert>}
            <ResetCSS />
            <GlobalStyle />
            <AppWrapper>
                <SignUpForm title="Log In" handleSubmit={handleSubmit} showPasswordReset>
                    <div>
                        Don't have an account? <Link to="/sign-up">Sign Up</Link>
                    </div>
                </SignUpForm>
            </AppWrapper>
        </div>
    );
};

export default Test;
