import { json, redirect } from '@sveltejs/kit';

// Placeholder code, need to replace with https://www.npmjs.com/package/google-auth-library
// Dev credentials, need to remove later on
const CLIENT_ID = '307885339472-4a28m0n5u98l570dgb5e60f31u4m01gg.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = '/api/auth/google/callback'; // Can be changed in https://console.cloud.google.com/apis/credentials?project=dev-tarkams&supportedpurview=project 


export function GET({ request, params, url }) {
    const callbackURL = encodeURI(url.origin + REDIRECT_URI);
    const urlRedirect = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${callbackURL}&response_type=code&scope=profile email`;
    const status = 302; // temp redirect

    return redirect(status, urlRedirect)
}

export async function POST({ request, cookies }) {
    // const { description } = await request.json(); -- need to resolve json

    const userid = cookies.get('userid') ?? '';
    // const { id } = await database.createTodo({ userid, description });
    const payload = {
        data: userid
    }

    return json(payload, { status: 201 });
}