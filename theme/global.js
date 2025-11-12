import { useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { lightColors, darkColors } from "./colors";
import { createStyles, u } from "./utility";

export const useTheme = () => {
  const scheme = useColorScheme(); // system theme
  const [forceTheme, setForceTheme] = useState(null);
  const isDark = (forceTheme ?? scheme) === "dark";

  const colors = isDark ? darkColors : lightColors;

  const styles = useMemo(() => createStyles(colors), [colors]);

  return { colors, styles, u, isDark, setForceTheme };
};
