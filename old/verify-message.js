import React from 'react';
import { ResetCSS } from '../assets/styles/style';
import { GlobalStyle, AppWrapper } from '../components/theme/app.style';
import Logo from '../images/logo.jpeg';
import { useUserStore } from '../store/user';

const VerifyMessage = () => {
    const [sendVerificationEmail, logOut] = useUserStore((state) => [
        state.sendVerificationEmail,
        state.logOut,
    ]);

    const [disabled, setDisabled] = React.useState(false);

    function handleSendPasswordResetEmail() {
        setDisabled(true);
        sendVerificationEmail();
    }

    return (
        <>
            <ResetCSS />
            <GlobalStyle />
            <AppWrapper>
                <div className="account-verification-message">
                    <img className="password-reset-form__logo" src={Logo} alt="logo" height={100} />
                    <p>To use your account, you need to verify your email address.</p>
                    <p>
                        If you haven't received the verification email, please check your spam
                        folder or{' '}
                        <button onClick={handleSendPasswordResetEmail} disabled={disabled}>
                            click here to resend
                        </button>
                    </p>
                    <button onClick={logOut}>Log Out</button>
                </div>
            </AppWrapper>
        </>
    );
};

export default VerifyMessage;
