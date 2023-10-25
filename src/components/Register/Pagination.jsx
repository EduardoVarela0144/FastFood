import { View, FlatList } from "react-native";

export default function Pagination({ numScreens, currentPage }) {
  return (
    <FlatList
      data={Array.from({ length: numScreens }, (_, i) => i)}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item, index }) => (
        <View
          className={`h-4 w-4 ${index === currentPage ? "bg-amber-400" : "bg-gray-300"} rounded-full mx-1`}
          key={index}
        />
      )}
    />
  );
}
