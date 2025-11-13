import React, { useState } from "react";
import { View } from "react-native";


// import from "./auth/";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";

// import from "./routers/";
import Discover from "./router/Discover";
import Explore from "./router/Explore";
import Saved from "./router/Saved";
import Settings from "./router/Settings";

import Detail from "./pages/Detail";

// import NavBar from "./components/Navbar";
import NavBar from "./components/Navbar";

// useTheme hook
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
      {page === "Settings" && (
        <View style={{ flex: 1 }}>
          <Settings />
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
