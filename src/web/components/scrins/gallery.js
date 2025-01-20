import Nav from "../nav";
import { useTranslation } from "react-i18next";

 export default function Gallery()
{ const {t}=useTranslation();
   return(
    <>
    <p>{t('gallery.p')}</p>
    </>
   );
}