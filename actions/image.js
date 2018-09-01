export const SAVE_IMAGE = 'save_image';
export const SAVE_IMAGE_CLOUD = 'save_image_cloud';
export const CLEAR_IMAGE = 'clear_image';

export function saveImage(image) {
  console.log('saveImage', image);
  return {
    type: SAVE_IMAGE,
    image
  };
}

export function saveImageCloud(image) {
  console.log('saveImageCloud', image);
  return {
    type: SAVE_IMAGE_CLOUD,
    image
  };
}

export function clearImage() {
  return {
    type: CLEAR_IMAGE,
  };
}
