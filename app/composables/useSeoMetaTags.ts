interface SeoMetaTags {
  title: string;
  description: string;
}
export const useSeoMetaTags = ({ title, description }: SeoMetaTags) => {
  if (!title || !description) {
    throw new Error('useSeoMetaTags: Both title and description must be provided and cannot be empty.');
  }

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
  });
};
