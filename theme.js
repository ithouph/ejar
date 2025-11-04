import { useColorScheme } from "react-native";
import { useMemo, useState } from "react";

export const useTheme = () => {
  const scheme = useColorScheme();
  const [forceTheme, setForceTheme] = useState(null);
  const isDark = (forceTheme ?? scheme) === "dark";

  const colors = useMemo(() => ({
    background: isDark ? "#0d0d0d" : "#ffffff",
    inputBg: isDark ? "#1c1c1c" : "#F5F7FB",
    inputBorder: isDark ? "#444" : "#E8EFFC",
    text: isDark ? "#fff" : "#000000ff",
    placeholder: isDark ? "#e6e6e6ff" : "#888888",
    btn: isDark ? "#044468" : "#044468",
    link: isDark ? "#044468" : "#044468",
  }), [isDark]);

  const styles = useMemo(() => ({
    container: { flex: 1, padding: 20, justifyContent: "center" },
    title: { fontSize: 28, fontWeight: "600", marginBottom: 20, textAlign: "center", color: colors.text },
    input: { borderWidth: 1, borderRadius: 12, padding: 15, marginBottom: 15, fontSize: 16, backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.inputBorder },
    btn: { padding: 15, borderRadius: 12, alignItems: "center", marginTop: 10, backgroundColor: colors.btn },
    btnText: { color: "#fff", fontSize: 16, fontWeight: "500" },
    link: { marginTop: 15, textAlign: "center", fontSize: 14, color: colors.link },
    googleBtn: { 
      flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "center", 
      borderWidth: 1, 
      padding: 15, borderRadius: 12, marginTop: 15, 
      borderColor: isDark? "#090909ff": "#E8EFFC", 
      backgroundColor: isDark? "#1c1c1c": "#F5F7FB", },
    googleBtnText: { 
      color: isDark ? "#fff" : "#000",
      fontSize: 16, 
      fontWeight: "bold" }
  }), [colors]);

  return { isDark, colors, styles, setForceTheme };
};
