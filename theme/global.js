import { useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { lightColors, darkColors } from "./colors";
import { createStyles, u } from "./utility";

// Usage: const { colors, styles, isDark, setForceTheme } = useTheme();

export const useTheme = () => {
  // Detect device color scheme: 'dark' | 'light'
  const scheme = useColorScheme();
  // Manual override state: can be 'dark', 'light', or null for system
  const [forceTheme, setForceTheme] = useState(null);

  // Which theme to use?
  const themeType = forceTheme ?? scheme; // Prefer manual, fallback system
  const isDark = themeType === "dark";

  // Pick colors set
  const colors = isDark ? darkColors : lightColors;

  // Memoized styles re-generated if colors change
  const styles = useMemo(() => createStyles(colors), [colors]);

  // Utility classes (unchanged)
  return { colors, styles, u, isDark, setForceTheme, themeType };
};
