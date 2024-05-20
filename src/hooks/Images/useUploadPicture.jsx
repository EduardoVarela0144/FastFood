import { useMutation } from "react-query";
import ImagesRepository from "../../repositories/ImagesRepository";
import { Alert } from "react-native";
import { useState } from "react";

function useUploadPicture() {
  const uploadPictureMutation = useMutation(ImagesRepository.uploadImage);

  const [imageId, setImageId] = useState();

  const uploadPicture = async (picture) => {
    try {
      await uploadPictureMutation
        .mutateAsync(picture)
        .then((response) => setImageId(response.downloadUrl));
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return {
    uploadPicture,
    isLoading: uploadPictureMutation.isLoading,
    imageId: imageId,
  };
}

export { useUploadPicture };
