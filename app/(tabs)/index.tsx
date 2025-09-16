import { Text, View } from "react-native";
import "../globals.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-primary">
        Bonjour
      </Text>
      <Text className="text-5xl font-bold text-secondary mt-5">
         Dominique!
      </Text>
    </View>
  );
}