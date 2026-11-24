
function AdminNavbar() {
  const handleExport = () => {
    const csvContent = [
      ["Metric", "Value"],
      ["Total Tickets", "1284"],
      ["Open Queue", "42"],
      ["In Progress", "62"],
      ["Resolved", "1180"],
      ["Customers", "840"],
      ["Support Agents", "12"],
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "helpdesk-report.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <header className="h-16 bg-light-surface border-b border-border-subtle px-4 md:px-8 flex items-center justify-between gap-4 sticky top-0 z-10">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted">
          search
        </span>

        <input
          type="text"
          placeholder="Search tickets, agents, or customers..."
          className="w-full pl-10 pr-4 py-2 bg-light-surface-container border border-border-subtle rounded text-body-md text-text-main focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        {/* Date Range */}
        <button
          type="button"
          className="hidden sm:flex items-center gap-2 px-3 py-2 border border-border-subtle rounded text-body-sm text-text-main bg-light-surface-container"
        >
          <span className="material-symbols-outlined text-title-md">
            calendar_today
          </span>
          <span>Last 30 Days</span>
          <span className="material-symbols-outlined text-body-sm">
            expand_more
          </span>
        </button>

        {/* Export */}
        <button
          type="button"
          onClick={handleExport}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 border border-border-subtle rounded text-label-md text-text-main hover:bg-light-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-title-md">
            file_download
          </span>
          Export CSV
        </button>

        {/* Create User */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary hover:bg-primary-hover text-white rounded text-label-md shadow-sm transition-colors"
        >
          <span className="material-symbols-outlined text-title-md">
            person_add
          </span>
          <span className="hidden sm:inline">Create User</span>
        </button>
      </div>
    </header>
  );
}

export default AdminNavbar;
