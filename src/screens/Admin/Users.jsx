import React from 'react'
import { Text, View, FlatList } from 'react-native'
import PageLayout from '../../components/General/PageLayout'
import { useGetAllUsers } from '../../hooks/Users/useGetAllUsers'


export default  function Users() {
  const { data } = useGetAllUsers();

    return (
      <PageLayout>
        <View className="px-4 flex-1">
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={data}
          keyExtractor={(item) => item._id}
          className="py-4"
          renderItem={({ item }) => (
            <Text>{item.firstName}</Text>
          )}
          ItemSeparatorComponent={<View className="h-3" />}
        />
        </View>
      </PageLayout>
    )
}