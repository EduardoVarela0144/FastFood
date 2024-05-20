import { View, FlatList } from "react-native";
import CardsEdit from "../../components/Home/CardsEdit";
import PageLayout from "../../components/General/PageLayout";
import { useGetProducts } from "../../hooks/Products/useGetProducts";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import SearchBar from "../Home/components/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function HomeSeller() {
  const { data, refetch } = useGetProducts();
  const isFocused = useIsFocused();
  const { Auth } = useContext(AuthContext);
  const user = Auth.id;

  const filteredData = data.filter((item) => item.seller.id === user);
  

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
          data={filteredData}
          keyExtractor={(item) => item.id}
          className="pb-4"
          renderItem={({ item }) => (
            <CardsEdit
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
