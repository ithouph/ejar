import React, { useState } from "react";
import { View } from "react-native";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
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



// ?>S?FD/
// ?>S?FD//