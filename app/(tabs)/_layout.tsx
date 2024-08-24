import { Link, Tabs } from "expo-router";
import { Button, getTokens, Text, useTheme } from "tamagui";
import { Atom, AudioWaveform, Home } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.darkGray.val,
        tabBarInactiveTintColor: theme.darkGray.val,
        tabBarStyle: {
          backgroundColor: theme.yellow.get(),
          borderTopLeftRadius: 49,
          borderTopRightRadius: 49,
          paddingTop: 25,
          height: "10%",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} size={32} />,
          tabBarLabel: () => "",
        }}
      />
      <Tabs.Screen
        name="write"
        options={{
          headerShown: false,
          tabBarLabel: () => "",
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
        }}
      />
    </Tabs>
  );
}
