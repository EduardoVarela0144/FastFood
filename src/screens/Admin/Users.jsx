// import React from 'react'
// import { Text, View, FlatList } from 'react-native'
// import PageLayout from '../../components/General/PageLayout'
// import { useGetAllUsers } from '../../hooks/Users/useGetAllUsers'
// import UserCard from './components/UserCard'
// import { SwipeListView } from 'react-native-swipe-list-view';

// export default  function Users() {
//   const { data } = useGetAllUsers();

//     return (
//       <PageLayout>
//         <View className="px-4 flex-1">
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingBottom: 80,
//           }}
//           data={data}
//           keyExtractor={(item) => item._id}
//           className="py-4"
//           renderItem={({ item }) => (
//             <UserCard item={item}/>
//           )}
//           ItemSeparatorComponent={<View className="h-3" />}
//         />
       
//         </View>
//       </PageLayout>
//     )
// }

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const data = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
];

const SwipeToDeleteEdit = () => {
  const [items, setItems] = useState(data);

  const onEdit = (item) => {
    // Implement edit logic here
    alert("Edit: " + item.text);
  };

  const onDelete = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
  };

  const renderItem = (data, rowMap) => {
    const { item } = data;
    return (
      <View style={styles.rowFront}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const { item } = data;
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => onDelete(item)}
        >
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => onEdit(item)}
        >
          <Text style={styles.backTextWhite}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={items}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={10}
        rightOpenValue={-150}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  rowFront: {
    backgroundColor: "white",
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
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
    backgroundColor: "blue",
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

export default SwipeToDeleteEdit;
