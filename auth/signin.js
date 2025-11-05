import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";

export default function SignIn({ goToSignUp }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { colors, styles, isDark, setForceTheme } = useTheme();

  const handleSubmit = () => {
    if (!identifier || !password) {
      return Alert.alert("Input Required", "Please fill all fields");
    }
    Alert.alert("Success", `You entered: ${identifier}`);
  };

  const handleGoogleSignIn = () => {
    Alert.alert("Google Sign-In clicked");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 10 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.title}>Sign In</Text>

          <TextInput
            placeholder="Username or Phone"
            placeholderTextColor={colors.placeholder}
            style={styles.input}
            value={identifier}
            onChangeText={setIdentifier}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleSignIn}>
            <AntDesign name="google" size={20} color="#EA4335" style={{ marginRight: 10 }} />
            <Text style={styles.googleBtnText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToSignUp}>
            <Text style={styles.link}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setForceTheme(isDark ? "light" : "dark")} style={{ alignSelf: "flex-end", marginBottom: 20 }}>
            <Text style={{ color: colors.link, fontWeight: "bold" }}>
              Switch to {isDark ? "Light" : "Dark"} Mode
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
