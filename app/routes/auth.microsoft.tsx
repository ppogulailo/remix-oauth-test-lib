import { authenticator } from "../oauth.server";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
    // This will initiate the authentication process and redirect to Microsoft login
    return authenticator.authenticate("provider-name", request);
};