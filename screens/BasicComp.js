import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';

// export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabOneScreen.tsx" />
//     </View>
//   );
// }


import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView, Button } from "react-native";
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const image = { uri: "https://reactjs.org/logo-og.png" };
const ViewBoxesWithColorAndText = ({ navigation }) => {
  return (
    <View>
      <View style={{ flexDirection: "column", height: 200, padding: 10, marginVertical: 0 }}>
        <Text style={styles.title}>Text Component with Flex as View column</Text>
        <View style={{ backgroundColor: "blue", flex: 0.5 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
      </View>

      <View style={{ flexDirection: "row", height: 100, padding: 10, margin: 0 }} collapsable={true} >
        <Text style={styles.title}>Text Component with Flex as View row</Text>
        <View style={{ backgroundColor: "blue", flex: 0.2 }} accessibilityLabel="Tap me!" />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
      </View>

      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }} />



      </View>

      <Button title="Animations" onPress={() => navigation.navigate('Animations')} />
      <Button title="Formik" onPress={() => navigation.navigate('Formik1')} />
      <Button title="Webview" onPress={() => navigation.navigate('Webview')} />
      <Button title="Activity" onPress={() => navigation.navigate('Active')} />



    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 0.5
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    paddingTop: 50,
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
export default ViewBoxesWithColorAndText;