import { AppMode, AuthProvider } from "@arcana/auth";
import { useState } from "react";

const appID = "10e574c7e29c9a41792ba08932b4f5077829d2ea";

let auth;

function useArcanaAuth() {
  const [initialised, setInitialised] = useState(false);

  const initialiseAuth = async () => {
    if (!auth) {
      auth = new AuthProvider(appID);
      setInitialised(true);
      return await auth.init({ appMode: AppMode.WalletUI });
    }
  };

  const login = async (socialType) => {
    if (initialised) {
      return await auth.loginWithSocial(socialType);
    }
  };

  const loginWithLink = async (email) => {
    if (initialised) {
      return await auth.loginWithLink(email);
    }
  };

  const isLoggedIn = async () => {
    if (initialised) {
      return await auth.isLoggedIn();
    }
  };

  const getAccounts = async () => {
    if (initialised) {
      return await auth.provider.request({ method: "eth_accounts" });
    }
  };

  const logout = async () => {
    if (initialised) {
      return await auth.logout();
    }
  };

  return {
    initialiseAuth,
    login,
    loginWithLink,
    isLoggedIn,
    getAccounts,
    logout,
    initialised,
  };
}

export default useArcanaAuth;
