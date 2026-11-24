import { Outlet } from "react-router-dom";
import CustomerSidebar from "../components/customer/CustomerSidebar";
import CustomerNavbar from "../components/customer/CustomerNavbar";

export default function CustomerLayout() {
  return (
    <div className="bg-light-surface-container font-body text-text-main min-h-screen flex flex-col md:flex-row">

      <CustomerSidebar />

      <div className="flex-1 flex flex-col min-w-0">

        <CustomerNavbar />

        <main className="p-8 max-w-7xl w-full mx-auto space-y-8 flex-1">
          <Outlet />
        </main>

      </div>
    </div>
  );
}