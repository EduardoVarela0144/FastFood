import { Text, View, SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View className="bg-red-500">
        <Text className="text-white">Tailwind</Text>
      </View>
    </SafeAreaView>
  );
}
