// app/routes/auth/microsoft/callback.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "../oauth.server";

export const loader = ({ request }: LoaderFunctionArgs) => {
    return authenticator.authenticate("provider-name", request, {
        successRedirect: "/",
        failureRedirect: "/login",
    });
};