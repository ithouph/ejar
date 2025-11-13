import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
// import components
import Detail from "../pages/Detail";
import Card from "../components/Card";
// import theme hook
import { useTheme } from "../theme/global";
import { savedList } from "../datafield";
export default function Discover({ setPage }) {
  const { colors, styles, u } = useTheme();

  const [selected, setSelected] = useState(null);

  // Open property full details
  if (selected)
    return <Detail property={selected} close={() => setSelected(null)} />;

  return (
    <View style={[u.flex1, u.col, styles.background]}>
      {/* Header */}
      <Text
        style={[
          u.textXl,
          u.textBold,
          u.mb0,
          u.border,
          u.p20,
          u.pt80,
          u.borderColor,
          { color: colors.txt },
        ]}
      >
        Welcome, Sidi
      </Text>

      {/* Property List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {savedList.map((item) => (
          <Card key={item.id} item={item} onPress={() => setSelected(item)} />
        ))}
      </ScrollView>
    </View>
  );
}
