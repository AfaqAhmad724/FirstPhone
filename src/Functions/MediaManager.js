import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const selectImage = async onDocumentSelected => {
  const options = {
    mediaType: 'photo',
    quality: 1,
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      const asset = response.assets[0];
      const document = {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName || `temp_image_${Date.now()}.jpg`,
      };
      onDocumentSelected(document);
    }
  });
};

const selectVideo = async onDocumentSelected => {
  const options = {
    mediaType: 'video',
    videoQuality: 'high',
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled video picker');
    } else if (response.errorCode) {
      console.log('VideoPicker Error: ', response.errorMessage);
    } else {
      const asset = response.assets[0];
      const document = {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName || `temp_video_${Date.now()}.mp4`,
      };
      onDocumentSelected(document);
    }
  });
};

const takePicture = async onDocumentSelected => {
  const options = {
    mediaType: 'photo',
    quality: 1,
    saveToPhotos: true,
  };

  launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled camera');
    } else if (response.errorCode) {
      console.log('Camera Error: ', response.errorMessage);
    } else {
      const asset = response.assets[0];
      const document = {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName || `temp_image_${Date.now()}.jpg`,
      };
      onDocumentSelected(document);
    }
  });
};

const TakeVideo = async onDocumentSelected => {
  const options = {
    mediaType: 'video',
    videoQuality: 'high',
    saveToPhotos: true,
  };

  launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled video recording');
    } else if (response.errorCode) {
      console.log('Video Camera Error: ', response.errorMessage);
    } else {
      const asset = response.assets[0];
      const document = {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName || `temp_video_${Date.now()}.mp4`,
      };
      onDocumentSelected(document);
    }
  });
};

export { selectImage, selectVideo, takePicture, TakeVideo };
