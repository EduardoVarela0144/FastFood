import { View, SafeAreaView, FlatList } from "react-native";
import Cards from "../components/Home/Cards";
import { useState } from "react";
export default function Home() {
  const [productos, setProductos] = useState([]);

  return (
    <SafeAreaView className=" bg-amber-400 h-full pt-12">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        data={productos}
        keyExtractor={(item) => item.id}
        className="p-4"
        renderItem={({ item }) => (
          <Cards
            item={item}
            name={item.nombre}
            description={item.descripcion}
            price={item.precio}
            image={item.urlImagen}
          />
        )}
        ItemSeparatorComponent={<View className="h-3" />}
      />
    </SafeAreaView>
  );
}
