import { View, SafeAreaView, FlatList, Platform } from "react-native";
import Cards from "../components/Cards";
import { db } from "../utils/firebase"
import { collection, query, orderBy, limit , getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";
export default function Home() {
  const data = [
    {
      id: 1,
      name: "Hamburguesa",
      price: 18.5,
      description: "La mejor hamburguesa",
      image:
        "https://editorialtelevisa.brightspotcdn.com/dims4/default/ac57895/2147483647/strip/true/crop/672x672+331+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Ffa%2F68%2Fb5133d9f4eaf91738f36c7afcf59%2Fhamburguesas-estilo-texas-receta-facil-y-rapida.jpeg",
    },
    {
      id: 2,
      name: "HotDog",
      price: 30.5,
      description: "Esta muy rico",
      image:
        "https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg",
    },
    {
      id: 3,
      name: "Coca Cola",
      price: 12.5,
      description: "Alta en calorias",
      image:
        "https://cdn-3.expansion.mx/dims4/default/1b14363/2147483647/strip/true/crop/2096x1430+0+0/resize/1200x819!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F6c%2F722abfb544dcb4a46b9ca967a1ef%2Fistock-499925476.jpg",
    },
  ];

  const [productos, setProductos] = useState([]);

  const obtenerColeccion = async () => {
    try{
      const q = collection(db, "Products");
      const querySnapshot = await getDocs(q);

      const documentosArray = [];
      querySnapshot.forEach((doc)=>{
        documentosArray.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setProductos(documentosArray);
    }catch{
      console.log("Erro al obtener los datos")
    }
  }

  useEffect(()=>{
    obtenerColeccion();
  },[])

  useEffect(()=>{
    if(productos){
      console.log(productos);
    }
  },[productos])

  return (
    <SafeAreaView className=" bg-amber-400 h-full pt-12">
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        className="p-4"
        renderItem={({ item }) => (
          <Cards
            item={item}
            name={item.nombre}
            description={item.nombre}
            price={item.precio}
            image={item.urlImagen}
          />
        )}
        ItemSeparatorComponent={<View className="h-3" />}
      />
    </SafeAreaView>
  );
}
