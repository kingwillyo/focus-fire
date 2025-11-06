import { COLORS } from "@/constants/themes";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  return (
  <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: COLORS.white,
    tabBarInactiveTintColor: COLORS.inactive,
    tabBarStyle: {
      backgroundColor: COLORS.tab,
      height: 75,
      paddingTop: 8,
      paddingBottom: 16,
      paddingHorizontal: 16,
      position: "absolute",
      elevation: 0,
      borderTopWidth: 0,
    },
    }}>
    <Tabs.Screen 
      name='index'
      options={{
        title: 'Campfire',
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="fire" size={24} color={color}/>
        ),
      }}
    />
    <Tabs.Screen 
      name='history'
      options={{
        title: 'History',
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="history" size={24} color={color}/>
        ),
      }}
    />
    <Tabs.Screen 
      name='settings'
      options={{
        title: 'Settings',
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="cog" size={24} color={color}/>
        ),
      }}
    />
  </Tabs>
  );
}
