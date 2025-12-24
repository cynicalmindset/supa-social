import Button from "@/Componenets/Button";
import ScreenWrapper from "@/Componenets/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import welcomeimg from "./welcome.png";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.container}>
        <Image
          style={styles.wellcomeImage}
          resizeMode="contain"
          source={welcomeimg}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>supa-social!</Text>
          <Text style={styles.punchLine}>
            Social media copy ki 1st class copy heheheh
          </Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Getting started"
            buttonstyle={{ marginHoriontal: wp(3) }}
            onPress={() => {}}
          ></Button>
          <View style={styles.bottomtext}>
            <Text style={styles.logintext}>already have an account!</Text>
            <Pressable>
              <Text
                style={[
                  styles.logintext,
                  { color: theme.colors.primaryDark, fontWeight: "500" },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  wellcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: "800",
  },
  punchLine: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomtext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  logintext: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
