import images from '~/assets/images';

export const resolveProfilePicURL = (url: string | null) => {
  switch (url) {
    case 'pic1':
      return images.portrait1;
    case 'pic2':
      return images.portrait2;
    case 'pic3':
      return images.portrait3;
    default:
      return images.portrait1;
  }
};
