
const metrics = [
  {
    title: "Total Tickets",
    value: "1,284",
    description: "+8.4%",
    icon: "confirmation_number",
    color: "text-text-main",
    descriptionColor: "text-success",
  },
  {
    title: "Open Queue",
    value: "42",
    description: "5 unassigned",
    icon: "inbox",
    color: "text-warning",
    descriptionColor: "text-text-muted",
  },
  {
    title: "In Progress",
    value: "62",
    description: "Across 8 agents",
    icon: "pending_actions",
    color: "text-info",
    descriptionColor: "text-text-muted",
  },
  {
    title: "Resolved",
    value: "1,180",
    description: "94.2% rate",
    icon: "task_alt",
    color: "text-success",
    descriptionColor: "text-success",
  },
  {
    title: "Customers",
    value: "840",
    description: "+34 this month",
    icon: "groups",
    color: "text-text-main",
    descriptionColor: "text-text-muted",
  },
  {
    title: "Support Agents",
    value: "12",
    description: "8 active now",
    icon: "support_agent",
    color: "text-text-main",
    descriptionColor: "text-text-muted",
  },
];

const categories = [
  { name: "Technical Issue", count: 542, percentage: 42, color: "bg-primary" },
  { name: "Billing & Invoices", count: 386, percentage: 30, color: "bg-blue-600" },
  { name: "Account Problem", count: 205, percentage: 16, color: "bg-amber-600" },
  { name: "Feature Requests & Other", count: 151, percentage: 12, color: "bg-purple-600" },
];

const priorities = [
  {
    name: "Urgent",
    count: 14,
    color: "bg-red-100 text-error border-red-200",
  },
  {
    name: "High",
    count: 28,
    color: "bg-orange-100 text-warning border-orange-200",
  },
  {
    name: "Medium",
    count: 64,
    color: "bg-blue-100 text-info border-blue-200",
  },
  {
    name: "Low",
    count: 22,
    color: "bg-gray-100 text-text-main border-border-subtle",
  },
];

const agents = [
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "Tier 2 Senior",
    assigned: 7,
    resolved: 184,
    score: "4.96",
    status: "Active",
    avatar: "bg-indigo-600",
  },
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Tier 1 Support",
    assigned: 9,
    resolved: 162,
    score: "4.88",
    status: "Active",
    avatar: "bg-blue-600",
  },
  {
    initials: "LG",
    name: "Liam Gallagher",
    role: "Security Specialist",
    assigned: 4,
    resolved: 98,
    score: "4.92",
    status: "In Call",
    avatar: "bg-purple-600",
  },
];

const registrations = [
  {
    initials: "JD",
    name: "James Davidson",
    company: "Davidson Enterprises",
    date: "Today",
  },
  {
    initials: "AM",
    name: "Anna Mitchell",
    company: "Mitchell Solutions",
    date: "Yesterday",
  },
  {
    initials: "RK",
    name: "Robert King",
    company: "King Technologies",
    date: "Nov 22",
  },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Page Heading */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-headline-xl text-text-main tracking-tight">
            Support Operations Overview
          </h1>
          <p className="text-body-md text-text-muted mt-1">
            Real-time performance metrics, team utilization, and volume
            forecasting across 1,284 tickets.
          </p>
        </div>

        <span className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 text-green-900 border border-green-200 rounded-full text-label-sm w-fit">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          SLA Target Met: 98.4%
        </span>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white p-4 rounded-md border border-border-subtle shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-label text-label-sm text-text-muted uppercase tracking-wider">
                {metric.title}
              </p>

              <span className="material-symbols-outlined text-text-muted">
                {metric.icon}
              </span>
            </div>

            <h3
              className={`font-headline text-headline-lg tabular-nums mt-2 ${metric.color}`}
            >
              {metric.value}
            </h3>

            <p
              className={`text-label-sm mt-1 font-semibold ${metric.descriptionColor}`}
            >
              {metric.description}
            </p>
          </div>
        ))}
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Ticket Inflow Chart */}
        <div className="lg:col-span-7 bg-white p-6 rounded-md border border-border-subtle shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-title-md text-text-main">
                Ticket Inflow & Resolution Velocity
              </h2>
              <p className="text-body-sm text-text-muted">
                Daily volume comparison over the past 30 days
              </p>
            </div>

            <div className="flex items-center gap-4 text-label-sm font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-primary" />
                Created
              </span>

              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-success" />
                Resolved
              </span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="h-56 w-full pt-6">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 500 180"
              preserveAspectRatio="none"
              role="img"
              aria-label="Ticket inflow and resolution trend chart"
            >
              <line x1="0" y1="30" x2="500" y2="30" stroke="#F1F5F9" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="#F1F5F9" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#F1F5F9" />
              <line x1="0" y1="165" x2="500" y2="165" stroke="#E2E8F0" />

              <path
                d="M 0 130 Q 80 140 120 90 T 250 80 T 380 45 T 500 55 L 500 165 L 0 165 Z"
                fill="rgba(29, 78, 216, 0.08)"
              />

              <path
                d="M 0 130 Q 80 140 120 90 T 250 80 T 380 45 T 500 55"
                fill="none"
                stroke="#1D4ED8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M 0 145 Q 80 150 120 105 T 250 95 T 380 50 T 500 60"
                fill="none"
                stroke="#166534"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                strokeLinecap="round"
              />

              <circle cx="380" cy="45" r="4" fill="#1D4ED8" stroke="white" strokeWidth="2" />
              <circle cx="500" cy="55" r="4" fill="#1D4ED8" stroke="white" strokeWidth="2" />
            </svg>

            <div className="flex justify-between text-body-sm text-text-muted pt-3">
              <span>Oct 20</span>
              <span>Oct 27</span>
              <span>Nov 03</span>
              <span>Nov 10</span>
              <span>Today</span>
            </div>
          </div>

          {/* Chart Statistics */}
          <div className="pt-5 mt-5 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-body-sm text-text-muted">Avg Daily Inflow</p>
              <p className="font-headline text-title-md font-bold mt-1">
                42.8 tickets
              </p>
            </div>

            <div>
              <p className="text-body-sm text-text-muted">
                Median First Response
              </p>
              <p className="font-headline text-title-md text-success font-bold mt-1">
                14m 20s
              </p>
            </div>

            <div>
              <p className="text-body-sm text-text-muted">
                Avg Resolution Time
              </p>
              <p className="font-headline text-title-md text-primary font-bold mt-1">
                3h 45m
              </p>
            </div>
          </div>
        </div>

        {/* Categories and Priority */}
        <div className="lg:col-span-5 space-y-6">

          {/* Categories */}
          <div className="bg-white p-6 rounded-md border border-border-subtle shadow-sm">
            <h2 className="font-headline text-title-md text-text-main">
              Tickets by Category
            </h2>

            <div className="space-y-4 pt-4">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex justify-between gap-2 text-body-sm mb-2">
                    <span className="font-semibold text-text-main">
                      {category.name}
                    </span>

                    <span className="text-text-muted tabular-nums">
                      {category.count} ({category.percentage}%)
                    </span>
                  </div>

                  <div className="w-full h-2 rounded bg-light-surface-container overflow-hidden">
                    <div
                      className={`h-full rounded ${category.color}`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Distribution */}
          <div className="bg-white p-6 rounded-md border border-border-subtle shadow-sm">
            <h2 className="font-headline text-title-md text-text-main mb-4">
              Priority Distribution
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {priorities.map((priority) => (
                <div
                  key={priority.name}
                  className={`p-3 rounded text-center border ${priority.color}`}
                >
                  <span className="text-label-sm uppercase font-bold block">
                    {priority.name}
                  </span>

                  <span className="font-headline text-headline-lg tabular-nums">
                    {priority.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agents and Registrations */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Top Support Agents */}
        <div className="lg:col-span-7 bg-white rounded-md border border-border-subtle shadow-sm overflow-hidden">
          <div className="p-5 border-b border-border-subtle flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-title-md text-text-main">
                Top Support Agents
              </h2>
              <p className="text-body-sm text-text-muted">
                Ranked by resolution count and CSAT satisfaction
              </p>
            </div>

            <a
              href="/admin/agents"
              className="font-label text-label-md text-primary hover:text-primary-hover whitespace-nowrap"
            >
              Manage Agents
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-light-surface-container border-b border-border-subtle">
                <tr className="text-text-muted">
                  <th className="py-3 px-5 text-label-sm uppercase">Agent</th>
                  <th className="py-3 px-5 text-label-sm uppercase">Assigned</th>
                  <th className="py-3 px-5 text-label-sm uppercase">Resolved</th>
                  <th className="py-3 px-5 text-label-sm uppercase">CSAT</th>
                  <th className="py-3 px-5 text-label-sm uppercase text-right">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border-subtle text-body-md">
                {agents.map((agent) => (
                  <tr key={agent.name}>
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-3 min-w-40">
                        <div
                          className={`w-8 h-8 rounded-full ${agent.avatar} text-white font-bold flex items-center justify-center text-label-sm shrink-0`}
                        >
                          {agent.initials}
                        </div>

                        <div>
                          <p className="font-semibold text-text-main whitespace-nowrap">
                            {agent.name}
                          </p>
                          <p className="text-body-sm text-text-muted whitespace-nowrap">
                            {agent.role}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-5 tabular-nums">
                      {agent.assigned}
                    </td>

                    <td className="py-3.5 px-5 tabular-nums font-semibold">
                      {agent.resolved}
                    </td>

                    <td className="py-3.5 px-5">
                      <span className="text-success font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-body-md">
                          star
                        </span>
                        {agent.score}
                      </span>
                    </td>

                    <td className="py-3.5 px-5 text-right">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-label-sm font-semibold ${
                          agent.status === "Active"
                            ? "bg-green-100 text-green-900"
                            : "bg-amber-100 text-amber-950"
                        }`}
                      >
                        {agent.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Registrations */}
        <div className="lg:col-span-5 bg-white rounded-md border border-border-subtle shadow-sm overflow-hidden">
          <div className="p-5 border-b border-border-subtle flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-title-md text-text-main">
                Recent Registrations
              </h2>
              <p className="text-body-sm text-text-muted">
                Newly onboarded enterprise accounts
              </p>
            </div>

            <a
              href="/admin/customers"
              className="font-label text-label-md text-primary hover:text-primary-hover whitespace-nowrap"
            >
              All Customers
            </a>
          </div>

          <div className="divide-y divide-border-subtle">
            {registrations.map((customer) => (
              <div
                key={customer.name}
                className="p-4 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center text-label-md shrink-0">
                    {customer.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-body-md text-text-main truncate">
                      {customer.name}
                    </p>
                    <p className="text-body-sm text-text-muted truncate">
                      {customer.company}
                    </p>
                  </div>
                </div>

                <span className="text-body-sm text-text-muted whitespace-nowrap">
                  {customer.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
