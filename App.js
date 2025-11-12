import React, { useState } from "react";
import { View } from "react-native";

import SignIn from "./auth/Signin";
import SignUp from "./auth/Signup";
// import from "./routers/";
import Discover from "./router/Discover";
import Explore from "./router/Explore";
import Saved from "./router/Saved";
import Profile from "./router/Profile";


import { useTheme } from "./theme/useTheme";

export default function App() {
  const [page, setPage] = useState("signIn"); // signIn or signUp
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {page === "signIn" ? (
        <SignIn goToSignUp={() => setPage("signUp")} />
      ) : (
        <SignUp goToSignIn={() => setPage("signIn")} />
      )}
    </View>
  );
}


























































































import Detail from "./pages/Detail";


import NavBar from "./components/Navbar";

import { useTheme } from "./theme/global";

export default function App() {
  const [page, setPage] = useState("signIn"); // "signIn", "signUp", or "Dashboard"
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {page === "signIn" && (
        <SignIn
          goToSignUp={() => setPage("signUp")}
          goToDiscover={() => setPage("Discover")}
        />
      )}

      {page === "signUp" && (
        <SignUp
          goToSignIn={() => setPage("signIn")}
          goToDiscover={() => setPage("Discover")}
        />
      )}
      {page === "Discover" && (
        <View style={{ flex: 1 }}>
          <Discover />
          <NavBar page={page} setPage={setPage} />
        </View>
      )}

      {page === "Explore" && (
        <View style={{ flex: 1 }}>
          <Explore />
          <NavBar page={page} setPage={setPage} />
        </View>
      )}
      {page === "Saved" && (
        <View style={{ flex: 1 }}>
          <Saved />
          <NavBar page={page} setPage={setPage} />
        </View>
      )}
      {page === "Profile" && (
        <View style={{ flex: 1 }}>
          <Profile />
          <NavBar page={page} setPage={setPage} />
        </View>
      )}
      {page === "Detail" && (
        <View style={{ flex: 1 }}>
          <Detail />
          <NavBar page={page} setPage={setPage} />
        </View>
      )}


    </View>
  );
}
