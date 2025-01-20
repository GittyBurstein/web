import Nav from "../nav";
import {useTranslation} from "react-i18next"
 export default function Contect()
{
   const{t}=useTranslation();
   return(
    <>
    <p>{t('contect.p')}</p>
    </>
   );
}