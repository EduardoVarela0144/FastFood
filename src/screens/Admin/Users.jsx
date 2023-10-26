import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import PageLayout from "../../components/General/PageLayout";
import { useGetAllUsers } from "../../hooks/Users/useGetAllUsers";
import UserCard from "./components/UserCard";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

export default function Users() {
  
  const { data, refetch } = useGetAllUsers();
  const navigation = useNavigation();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused]);


  const deleteUser = (item) => {
    Alert.alert(
      "Confirmación",
      `¿Seguro que deseas eliminar al usuario ${item.firstName}?`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            console.log("Elemento eliminado");
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  const renderHiddenItem = (data) => {
    const { item } = data;
    return (
      <View className="bg-white items-center flex-1 justify-between">
        <TouchableOpacity
          className="rounded-r-xl"
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => deleteUser(item)}
        >
          <Text style={styles.backTextWhite}>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            navigation.navigate("EditUser", { item: item });
          }}
        >
          <Text className="text-white">Editar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <PageLayout>
      <View className="px-4 flex-1">
        <TouchableOpacity onPress={() => navigation.navigate("AddUser")} className="bg-FastFood rounded-md items-center py-2 my-4">
          <Text className="text-white font-bold text-ceneter">
            Crear nuevo administrador
          </Text>
        </TouchableOpacity>
        <SwipeListView
          data={data}
          renderItem={UserCard}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-150}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<View className="h-6" />}
        />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  rowBack: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "#3a6ea6",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  backTextWhite: {
    color: "#FFF",
  },
});
