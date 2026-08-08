import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "alta") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "consulta") {
            iconName = focused ? "search" : "search-outline";
          } else {
            return null; // index sin ícono
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Inicio", href: null }} />
      <Tabs.Screen name="alta" options={{ title: "Alta" }} />
      <Tabs.Screen name="consulta" options={{ title: "Consulta" }} />
    </Tabs>
  );
}

//Con tabs agregamos una nueva navegacion de la navegacion
//ruta de consulta y alta ven hacia la de raiz