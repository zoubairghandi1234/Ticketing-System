export default function CustomerDashboard() {
  return (
    <div className="bg-light-surface-container font-body text-text-main min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-nav-dark text-on-primary flex-shrink-0 md:min-h-[1024px] flex flex-col justify-between border-r border-nav-border z-20" data-stitch-vh="md:min-h-[1024px]===md:min-h-screen">

          <div>
      <div className="h-16 px-6 flex items-center justify-between border-b border-nav-border">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary shadow-sm">

                  <span className="material-symbols-outlined text-headline-lg">headset_mic</span>

                </div>

                <div>

                  <span className="font-headline text-title-md font-bold tracking-tight text-white block leading-tight">HelpDesk</span>

                  <span className="font-label text-label-sm text-gray-300 uppercase tracking-wider block">Customer Portal</span>

                </div>

              </div>

            </div>
      <nav className="p-4 space-y-1.5" aria-label="Customer Navigation">

              <a href="#dashboard" className="flex items-center gap-3 px-3.5 py-2.5 rounded bg-primary text-white font-label text-label-md transition-colors shadow-sm">

                <span className="material-symbols-outlined text-title-md">dashboard</span>

                <span>Dashboard</span>

              </a>

              <a href="#my-tickets" className="flex items-center justify-between px-3.5 py-2.5 rounded text-gray-200 hover:text-white hover:bg-gray-800 font-label text-label-md transition-colors">

                <div className="flex items-center gap-3">

                  <span className="material-symbols-outlined text-title-md">confirmation_number</span>

                  <span>My Tickets</span>

                </div>

                <span className="px-2 py-0.5 rounded-full text-label-sm font-bold bg-gray-800 text-gray-200 border border-gray-700">4</span>

              </a>

              <a href="#create-ticket" className="flex items-center gap-3 px-3.5 py-2.5 rounded text-gray-200 hover:text-white hover:bg-gray-800 font-label text-label-md transition-colors">

                <span className="material-symbols-outlined text-title-md">add_circle</span>

                <span>Create Ticket</span>

              </a>

              <a href="#profile" className="flex items-center gap-3 px-3.5 py-2.5 rounded text-gray-200 hover:text-white hover:bg-gray-800 font-label text-label-md transition-colors">

                <span className="material-symbols-outlined text-title-md">account_circle</span>

                <span>Profile</span>

              </a>

            </nav>

          </div>
      <div className="p-4 border-t border-nav-border">

            <div className="flex items-center justify-between px-2 py-2">

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-label-md">

                  ER

                </div>

                <div className="overflow-hidden">

                  <p className="font-label text-label-md text-white truncate">Elena Rostova</p>

                  <p className="text-body-sm text-gray-300 truncate">Acme Health</p>

                </div>

              </div>

              <button type="button" aria-label="Sign out" className="text-gray-300 hover:text-white p-1.5 rounded hover:bg-gray-800 transition-colors">

                <span className="material-symbols-outlined text-title-md">logout</span>

              </button>

            </div>

          </div>

        </aside>
      <div className="flex-1 flex flex-col min-w-0">
      <header className="h-16 bg-light-surface border-b border-border-subtle px-8 flex items-center justify-between sticky top-0 z-10">

            <div className="flex items-center gap-4 w-96">

              <div className="relative w-full">

                <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted text-title-md">search</span>

                <input type="text" placeholder="Search my tickets or knowledge base..." className="w-full pl-9 pr-4 py-2 bg-light-surface-container border border-border-subtle rounded text-body-md text-text-main focus:bg-light-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />

              </div>

            </div>



            <div className="flex items-center gap-3">
      <a href="#create" className="inline-flex items-center gap-2 px-3.5 py-2 bg-primary hover:bg-primary-hover text-on-primary font-label text-label-md rounded shadow-sm transition-colors">

                <span className="material-symbols-outlined text-title-md">add</span>

                <span>Create New Ticket</span>

              </a>
      <div className="relative">

                <button type="button" className="p-2 text-text-main hover:text-primary hover:bg-light-surface-container rounded transition-colors relative" aria-label="Notifications">

                  <span className="material-symbols-outlined text-headline-lg">notifications</span>

                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-white"></span>

                </button>

              </div>



              <div className="h-6 w-px bg-border-subtle mx-1"></div>
      <button type="button" className="p-2 text-text-main hover:text-primary hover:bg-light-surface-container rounded transition-colors" aria-label="Documentation">

                <span className="material-symbols-outlined text-headline-lg">help</span>

              </button>

            </div>

          </header>
      <main className="p-8 max-w-7xl w-full mx-auto space-y-8 flex-1">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div>

                <h1 className="font-headline text-headline-xl text-text-main tracking-tight">Welcome back, Elena</h1>

                <p className="text-body-md text-light-on-surface-container">Track open tickets, request technical assistance, or browse recent updates.</p>

              </div>

              <div className="flex items-center gap-2 text-body-sm text-text-main bg-light-surface px-3 py-1.5 rounded border border-border-subtle shadow-sm">

                <span className="w-2 h-2 rounded-full bg-success"></span>

                <span>Customer Service Desk is fully operational</span>

              </div>

            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="bg-light-surface p-5 rounded-md border border-border-subtle shadow-sm flex flex-col justify-between">

                <div className="flex items-center justify-between mb-3">

                  <span className="font-label text-label-sm text-light-on-surface-container uppercase tracking-wider">Total Tickets</span>

                  <span className="p-2 rounded bg-primary-subtle text-primary">

                    <span className="material-symbols-outlined text-title-md">confirmation_number</span>

                  </span>

                </div>

                <div>

                  <h3 className="font-headline text-display-lg text-text-main tabular-nums">14</h3>

                  <p className="text-body-sm text-light-on-surface-container mt-1">Submitted in 2026</p>

                </div>

              </div>



              <div className="bg-light-surface p-5 rounded-md border border-border-subtle shadow-sm flex flex-col justify-between">

                <div className="flex items-center justify-between mb-3">

                  <span className="font-label text-label-sm text-light-on-surface-container uppercase tracking-wider">Open Tickets</span>

                  <span className="p-2 rounded bg-warning-surface text-warning">

                    <span className="material-symbols-outlined text-title-md">hourglass_empty</span>

                  </span>

                </div>

                <div>

                  <h3 className="font-headline text-display-lg text-text-main tabular-nums">2</h3>

                  <p className="text-body-sm text-warning font-semibold mt-1">Awaiting agent triage</p>

                </div>

              </div>



              <div className="bg-light-surface p-5 rounded-md border border-border-subtle shadow-sm flex flex-col justify-between">

                <div className="flex items-center justify-between mb-3">

                  <span className="font-label text-label-sm text-light-on-surface-container uppercase tracking-wider">In Progress</span>

                  <span className="p-2 rounded bg-info-surface text-info">

                    <span className="material-symbols-outlined text-title-md">sync</span>

                  </span>

                </div>

                <div>

                  <h3 className="font-headline text-display-lg text-text-main tabular-nums">2</h3>

                  <p className="text-body-sm text-info font-semibold mt-1">Sarah Jenkins working</p>

                </div>

              </div>



              <div className="bg-light-surface p-5 rounded-md border border-border-subtle shadow-sm flex flex-col justify-between">

                <div className="flex items-center justify-between mb-3">

                  <span className="font-label text-label-sm text-light-on-surface-container uppercase tracking-wider">Resolved Tickets</span>

                  <span className="p-2 rounded bg-success-surface text-success">

                    <span className="material-symbols-outlined text-title-md">check_circle</span>

                  </span>

                </div>

                <div>

                  <h3 className="font-headline text-display-lg text-text-main tabular-nums">10</h3>

                  <p className="text-body-sm text-success font-semibold mt-1">100% satisfaction score</p>

                </div>

              </div>



            </div>
      <section className="bg-light-surface rounded-md border border-border-subtle shadow-sm overflow-hidden">

              <div className="p-5 border-b border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">

                <div>

                  <h2 className="font-headline text-title-md text-text-main">Recent Support Tickets</h2>

                  <p className="text-body-sm text-light-on-surface-container">Tickets logged for Acme Health organizational account</p>

                </div>

                <div className="flex items-center gap-3">

                  <div className="flex items-center gap-2">

                    <span className="text-body-sm text-light-on-surface-container">Filter:</span>

                    <select className="text-body-sm bg-light-surface-container border border-border-subtle rounded px-2.5 py-1.5 text-text-main focus:outline-none focus:ring-1 focus:ring-primary">

                      <option value="all">All Statuses</option>

                      <option value="open">Open</option>

                      <option value="in-progress">In Progress</option>

                      <option value="resolved">Resolved</option>

                    </select>

                  </div>

                  <a href="#all" className="text-label-md font-label text-primary hover:text-primary-hover font-semibold">View All</a>

                </div>

              </div>



              <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse">

                  <thead className="bg-light-surface-container border-b border-border-subtle text-light-on-surface-container">

                    <tr>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider">Ticket ID</th>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider">Subject</th>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider">Category</th>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider">Priority</th>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider">Status</th>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider">Created Date</th>

                      <th scope="col" className="py-3 px-5 font-label text-label-sm uppercase tracking-wider text-right">Action</th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-border-subtle text-body-md text-text-main">
      <tr className="hover:bg-light-surface-container transition-colors">

                      <td className="py-4 px-5 font-code text-code-sm text-primary font-semibold">TCK-1001</td>

                      <td className="py-4 px-5">

                        <p className="font-semibold text-text-main text-balance">SSO SAML login redirection error</p>

                        <p className="text-body-sm text-light-on-surface-container">Redirect loops back to login page on Chrome v128...</p>

                      </td>

                      <td className="py-4 px-5 text-text-main">Technical Issue</td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-error-surface text-error">

                          <span className="material-symbols-outlined text-label-sm">keyboard_double_arrow_up</span> Urgent

                        </span>

                      </td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-info-surface text-info">

                          <span className="w-1.5 h-1.5 rounded-full bg-info"></span> In Progress

                        </span>

                      </td>

                      <td className="py-4 px-5 text-light-on-surface-container text-body-sm font-medium">Today, 09:24 AM</td>

                      <td className="py-4 px-5 text-right">

                        <a href="#ticket-1001" className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label text-label-md">

                          <span>View Details</span>

                          <span className="material-symbols-outlined text-title-md">arrow_forward</span>

                        </a>

                      </td>

                    </tr>
      <tr className="hover:bg-light-surface-container transition-colors">

                      <td className="py-4 px-5 font-code text-code-sm text-primary font-semibold">TCK-1004</td>

                      <td className="py-4 px-5">

                        <p className="font-semibold text-text-main text-balance">Request for HIPAA Compliance BAA agreement</p>

                        <p className="text-body-sm text-light-on-surface-container">Need executed enterprise security pack for annual audit</p>

                      </td>

                      <td className="py-4 px-5 text-text-main">Account Problem</td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-warning-surface text-warning">

                          <span className="material-symbols-outlined text-label-sm">arrow_upward</span> High

                        </span>

                      </td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-info-surface text-info">

                          <span className="w-1.5 h-1.5 rounded-full bg-info"></span> In Progress

                        </span>

                      </td>

                      <td className="py-4 px-5 text-light-on-surface-container text-body-sm font-medium">Yesterday, 04:12 PM</td>

                      <td className="py-4 px-5 text-right">

                        <a href="#ticket-1004" className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label text-label-md">

                          <span>View Details</span>

                          <span className="material-symbols-outlined text-title-md">arrow_forward</span>

                        </a>

                      </td>

                    </tr>
      <tr className="hover:bg-light-surface-container transition-colors">

                      <td className="py-4 px-5 font-code text-code-sm text-primary font-semibold">TCK-1007</td>

                      <td className="py-4 px-5">

                        <p className="font-semibold text-text-main text-balance">Webhook payload format customization</p>

                        <p className="text-body-sm text-light-on-surface-container">Inquiring about JSON schema customization on ticket close</p>

                      </td>

                      <td className="py-4 px-5 text-text-main">Feature Request</td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-light-surface-container text-text-main border border-border-subtle">

                          <span className="material-symbols-outlined text-label-sm">drag_handle</span> Medium

                        </span>

                      </td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-warning-surface text-warning">

                          <span className="w-1.5 h-1.5 rounded-full bg-warning"></span> Open

                        </span>

                      </td>

                      <td className="py-4 px-5 text-light-on-surface-container text-body-sm font-medium">Nov 17, 2026</td>

                      <td className="py-4 px-5 text-right">

                        <a href="#ticket-1007" className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label text-label-md">

                          <span>View Details</span>

                          <span className="material-symbols-outlined text-title-md">arrow_forward</span>

                        </a>

                      </td>

                    </tr>
      <tr className="hover:bg-light-surface-container transition-colors">

                      <td className="py-4 px-5 font-code text-code-sm text-primary font-semibold">TCK-0992</td>

                      <td className="py-4 px-5">

                        <p className="font-semibold text-text-main text-balance">Seat allocation upgrade on Business Plan</p>

                        <p className="text-body-sm text-light-on-surface-container">Added 5 additional engineer licenses successfully</p>

                      </td>

                      <td className="py-4 px-5 text-text-main">Billing</td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-light-surface-container text-light-on-surface-container border border-border-subtle">

                          <span className="material-symbols-outlined text-label-sm">arrow_downward</span> Low

                        </span>

                      </td>

                      <td className="py-4 px-5">

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-success-surface text-success">

                          <span className="w-1.5 h-1.5 rounded-full bg-success"></span> Resolved

                        </span>

                      </td>

                      <td className="py-4 px-5 text-light-on-surface-container text-body-sm font-medium">Nov 12, 2026</td>

                      <td className="py-4 px-5 text-right">

                        <a href="#ticket-0992" className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label text-label-md">

                          <span>View Details</span>

                          <span className="material-symbols-outlined text-title-md">arrow_forward</span>

                        </a>

                      </td>

                    </tr>



                  </tbody>

                </table>

              </div>
      <div className="p-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-body-sm text-light-on-surface-container gap-3">

                <span>Showing 4 recent tickets</span>

                <div className="flex items-center gap-2">

                  <button type="button" disabled={true} className="px-3 py-1 border border-border-subtle rounded text-light-on-surface-container bg-light-surface-container cursor-not-allowed text-body-sm">Previous</button>

                  <button type="button" className="px-3 py-1 bg-primary text-on-primary rounded font-semibold text-body-sm">1</button>

                  <button type="button" className="px-3 py-1 border border-border-subtle rounded hover:bg-light-surface-container text-body-sm">Next</button>

                </div>

              </div>

            </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-light-surface p-6 rounded-md border border-border-subtle shadow-sm flex items-start gap-4">

                <div className="p-3 bg-primary-subtle text-primary rounded-lg">

                  <span className="material-symbols-outlined text-headline-xl">menu_book</span>

                </div>

                <div>

                  <h3 className="font-headline text-title-md text-text-main mb-1">Self-Service Help Center</h3>

                  <p className="text-body-md text-light-on-surface-container mb-3">Explore 140+ setup tutorials, API documentation, and configuration guides.</p>

                  <a href="#docs" className="text-primary hover:text-primary-hover font-label text-label-md inline-flex items-center gap-1">

                    <span>Search Knowledge Base</span>

                    <span className="material-symbols-outlined text-body-sm">open_in_new</span>

                  </a>

                </div>

              </div>



              <div className="bg-light-surface p-6 rounded-md border border-border-subtle shadow-sm flex items-start gap-4">

                <div className="p-3 bg-success-surface text-success rounded-lg">

                  <span className="material-symbols-outlined text-headline-xl">support_agent</span>

                </div>

                <div>

                  <h3 className="font-headline text-title-md text-text-main mb-1">Dedicated Account Lead</h3>

                  <p className="text-body-md text-light-on-surface-container mb-3">Your dedicated enterprise representative is available Mon–Fri, 9am–6pm EST.</p>

                  <p className="text-body-sm text-text-main font-semibold">Sarah Jenkins · Response SLA: &lt; 1 hour</p>

                </div>

              </div>

            </div>



          </main>

        </div>
    </div>
  );
}
