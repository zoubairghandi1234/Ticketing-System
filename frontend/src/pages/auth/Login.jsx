
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect to FastAPI authentication endpoint
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Header */}
      <header className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🎧</span>
            </div>

            <span className="text-xl font-bold text-slate-900">
              HelpDesk
            </span>
          </div>

          <div className="text-sm text-slate-600">
            Need an agent account?{" "}
            <a href="#contact" className="font-semibold text-blue-600 hover:text-blue-700">
              Contact Admin
            </a>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 py-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <section className="space-y-8">

              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold border border-blue-100">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Version 3.4 Live — Smart Resolution Engine
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                  Enterprise customer support, organized and resolved at speed.
                </h1>

                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  Connect your customers with dedicated support agents.
                  Manage queues, enforce SLA targets, and gain real-time
                  visibility across every channel.
                </p>
              </div>

              {/* Demo Workspaces */}
              <div className="space-y-4">

                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Fast Demo Workspaces
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                  {/* Customer */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <span className="inline-block text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded-md mb-3">
                      Customer
                    </span>

                    <h4 className="text-sm font-bold text-slate-800">
                      Elena Rostova
                    </h4>

                    <p className="text-xs text-slate-500 mt-1 break-all">
                      elena@novapulse.io
                    </p>
                  </div>

                  {/* Agent */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <span className="inline-block text-xs font-semibold bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md mb-3">
                      Agent
                    </span>

                    <h4 className="text-sm font-bold text-slate-800">
                      Sarah Jenkins
                    </h4>

                    <p className="text-xs text-slate-500 mt-1 break-all">
                      s.jenkins@helpdesk.internal
                    </p>
                  </div>

                  {/* Admin */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <span className="inline-block text-xs font-semibold bg-orange-50 text-orange-700 px-2 py-1 rounded-md mb-3">
                      Administrator
                    </span>

                    <h4 className="text-sm font-bold text-slate-800">
                      David Sterling
                    </h4>

                    <p className="text-xs text-slate-500 mt-1 break-all">
                      ops@helpdesk.com
                    </p>
                  </div>

                </div>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  99.98% SLA Uptime
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  SOC2 Type II Certified
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  &lt; 15m Median First Reply
                </div>

              </div>

            </section>

            {/* Right Login Card */}
            <section className="w-full max-w-md mx-auto lg:ml-auto">

              <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-7 sm:p-9">

                {/* Card Header */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Welcome back
                  </h2>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Enter your email and password to access your support workspace.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Work Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm font-semibold text-slate-700"
                      >
                        Password
                      </label>

                      <a
                        href="#reset"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                        className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? "🙈" : "👁"}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />

                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-slate-600 cursor-pointer"
                    >
                      Keep me signed in for 30 days
                    </label>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-sm"
                  >
                    Sign In to HelpDesk
                    <span>→</span>
                  </button>

                  {/* Divider */}
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="px-4 text-xs text-slate-400 uppercase">
                      Or continue with
                    </span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  {/* SSO */}
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-lg transition duration-200 text-sm"
                  >
                    <span>▦</span>
                    Single Sign-On (Okta / Azure SAML)
                  </button>

                </form>

                {/* Register */}
                <p className="text-center text-sm text-slate-500 mt-8">
                  New customer?{" "}
                  <a
                    href="#register"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Create customer account
                  </a>
                </p>

              </div>

            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">

          <p>
            © 2026 HelpDesk Global Technologies Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#privacy" className="hover:text-slate-900">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-slate-900">
              Terms of Service
            </a>

            <a href="#support" className="text-green-600 font-medium">
              Status: Operational
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
