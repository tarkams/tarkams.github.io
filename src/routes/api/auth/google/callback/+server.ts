import { json, redirect } from "@sveltejs/kit";
import { isLoggedIn, username } from "@stores/user";

// Dev credentials, need to remove later on
// Need to replace all of this later with https://www.npmjs.com/package/google-auth-library
const CLIENT_ID =
  "307885339472-4a28m0n5u98l570dgb5e60f31u4m01gg.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "/api/auth/google/callback"; // Can be changed in https://console.cloud.google.com/apis/credentials?project=dev-tarkams&supportedpurview=project

export async function GET({ request, params, url, cookies }) {
  const urlRedirect = "/login";
  const status = 302; // temp redirect
  const redirectUri = url.origin + REDIRECT_URI;

  try {
    const responseToken = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: url.searchParams.get("code"),
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const data = await responseToken.json();
    console.log("response", data);
    const { access_token, id_token } = data;

    const responseVerify = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    const verifyData = await responseVerify.json();
    console.log("verifyData", verifyData);
    // {
    //     id: '117252433511581528464',
    //     email: 'support@tarkams.com',
    //     verified_email: true,
    //     name: 'Support Tarkams',
    //     given_name: 'Support',
    //     family_name: 'Tarkams',
    //     picture: 'https://lh3.googleusercontent.com/a/ACg8ocJ_oQgIaMQFaudtxlDEFHZBlQbl-vBKfs-m-bqKq_P73oPHNw=s96-c',
    //     hd: 'tarkams.com'
    //   }

    if (verifyData?.id) {
      const cookiesSetting = {
        path: "/",
        maxAge: 60 * 60 * 24,
        httpOnly: false, // <-- if you want to read it in the browser
      };

      cookies.set("username", verifyData.name, cookiesSetting);
      cookies.set("isLoggedIn", "1", cookiesSetting);
    }
  } catch (err: any) {
    console.error("Error:", err.response.data.error);
  }

  return redirect(status, urlRedirect);
}
