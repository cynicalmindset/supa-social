import ScreenWrapper from "@/Componenets/ScreenWrapper";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index page</Text>
      <Button onPressIn={() => router.push("/welcome")}>Welcome</Button>
    </ScreenWrapper>
  );
}
