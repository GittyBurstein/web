import Nav from "../nav.js";
import { useTranslation } from "react-i18next";


 export default function About()
{
   const {t}=useTranslation();
   return(
    <>
    <p>{t('about.p')}</p>
    </>
   );
}