export const useMediaStore = () => {
  const images = useState<string[]>('images', () => []);

  const addImage = (image: string) => {
    images.value.push(image);
  };

  const clearImages = () => {
    images.value = [];
  };

  return {
    images,
    addImage,
    clearImages,
  };
};
