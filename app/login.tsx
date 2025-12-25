import Icon from "@/assets/icons";
import Backbutton from "@/Componenets/Backbutton";
import Button from "@/Componenets/Button";
import Input from "@/Componenets/Input";
import ScreenWrapper from "@/Componenets/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();
  const emailref = useRef("");
  const passwordref = useRef("");
  const [loding, setloading] = useState(false);
  const onsubmit = async () => {
    if (!emailref.current || !passwordref.current) {
      Alert.alert("please fill all details");
      return;
    }
  };
  return (
    <ScreenWrapper bg="white">
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <Backbutton router={router} />

        {/* welcome */}
        <View>
          <Text style={styles.welcometxt}>Hey,{"\n"}Welcome Back!</Text>
        </View>
        {/* Form input */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please Login to Continue
          </Text>
          <Input
            Icon={<Icon name="mail" size={24} strokeWidth={2} />}
            placeholder="Enter your mail"
            onChangeText={(value) => (emailref.current = value)}
          />
          <Input
            Icon={<Icon name="lock" size={24} strokeWidth={2} />}
            placeholder="Enter your Password"
            secureTextEntry
            onChangeText={(value) => (passwordref.current = value)}
          />
          <Text style={styles.forget}>Forget Password ?</Text>
          {/* button */}
          <Button title="Login" loading={loding} onPress={onsubmit} />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footertxt}>Dont have an account ?</Text>
          <Pressable
            onPress={() => {
              router.navigate("/signup");
            }}
          >
            <Text
              style={[
                styles.footertxt,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.bold,
                },
              ]}
            >
              Registe Now
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcometxt: {
    fontSize: hp(4),
    color: theme.colors.text,
    fontWeight: theme.fonts.bold,
  },
  form: {
    gap: 26,
  },
  forget: {
    textAlign: "right",
    fontWeight: theme.fonts.medium,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  footertxt: {
    textAlign: "center",
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
});
