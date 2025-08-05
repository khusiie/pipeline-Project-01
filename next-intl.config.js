export const locales = ['en', 'hi', 'bn', 'te', 'ta', 'gu', 'ml', 'kn'];
export const defaultLocale = 'en';

export default function createRequestConfig({ locale }) {
  console.log("locale", locale)
  return {
    messages: (async () => {
      try {
        return (await import(`./messages/${locale}.json`)).default;
      } catch (error) {
        console.warn(`Messages for locale "${locale}" not found`);
        return {};
      }
    })()
  };
}