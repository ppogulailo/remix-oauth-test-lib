import { OAuth2Strategy } from "remix-auth-oauth2";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
export let authenticator = new Authenticator<User>(sessionStorage);
interface User{}
authenticator.use(
    new OAuth2Strategy<
        User,
        { provider: "provider-name" },
        { id_token: string }
    >(
        {
            clientId: "",
            clientSecret: "",
            // 4d00500d-4f92-49b7-8dba-a18d0882f49e
            // TrialTenantli0Az7os
            authorizationEndpoint: "https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize",
            tokenEndpoint: "https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token",
            redirectURI: "http://localhost:5173/auth/microsoft/callback",

            // tokenRevocationEndpoint: "https://provider.com/oauth2/revoke", // optional

            codeChallengeMethod: "S256", // optional
            scopes: ["openid", "email", "profile"], // optional

            authenticateWith: "request_body", // optional
        },
        async ({ tokens, profile, context, request }) => {
            // here you can use the params above to get the user and return it
            // what you do inside this and how you find the user is up to you
            console.log(profile)
            return {profile}
        },
    ),
    // this is optional, but if you setup more than one OAuth2 instance you will
    // need to set a custom name to each one
    "provider-name",
);