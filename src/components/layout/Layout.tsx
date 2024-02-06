import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";

// Виключає серверний рендеринг
// const DynamicFooter = dynamic(() => import('./Footer'), {
//    ssr: false,
// })

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
   return (
      <Meta title={title} description={description}>
         <Header/>
            <main>
               {children}
            </main>
      </Meta>
   )
}

export default Layout;