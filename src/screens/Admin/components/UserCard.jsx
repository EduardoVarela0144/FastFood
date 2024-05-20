import { View, Text, Image } from "react-native";
import { Avatar } from "@react-native-material/core";
import { ROLES_TRANSLATE } from "../../../config";


export default function UserCard({ item }) {
  return (
    <View className="bg-white rounded-xl p-4 flex-row shadow items-center">
      <View className=" items-start justify-center">
        {item.profilePicture ? (
          <View className="flex-col w-full space-y-2 ">
            <Image
              className="h-24 w-24 rounded-full"
              source={{ uri: item?.profilePicture }}
            />
          </View>
        ) : (
          <View className="flex-col">
            <Avatar
              label={item?.firstName + " " + item?.lastName}
              color="#3a6ea6"
              tintColor="white"
              size={95}
            />
          </View>
        )}
      </View>
      <View className="flex-1 items-center justify-center space-y-4">
        <Text className="text-center" style={{ fontSize: 10 }}>
          {item.major}
        </Text>
        <Text className="font-bold elipsis" numberOfLines={1}>
          {item.firstName + " " + item.lastName + " " + item.middleName}
        </Text>
        <View className="px-6 w-full">
          <View className="bg-FastFood w-full h-0.5" />
        </View>
        <Text>{ROLES_TRANSLATE[item.rol]}</Text>
      </View>
    </View>
  );
}
