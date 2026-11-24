
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", path: "/admin/dashboard", icon: "dashboard" },
  { name: "All Tickets", path: "/admin/tickets", icon: "inbox", count: 128 },
  { name: "User Management", path: "/admin/users", icon: "manage_accounts" },
  { name: "Support Agents", path: "/admin/agents", icon: "support_agent" },
  { name: "Customers", path: "/admin/customers", icon: "group" },
  { name: "Categories", path: "/admin/categories", icon: "category" },
  { name: "Reports & Analytics", path: "/admin/reports", icon: "analytics" },
  { name: "Settings", path: "/admin/settings", icon: "settings" },
];

function AdminSidebar() {
  return (
    <aside className="w-full md:w-64 min-h-screen bg-nav-dark text-white flex flex-col justify-between border-r border-nav-border shrink-0">
      <div>
        {/* Logo */}
        <div className="h-16 px-6 flex items-center gap-3 border-b border-nav-border">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white">
              admin_panel_settings
            </span>
          </div>

          <div>
            <h1 className="font-headline text-title-md font-bold">
              HelpDesk
            </h1>
            <p className="text-label-sm text-amber-300 uppercase tracking-wider">
              Super Admin
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1" aria-label="Admin navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded transition-colors ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-title-md">
                  {item.icon}
                </span>

                <span className="font-label text-label-md">
                  {item.name}
                </span>
              </div>

              {item.count && (
                <span className="px-2 py-0.5 rounded-full text-label-sm bg-gray-800 text-gray-200">
                  {item.count}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Admin Profile */}
      <div className="p-4 border-t border-nav-border">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-nav-dark font-bold flex items-center justify-center text-label-md shrink-0">
              DS
            </div>

            <div className="min-w-0">
              <p className="font-label text-label-md text-white truncate">
                David Sterling
              </p>
              <p className="text-body-sm text-gray-300 truncate">
                Director of Support Ops
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Sign out"
            className="text-gray-300 hover:text-white p-1.5 rounded hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">
              logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;
