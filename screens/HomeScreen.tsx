import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        icon="city"
        mode="contained"
        onPress={() =>
          navigation.navigate("WebViewScreen", {
            uri: "https://gotrip.mobilecomm.com.br/locator/5502be5ead6a4d4b8754ffe1905a55ab/route/56866",
          })
        }
      >
        Boa Vista
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
