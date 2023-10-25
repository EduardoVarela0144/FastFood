import { View, Text, FlatList } from "react-native";
import CardsHome from "../../components/Home/CardsHome";
import { useState } from "react";
import PageLayout from "../../components/General/PageLayout";
export default function Home() {
  const [productos, setProductos] = useState([]);

  return (
    <PageLayout color="yellow">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        data={productos}
        keyExtractor={(item) => item.id}
        className="p-4"
        renderItem={({ item }) => (
          <CardsHome
            item={item}
            name={item.nombre}
            description={item.descripcion}
            price={item.precio}
            image={item.urlImagen}
          />
        )}
        ItemSeparatorComponent={<View className="h-3" />}
      />
    </PageLayout>
  );
}
