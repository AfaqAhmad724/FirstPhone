import ImagePicker from 'react-native-image-crop-picker';
import { RequestGalleryPermission } from '../Permissions/GalleryPermission';

const selectImage = async onDocumentSelected => {
  const result = await RequestGalleryPermission();
  if (result == 'granted') {
    ImagePicker.openPicker({
      cropping: true,
      compressImageQuality: 1,
    })
      .then(image => {
        let document = {
          name: image?.filename || `temp_image_${Date.now()}.jpg`,
          type: image?.mime,
          uri: image?.path,
        };
        onDocumentSelected(document);
      })
      .catch(error => {
        console.log('Media Manager Select Image', error);
      });
  }
};

const selectVideo = async onDocumentSelected => {
  const result = await RequestGalleryPermission();
  if (result == 'granted') {
    ImagePicker.openPicker({
      mediaType: 'video',
    })
      .then(video => {
        let document = {
          name: video?.filename || `temp_video_${Date.now()}.mp4`,
          type: video?.mime,
          uri: video?.path,
        };
        onDocumentSelected(document);
      })
      .catch(error => {
        console.log('New Post Select Image', error);
      });
  }
};

const takePicture = async onDocumentSelected => {
  try {
    const result = await RequestGalleryPermission();
    if (result === 'granted') {
      ImagePicker.openCamera({
        compressImageQuality: 1,
        mediaType: 'photo',
      })
        .then(image => {
          let photo = {
            uri: image?.path,
            type: image?.mime,
            name: image?.filename || `temp_image_${Date.now()}.jpg`,
          };
          onDocumentSelected(photo);
        })
        .catch(e => {
          if (e.message === 'User cancelled image selection') {
            console.log('User cancelled image selection');
          } else {
            console.error(e);
          }
        });
    }
  } catch (error) {
    console.error('Error in takePicture:', error);
  }
};

const TakeVideo = async onDocumentSelected => {
  try {
    const result = await RequestGalleryPermission();
    if (result == 'granted') {
      ImagePicker.openCamera({
        mediaType: 'video',
        videoQuality: 'high',
      })
        .then(video => {
          let document = {
            uri: video?.path,
            type: video?.mime,
            name: video?.filename || `temp_video_${Date.now()}.mp4`,
          };
          onDocumentSelected(document);
        })
        .catch(e => {
          if (e.message === 'User cancelled image selection') {
            console.log('User cancelled image selection');
          } else {
            console.error(e);
          }
        });
    }
  } catch (error) {
    console.error('Error in TakeVideo:', error);
  }
};

export { selectImage, selectVideo, takePicture, TakeVideo };
