import React, { useState, useRef, useEffect } from "react";
import { API_URL } from "../../config";
import {
  TouchableOpacity,
  Text,
  View,
  Alert,
  Modal,
  ActivityIndicator,
  Platform
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useUploadPicture } from "./useUploadPicture";

const useUploadFile = (camera, gallery) => {
  const [modalVisible, setModalVisible] = useState(true);

  const {
    uploadPicture,
    imageId,
    isLoading: loadingPicture,
  } = useUploadPicture();

  const [urlImage, setUrlImage] = useState("");
  const [filenameImage, setFileNameImage] = useState();


  const [urlImageFinal, setUrlImageFinal] = useState("");

  const formData = new FormData();

  // Upload Image
  useEffect(() => {
    if (urlImage) {
      const file = urlImage.substring(
        urlImage.lastIndexOf("/") + 1,
        urlImage.length
      );
      setFileNameImage(file);
    }
  }, [urlImage]);

  useEffect(() => {
    if (filenameImage) {
      formData.append("image", {
        uri: urlImage,
        type: Platform.OS === "android" ? "image/jpg" : "image",
        name: filenameImage,
      });

      uploadPicture(formData);
    }
  }, [filenameImage]);

  useEffect(() => {
    if (imageId) {
      setUrlImageFinal(`${API_URL}${imageId}`);
    }
  }, [imageId]);

 


  useEffect(() => {
    if (loadingPicture) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [loadingPicture]);

 

  const bottomSheetRef = useRef(null);

  const pickImageFromGallery = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Par Par necesita permisos para acceder a tu galería");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: Platform.OS === "android" ? [16, 9] : [8, 1],
      quality: 1,
    }).then((result) => {
      if (!result.canceled) {
        setUrlImage(result.assets[0].uri);
      }
    });
  };

  const takePhoto = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Par Par necesita acceso a tu cámara");
      return;
    }

    try {
      await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [1, 1],
        quality: 0.8, 
        maxWidth: 1000, 
        maxHeight: 1000, 
      }).then((result) => {
        if (!result.canceled) {
          setUrlImage(result.uri);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

 

  const BottomSheetr = () => (
    
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[0.1, 10, 130]}
      initialSnap={0.1}
      index={-1}
      enablePanDownToClose={true}
    >
      <View className="h-full">
        <View className="justify-center h-full flex-row pt-1">
          {camera ? (
            <View className="h-4/6 w-2/6 p-2">
              <TouchableOpacity
                onPress={takePhoto}
                className="h-full items-center justify-center"
              >
                <MaterialCommunityIcons
                  name="camera"
                  color={"#F59E0B"}
                  size={50}
                />
                <Text className="font-bold text-md">Tomar foto</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {gallery ? (
            <View className="h-4/6 w-2/6 p-2">
              <TouchableOpacity
                onPress={pickImageFromGallery}
                className="h-full items-center justify-center"
              >
                <MaterialCommunityIcons
                  name="image"
                  color={"#F59E0B"}
                  size={50}
                />
                <Text className="font-bold text-md">Galería</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </BottomSheet>
  );

  const LoadingModal = () =>
    loadingPicture  ? (
      <View>
        <Modal
          className="m-4 rounded-xl"
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="flex-1 justify-center items-center mt-22 bg-red-500"
          >
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}
              className="m-20 bg-zinc-100 w-3/4 h-1/6 rounded-md items-center justify-center"
            >
              <ActivityIndicator size={"large"} />
              <Text className="text-center mt-3 mb-1 font-bold">
                Espera un momento mientras cargamos el archivo ...
              </Text>
              <Text numberOfLines={1} className="px-4">
                { filenameImage}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    ) : null;

  return {
    bottomSheetRef,
    BottomSheetr,
    urlImageFinal,
    setUrlImageFinal,
    LoadingModal,
  };
};

export default useUploadFile;
