import { AppSidebar } from "@/components/layout/app-sidebar";
import TopBar from "@/components/layout/top-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { hasCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export default  function DashboardLayout({ children }) {
  
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />

     
      <div className="flex flex-col w-full">
      <TopBar />
      <SidebarTrigger />
      <div className="px-1 md:px-6 my-6">
     
        {children}
      </div>
      </div>
    </SidebarProvider>
  );
}
