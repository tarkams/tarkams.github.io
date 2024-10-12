<script lang="ts">
  import { isLoggedIn, username } from "@stores/user";
  import { goto, pushState, replaceState } from "$app/navigation";
  import { onMount } from "svelte";
  let errorMessage = "";
  let successMessage = "";

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts?.pop()?.split(";").shift();
    }
  };

  // Function to check cookies and sync with the store
  const checkLoginStatus = () => {
    const usernameCookie = getCookie("username");
    const loggedInCookie = getCookie("isLoggedIn");

    if (loggedInCookie && usernameCookie) {
      isLoggedIn.set(true);
      username.set(decodeURIComponent(usernameCookie)); // Assuming user info is stored as JSON in cookie
    } else {
      handleLogout();
    }
  };

  // On page load, check the login status
  onMount(() => {
    checkLoginStatus();
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // from .env
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("g_id_signin"),
      { theme: "outline", size: "large", text: "continue_with" } // customization options
    );
  });

  const handleCredentialResponse = (response) => {
    const jwt = response.credential;
    // Send the token to your server for validation and processing
    fetch("/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: jwt }),
    })
      .then((res) => res.json())
      .then((data) => {
        user = data;
        console.log("User logged in:", user);
      })
      .catch((err) => console.error("Error logging in:", err));
  };

  // Dummy login function
  function handleLogin(e: Event) {
    e.preventDefault();
    const url = window.location.origin + "/api/auth/google";
    goto(url, { replaceState: true });
  }

  function handleLogout(e?: Event) {
    username.set("");
    isLoggedIn.set(false);
  }
</script>

<svelte:head>
  <title>Login</title>
  <meta name="login" content="login" />
</svelte:head>

<div class="p-8 flex flex-col items-center justify-center">
  <div class="w-80 text-center">
    <img src="/logo-placeholder.png" alt="Login" class="mt-16 mb-4 mx-auto" />
    <div class="text-2xl font-bold">Login to your account</div>
    <button class="mt-16" id="g_id_signin" on:click={handleLogin}
      >Login with Google</button
    >
  </div>
  <!-- aaaaaaaaaaaaa
  <main class="login-content">
    <h2>Sign in</h2>
    {#if $isLoggedIn}
      <form>
        <h4>Already Logged In, {$username}</h4>
        <br />
        <button type="button" on:mouseup={handleLogout}>Logout</button>
        <a href="/">Go to Home</a>
      </form>
    {:else}
      <form on:submit={handleLogin}>
        <button type="submit">Login with Google</button>
        {#if errorMessage}
          <p class="error">{errorMessage}</p>
        {/if}

        {#if successMessage}
          <p class="success">{successMessage}</p>
        {/if}
      </form>
    {/if}
  </main> -->
</div>

<style>
</style>
