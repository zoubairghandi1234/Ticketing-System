import { Link } from "react-router-dom";

export default function CustomerNavbar() {
  return (
    <header className="h-16 bg-light-surface border-b border-border-subtle px-8 flex items-center justify-between sticky top-0 z-10">

      {/* Search */}
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted text-title-md">
            search
          </span>

          <input
            type="text"
            placeholder="Search my tickets or knowledge base..."
            className="w-full pl-9 pr-4 py-2 bg-light-surface-container border border-border-subtle rounded text-body-md text-text-main focus:bg-light-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">

        {/* Create Ticket */}
        <Link
          to="/customer/tickets/create"
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-primary hover:bg-primary-hover text-on-primary font-label text-label-md rounded shadow-sm transition-colors"
        >
          <span className="material-symbols-outlined text-title-md">
            add
          </span>
          <span>Create New Ticket</span>
        </Link>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="p-2 text-text-main hover:text-primary hover:bg-light-surface-container rounded transition-colors relative"
        >
          <span className="material-symbols-outlined text-headline-lg">
            notifications
          </span>

          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-white" />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-border-subtle mx-1" />

        {/* Documentation */}
        <button
          type="button"
          aria-label="Documentation"
          className="p-2 text-text-main hover:text-primary hover:bg-light-surface-container rounded transition-colors"
        >
          <span className="material-symbols-outlined text-headline-lg">
            help
          </span>
        </button>

      </div>
    </header>
  );
}
