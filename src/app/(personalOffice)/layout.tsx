import type { PropsWithChildren } from "react";

const DashboardPageLayout = ({children}: PropsWithChildren<unknown>) => {
   return (
      <div>
         <h1>Dashboard</h1>
         {children}
      </div>
   )
}

export default DashboardPageLayout;