import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const showName = () => {
    Alert.alert("Mi nombre es", "Eduardo Varela Hernández");
  };

  const showImage = () => {
    alert("Soy una imagen");
  };

  return (
    <View style={styles.container}>
      <Text>Eduardo Varela Hernández</Text>
      <View>
        {/* <Button onPress={showName} title="Mi nombre" /> */}

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.button_text}>Mi nombre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("Tengo tu ubicación")}
          style={{
            width: 60,
            height: 60,
            borderColor: "blue",
            borderWidth: 2,
            borderRadius: 100,
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Location_icon_from_Noun_Project.png/600px-Location_icon_from_Noun_Project.png?20210513221840",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={showImage} title="Mi nombre">
          <Image
            style={styles.image}
            source={{
              uri: "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg",
            }}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    backgroundColor: "yellow",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "pink",
  },
  boton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  button_text: {
    color: "white",
  },
});
