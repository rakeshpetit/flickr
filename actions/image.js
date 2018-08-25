export const SAVE_IMAGE = 'save_image';
export const CLEAR_IMAGE = 'clear_image';

export function saveImage(user) {
  return {
    type: SAVE_IMAGE,
    user
  };
}

export function clearImage() {
  return {
    type: CLEAR_IMAGE,
  };
}
