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
    const [
        loading,
        createUserWithEmailAndPassword,
        sendVerificationEmail,
    ] = useUserStore((state) => [
        state.loading,
        state.createUserWithEmailAndPassword,
        state.sendVerificationEmail,
    ]);
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
            await createUserWithEmailAndPassword(email, password);
            await sendVerificationEmail();
            console.log('sending email');
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
                <SignUpForm title="Sign Up" handleSubmit={handleSubmit}>
                    <div>
                        Already have an account? <Link to="/log-in">Log In</Link>
                    </div>
                </SignUpForm>
            </AppWrapper>
        </div>
    );
};

export default Test;
