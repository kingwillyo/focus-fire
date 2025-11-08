import { COLORS } from "@/constants/themes";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
        <Stack screenOptions={{headerShown: false}}/>
);
}
