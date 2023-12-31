import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const SearchBar = ({search, setSearch, refetch}) => {

  
  let debounceTimer;

  const handleSearchChange = (text) => {
    setSearch(text);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      refetch();
    }, 700);
  };

  return (
    <View className="flex flex-row justify-between items-center bg-white px-4 py-1 rounded-full drop-shadow-sm">
      <TextInput className="flex-1 p-2" placeholder="Buscar" value={search} onChangeText={handleSearchChange} />
      {
        search?.length > 0 &&
        <TouchableOpacity className="px-2" onPress={() => setSearch('')}>
          <MaterialIcon name="close" size={20} />
        </TouchableOpacity>
      }
      <TouchableOpacity>
        <MaterialIcon name="search" size={28} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar