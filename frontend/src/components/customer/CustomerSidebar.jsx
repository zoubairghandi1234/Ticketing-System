
import { NavLink } from "react-router-dom";

export default function CustomerSidebar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded font-label text-label-md transition-colors ${
      isActive
        ? "bg-primary text-white shadow-sm"
        : "text-gray-200 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <aside className="w-full md:w-64 bg-nav-dark text-on-primary flex-shrink-0 md:min-h-screen flex flex-col justify-between border-r border-nav-border z-20">

      <div>
        {/* Logo */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-nav-border">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-headline-lg">
                headset_mic
              </span>
            </div>

            <div>
              <span className="font-headline text-title-md font-bold tracking-tight text-white block leading-tight">
                HelpDesk
              </span>

              <span className="font-label text-label-sm text-gray-300 uppercase tracking-wider block">
                Customer Portal
              </span>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1.5" aria-label="Customer Navigation">

          <NavLink to="/customer/dashboard" end className={navClass}>
            <span className="material-symbols-outlined text-title-md">
              dashboard
            </span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/customer/tickets"
            end
            className={({ isActive }) =>
              `flex items-center justify-between px-3.5 py-2.5 rounded font-label text-label-md transition-colors ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-200 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-title-md">
                confirmation_number
              </span>
              <span>My Tickets</span>
            </div>

            <span className="px-2 py-0.5 rounded-full text-label-sm font-bold bg-gray-800 text-gray-200 border border-gray-700">
              4
            </span>
          </NavLink>

          <NavLink to="/customer/tickets/create" className={navClass}>
            <span className="material-symbols-outlined text-title-md">
              add_circle
            </span>
            <span>Create Ticket</span>
          </NavLink>

          <NavLink to="/customer/profile" className={navClass}>
            <span className="material-symbols-outlined text-title-md">
              account_circle
            </span>
            <span>Profile</span>
          </NavLink>

        </nav>
      </div>

      {/* Customer Information */}
      <div className="p-4 border-t border-nav-border">

        <div className="flex items-center justify-between px-2 py-2">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-label-md">
              ER
            </div>

            <div className="overflow-hidden">
              <p className="font-label text-label-md text-white truncate">
                Elena Rostova
              </p>

              <p className="text-body-sm text-gray-300 truncate">
                Acme Health
              </p>
            </div>

          </div>

          <button
            type="button"
            aria-label="Sign out"
            className="text-gray-300 hover:text-white p-1.5 rounded hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-title-md">
              logout
            </span>
          </button>

        </div>
      </div>

    </aside>
  );
}
