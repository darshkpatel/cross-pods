import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile read:org',
    redirectUri: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/callback`,
    postLogoutRedirectUri: process.env.NEXT_PUBLIC_HOSTNAME,
    session: {
        cookieSecret: process.env.COOKIE_SECRET,
    },
});
