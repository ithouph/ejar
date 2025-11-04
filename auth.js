import { useState } from "react";
import { View } from "react-native";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import { useColorScheme } from "react-native";

export default function App() {
  const [page, setPage] = useState("signIn"); // "signIn" or "signUp"
  const isDark = useColorScheme() === "dark";

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#0d0d0d" : "#fff" }}>
      {page === "signIn" ? (
        <SignIn goToSignUp={() => setPage("signUp")} />
      ) : (
        <SignUp goToSignIn={() => setPage("signIn")} />
      )}
    </View>
  );
}
