import React from 'react';
import { getFirebase } from '../../src/lib/firebase';
import Button from '../../src/components/theme/Button';
import Logo from '../images/logo.jpeg';
import { Link } from 'gatsby';

const mode =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('mode');
const oobCode =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('oobCode');
const Auth = () => {
    const firebase = getFirebase();

    const [message, setMessage] = React.useState({
        content: '',
        type: '',
    });
    const [disabled, setDisabled] = React.useState(false);

    function handlePasswordReset(e) {
        e.preventDefault();
        setDisabled(true);
        const newPassword = e.target.elements.password.value;
        firebase
            .auth()
            .confirmPasswordReset(oobCode, newPassword)
            .then((resp) => {
                setMessage({
                    content: 'Your password has been reset',
                    type: 'success',
                });
            })
            .catch((err) => {
                setMessage({
                    content: 'There was an error resetting your password',
                    type: 'error',
                });
            });
    }

    React.useEffect(() => {
        if (mode === 'verifyEmail') {
            firebase
                .auth()
                .applyActionCode(oobCode)
                .then((resp) => {
                    setMessage({
                        content: 'Your email has been verified',
                        type: 'success',
                    });
                })
                .catch((err) => {
                    setMessage({
                        content: 'There was an error verifying your email',
                        type: 'error',
                    });
                });
        }
    }, []);

    if (mode === 'resetPassword') {
        return (
            <>
                {message.content && (
                    <>
                        <div
                            className={`alert-banner ${
                                message.type === 'error' ? 'alert-banner--danger' : ''
                            }`}
                        >
                            {message.content}
                        </div>
                        <Link to="/dashboard">Go to dashboard</Link>
                    </>
                )}
                <form onSubmit={handlePasswordReset} className="password-reset-form">
                    <img className="password-reset-form__logo" src={Logo} alt="logo" height={100} />
                    <label htmlFor="new-password">New Password</label>
                    <input
                        id="new-password"
                        class="base-input"
                        type="password"
                        name="password"
                        required
                        minLength={8}
                    />
                    <Button title="Reset Password" type="submit" disabled={disabled} />
                    {message.type === 'success' && (
                        <Link to="/log-in" className="password-reset-form__login-link">
                            Log In
                        </Link>
                    )}
                </form>
            </>
        );
    } else if (mode === 'verifyEmail') {
        if (!message.type) return null;
        return (
            <>
                <div
                    className={`alert-banner ${
                        message.type === 'error' ? 'alert-banner--danger' : ''
                    }`}
                >
                    {message.content}
                </div>
                <div className="flex justify-center" style={{ marginTop: '60px' }}>
                    <Link to="/dashboard">Go to dashboard</Link>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default Auth;
