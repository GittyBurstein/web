import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // הוסף את ה-backend לטעינת קובצי ה-JSON
i18n
  .use(Backend) // משתמש ב-backend כדי לטעון את קובצי ה-JSON
  .use(initReactI18next)
  .init({
    lng: "en", // שפה ראשונית
    fallbackLng: "en", // שפה חלופית אם אין תרגום
    interpolation: {
      escapeValue: false // לא נחוץ ב-React
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Adjusted to remove 'public',
    },
  });
export default i18n;
