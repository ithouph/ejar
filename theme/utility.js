import { StyleSheet } from "react-native";

// ✅ Static utility styles
export const u = StyleSheet.create({
  // Flex
  flex1: { flex: 1 },
  flexGrow1: { flexGrow: 1 },
  col: { flexDirection: "column" },
  row: { flexDirection: "row" },
  center: { alignItems: "center", justifyContent: "center" },
  alignEnd: { alignItems: "flex-end" },
  justifyContent: { justifyContent: "center" },

  // navbar
  navItem: { alignItems: "center" },
  navLabel: { fontSize: 12, color: "#8e8e8e", marginTop: 3,},
  navLabelActive: { color: "#044468", fontWeight: "600"},

  // Spacing - padding
  p0: { padding: 0 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },

  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt15: { paddingTop: 15 },
  pt20: { paddingTop: 20 },
  pt80: { paddingTop: 80 },

  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb15: { paddingBottom: 15 },
  pb20: { paddingBottom: 20 },

  px5: { paddingHorizontal: 5 },
  px10: { paddingHorizontal: 10 },
  px15: { paddingHorizontal: 15 },
  px20: { paddingHorizontal: 20 },

  py5: { paddingVertical: 5 },
  py10: { paddingVertical: 10 },
  py15: { paddingVertical: 15 },
  py20: { paddingVertical: 20 },

  // Margin
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },

  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt15: { marginTop: 15 },
  mt20: { marginTop: 20 },

  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },

  // Text
  txt: { fontSize: 28, fontWeight: "bold", textAlign: "center" },
  textSm: { fontSize: 12 },
  textMd: { fontSize: 16 },
  textLg: { fontSize: 20 },
  textXl: { fontSize: 28 },
  textBold: { fontWeight: "bold" },
  txtCenter: { textAlign: "center" },

  // Border
  border: { borderColor: "#0059ff18", borderBottomWidth: 1 },

  // Buttons
  btn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { fontSize: 16, fontWeight: "bold" },
  btnTxt: { fontSize: 16, fontWeight: "bold" },
  btnOutline: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnScecondary: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  // Input
  inp: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  // Card / Containers
  card: { borderRadius: 12, overflow: "hidden", marginBottom: 10 },
});

// ✅ Dynamic styles helper (use colors here)
export const createStyles = (colors = {}) => ({
  txt: { color: colors.txt },
  textSecondary: { color: colors.textSecondary },
  link: { color: colors.link },

  background: { backgroundColor: colors.background },

  // Inputs
  inp: {
    backgroundColor: colors.inpbg,
    borderColor: colors.inpbc,
    color: colors.txt,
  },
  btnPrimary: {
    color: colors.btnPrimary,
  },
  // Buttons
  btn: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { fontWeight: "bold", color: colors.btnText },
  btnTxt: { color: colors.btnTxt, fontWeight: "bold" },
  btnOutline: {
    borderColor: colors.border,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnScecondary: {
    backgroundColor: colors.btnScecondary,
    color: colors.txt,
    alignItems: "center",
    justifyContent: "center",
  },

  // Containers
  container: { flex: 1, padding: 20, backgroundColor: colors.background },

  // Card
  card: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 10,
  },
  cardImage: { width: "100%", height: 200 },
  rightIcons: { flexDirection: "row", gap: 10 },
  iconBtn: {
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 8,
    borderRadius: 30,
  },
});
