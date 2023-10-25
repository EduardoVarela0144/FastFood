import { View, Text, FlatList } from "react-native";
import CardsHome from "../../components/Home/CardsHome";
import PageLayout from "../../components/General/PageLayout";
import { useGetProducts } from "../../hooks/Products/useGetProducts";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

export default function Home() {
  const { data, refetch } = useGetProducts();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused]);
  
  return (
    <PageLayout className="bg-white">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        data={data}
        keyExtractor={(item) => item._id}
        className="px-2 py-4"
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
    </PageLayout>
  );
}
