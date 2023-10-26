import { View, Text, FlatList, TextInput } from "react-native";
import CardsHome from "../../components/Home/CardsHome";
import PageLayout from "../../components/General/PageLayout";
import { useGetProducts } from "../../hooks/Products/useGetProducts";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const { data, refetch } = useGetProducts();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused]);

  return (
    <PageLayout>
      <View className="px-4 space-y-4">
        <SearchBar />

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={data}
          keyExtractor={(item) => item._id}
          className="pb-4"
          renderItem={({ item }) => (
            <CardsHome
              item={item}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )}
          ItemSeparatorComponent={<View className="h-3" />}
        />
      </View>
    </PageLayout>
  );
}
