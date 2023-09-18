import { Text, View, SafeAreaView } from "react-native";
import Cards from "../components/Cards";

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
  ];
  return (
    <SafeAreaView className="mt-12">
      <Cards
        name="Hamburguesa"
        description="La mejor hamburguesa del mundo"
        price="18"
      />
      <Cards
        name="Hot Dog"
        description="El mejor hot dog del mundo"
        price="35"
      />
    </SafeAreaView>
  );
}
