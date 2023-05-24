import React from 'react';
import { ResetCSS } from '../assets/styles/style';
import { GlobalStyle, AppWrapper } from '../components/theme/app.style';
import Heading from '../components/theme/Heading';
import Text from '../components/theme/Text';
import TextToCopy from '../components/TextToCopy';
import { useUserStore } from '../store/user';
import { Link } from 'gatsby';

const ThankYou = () => {
    const [values, setValues] = React.useState({ platform: '', leagueid: '' });
    const { user } = useUserStore((state) => {
        return {
            user: state.user,
        };
    });

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const platform = urlParams.get('platform');
            const leagueid = urlParams.get('leagueid');

            console.log(platform, leagueid);
            setValues({ platform, leagueid });
        }
    }, []);

    let url = `https://fantasy-franchise.com/nfl/${values.platform}/${values.leagueid}`;

    if (!!values?.leagueid?.length === false || !!values?.platform?.length === false) return null;

    return (
        <div>
            <ResetCSS />
            <GlobalStyle />
            <AppWrapper>
                <div style={{ maxWidth: '978px', margin: 'auto', padding: '0 1rem' }}>
                    <Heading
                        content="Thank you for registering please copy and save the following url"
                        as="h1"
                        textAlign="center"
                        mt="2.5rem"
                    />
                    <TextToCopy text={url} />
                    <Text
                        content="An email will be sent when the page is done, if that doesn't happen (sometimes emails get lost) you can check the url in 1 or 2 days to see your page."
                        textAlign="center"
                        as="h4"
                        mt="4.5rem"
                    />
                    {user && (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '40px',
                            }}
                        >
                            <Link to="/dashboard">Go to your dashboard</Link>
                        </div>
                    )}
                </div>
            </AppWrapper>
        </div>
    );
};

export default ThankYou;
