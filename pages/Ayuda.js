import { HelpKitSDK } from '@helpkit/helpkit-help-center-react-native';

const SettingsScreen = () => {
  const openHelpCenter = () => {
    HelpKitSDK.open();
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={openHelpCenter}>
        <Text>Help Center</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
