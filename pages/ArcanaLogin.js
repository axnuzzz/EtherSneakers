import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

import useArcanaAuth from "./useArcanaAuth";

function ArcanaLogin() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  const {
    initialiseAuth,
    login,
    loginWithLink,
    isLoggedIn,
    getAccounts,
    logout,
    initialised,
  } = useArcanaAuth();

  const initialize = async () => {
    await initialiseAuth();
  };

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      if (initialised) {
        const loggedIn = await isLoggedIn();
        if (loggedIn) {
          const acc = await getAccounts();
          setAccount(acc[0]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialised]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <h1>AUTHENTICATION</h1>
      <div>
        {loading ? (
          <div className="loading">
            <ColorRing
              visible={true}
              height="100"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#000000"]}
            />
          </div>
        ) : !loading && loggedIn ? (
          <div>
            <h2 className="sub-heading">Logged In</h2>
            <h3>Welcome {account}</h3>
            <h3>you are logged in successfully.</h3>
            <button className="big-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="box">
            <h2 className="sub-heading">Select a login</h2>
            <div className="options">
              <button className="big-button" onClick={() => login("google")}>
                Google Login
              </button>
              <button className="big-button" onClick={() => login("twitch")}>
                Twitch Login
              </button>
              <button className="big-button" onClick={() => login("discord")}>
                Discord Login
              </button>
              <button className="big-button" onClick={() => login("twitter")}>
                Twitter Login
              </button>
            </div>
            <div className="form">
              <input
                value={email}
                type="text"
                placeholder="Enter email"
                onChange={handleEmailChange}
              />
              <button
                className="big-button"
                onClick={() => loginWithLink(email)}
              >
                Login with link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArcanaLogin;
