import { writable } from "svelte/store";

// export const isLoggedIn = writable(false);
// export const username = writable('');

const isBrowser = typeof window !== "undefined";

// Helper function to create a store that syncs with localStorage
function persistentStore(key: string, initialValue: any) {
  const store = writable(initialValue, () => {
    if (isBrowser) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        store.set(JSON.parse(storedValue));
      }
    }

    return () => {};
  });

  if (isBrowser) {
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  return store;
}

// Create a persistent writable store for login state and username
export const isLoggedIn = persistentStore("isLoggedIn", false);
export const username = persistentStore("username", "");
