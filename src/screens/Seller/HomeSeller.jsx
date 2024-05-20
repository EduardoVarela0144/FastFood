import { View, FlatList, Text } from "react-native";
import { useState } from "react";
import PageLayout from "../../components/General/PageLayout";
import { useGetProducts } from "../../hooks/Products/useGetProducts";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import SearchBar from "../Home/components/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CardsHome from "../../components/Home/CardsHome";

export default function HomeSeller() {

  const { Auth } = useContext(AuthContext);
  const user = Auth.id;

  // const filteredData = data.products.filter((item) => item.seller.id === user);
  const filteredData = data?.products;


  const [search, setSearch] = useState('')

  const { data, isLoading, refetch } = useGetProducts(search);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused]);

  useEffect(() => {
    refetch();
  }, [search]);

  
  return (
    <PageLayout>
      <View className="px-4 space-y-4">
      <SearchBar search={search} setSearch={setSearch} refetch={refetch} />


        {isLoading ? (
          <Text className="text-center text-2xl font-bold">Cargando...</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 80,
            }}
            data={data?.products}
            keyExtractor={(item) => item.id}
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
        )}
      </View>
    </PageLayout>
  );
}
