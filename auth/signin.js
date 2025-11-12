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

export default function SignIn({ goToSignUp, goToDiscover }) {

  const { colors, styles, u, isDark, setForceTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password)
      return Alert.alert("Input Required", "Please fill all fields");
    Alert.alert("Signed in", `Welcome, ${email}`);
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
          <View style={[u.center, u.mb15]}>
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

          <Text style={[u.txt, u.mb8, styles.txt]}>Sign In</Text>
          <Text style={[u.textMd, u.txtCenter, u.mt15, u.mb15, styles.textSecondary]}>
            To sign in to an account in the application, enter your email and password
          </Text>

          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={colors.placeholder}
            style={[u.inp, styles.inp]}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={colors.placeholder}
            style={[u.inp, styles.inp]}
          />

          <TouchableOpacity style={[u.alignEnd, u.mb15]}>
            <Text style={[styles.txt, u.textMd, u.textBold]}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[u.btn, styles.btn, u.mb12]}
            onPress={handleSubmit}
          >
            <Text style={[u.btnText, styles.btnPrimary]}>Continue</Text>
          </TouchableOpacity>

          {/* Separator */}
          <View style={[u.row, u.center, u.m15]}>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
            <Text style={[u.px10, styles.textSecondary, u.textMd]}>
              Don't have an account yet?
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
          </View>
          {/* Theme Switch */}
          <TouchableOpacity onPress={() => setForceTheme(isDark ? "light" : "dark")} style={[u.mb20]}>
            <Text style={[styles.txt, u.textBold, u.txtCenter]}>
              Switch to {isDark ? "Light" : "Dark"} Mode
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToSignUp} style={[u.btnOutline, styles.btnOutline, u.row, u.center]}>
            <Text style={[u.btnTxt, styles.txt]}>
              G Sign in with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[u.btn, styles.btnOutline, u.mt10, u.row, u.center]}
            onPress={goToDiscover}>
            <Text style={[u.btnTxt, styles.txt]}>
              Home as Guest
            </Text>
          </TouchableOpacity>

          <Text
            style={[u.textSm, u.txtCenter, u.mt20, styles.textSecondary,]}>
            By clicking “Continue”, I have read and agree with the{" "}
            <Text style={styles.link}>Term Sheet, Privacy Policy</Text>
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
