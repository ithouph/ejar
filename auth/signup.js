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

export default function SignUp({ goToSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { colors, styles, isDark, setForceTheme } = useTheme();

  const handleSubmit = () => {
    if (!username || !password || !confirmPassword) {
      return Alert.alert("Missing Fields", "Please fill all fields");
    }

    if (username.length < 6) {
      return Alert.alert("Invalid Username", "Username must have at least 6 letters");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Password Mismatch", "Passwords do not match");
    }

    Alert.alert("Success", `Registered: ${username}`);
  };

  const handleGoogleSignUp = () => {
    Alert.alert("Google Sign-Up clicked");
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
          <Text style={styles.title}>Sign Up</Text>

          <TextInput
            placeholder="Username"
            placeholderTextColor={colors.placeholder}
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleSignUp}>
            <AntDesign name="google" size={20} color="#EA4335" style={{ marginRight: 10 }} />
            <Text style={styles.googleBtnText}>Sign Up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToSignIn}>
            <Text style={styles.link}>Already have an account? Sign In</Text>
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
