import { View, SafeAreaView, FlatList, Platform } from "react-native";
import Cards from "../components/Cards";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
export default function Home() {
  const isFocused = useIsFocused();

  const [productos, setProductos] = useState([]);

  const obtenerColeccion = async () => {
    try {
      const q = collection(db, "Products");
      const querySnapshot = await getDocs(q);

      const documentosArray = [];
      querySnapshot.forEach((doc) => {
        documentosArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setProductos(documentosArray);
    } catch {
      console.log("Erro al obtener los datos");
    }
  };

  useEffect(() => {
    obtenerColeccion();
  }, []);

  useEffect(() => {
    if (isFocused) {
      obtenerColeccion();
    }
  }, [isFocused]);

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
