import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useTheme } from "../theme/global";

export default function SignUp({ goToSignIn }) {
  const { colors, styles, u, isDark, setForceTheme } = useTheme();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  const handleSignUp = () => {
    if (!username || !email || !pwd || !pwd2)
      return Alert.alert("Input Required", "Please fill all fields");
    if (pwd !== pwd2)
      return Alert.alert("Error", "Passwords do not match");
    Alert.alert("Success", `Account created for ${email}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[u.flex1, styles.background]}
    >
      <ScrollView
        contentContainerStyle={[u.flexGrow1, { justifyContent: "center" }]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[u.p20]}>
          {/* Logo section */}
          <View style={[u.center, u.mb20]}>
            <View
              style={{
                backgroundColor: colors.primary,
                width: 54,
                height: 54,
                borderRadius: 13,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 32 }}>🌟</Text>
            </View>
          </View>
          <Text style={[u.txt, u.mb8, styles.txt]}>Create Account</Text>
          <Text style={[u.textMd, u.txtCenter, u.mb15, styles.textSecondary]}>
            Join us! Fill in your details to create an account.
          </Text>

          <TextInput
            placeholder="Username"
            placeholderTextColor={colors.placeholder}
            style={[u.inp, styles.inp]}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.placeholder}
            style={[u.inp, styles.inp]}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            style={[u.inp, styles.inp]}
            value={pwd}
            onChangeText={setPwd}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            style={[u.inp, styles.inp]}
            value={pwd2}
            onChangeText={setPwd2}
          />

          <TouchableOpacity
            style={[u.btn, styles.btn, u.mt10]}
            onPress={handleSignUp}
          >
            <Text style={[u.btnText, styles.btnPrimary]}>Sign Up</Text>

          </TouchableOpacity>
          {/* Separator */}
          <View style={[u.row, u.center, u.mt15]}>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
            <Text style={[u.px10, styles.textSecondary, u.textMd]}>
              Don't have an account yet?
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
          </View>
          {/* Theme Switch */}
          <TouchableOpacity onPress={() => setForceTheme(isDark ? "light" : "dark")} style={[u.m10]}>
            <Text style={[styles.txt, u.textBold, u.txtCenter]}>
              Switch to {isDark ? "Light" : "Dark"} Mode
            </Text>
          </TouchableOpacity>
          {/* Go to Sign Un Google */}
          <TouchableOpacity onPress={goToSignIn} style={[u.btnOutline, styles.btnOutline, u.row, u.center]}>
            <Text style={[u.btnTxt, styles.txt]}>
              G Sign in with Google
            </Text>
          </TouchableOpacity>

          <Text style={[u.textSm, u.txtCenter, u.mt20, styles.textSecondary,]}>
            By clicking “Continue”, I have read and agree with the{" "}
            <Text style={styles.link}>Term Sheet, Privacy Policy</Text>
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
