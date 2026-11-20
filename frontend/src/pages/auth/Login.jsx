
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('s.jenkins@helpdesk.internal')
  const [password, setPassword] = useState('••••••••••••')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to your FastAPI authentication endpoint
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="bg-light-surface-container font-body text-text-main min-h-screen flex flex-col justify-between">

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-headline-lg">
              headset_mic
            </span>
          </div>

          <span className="font-headline text-headline-lg font-bold tracking-tight text-text-main">
            HelpDesk
          </span>
        </div>

        <div className="flex items-center gap-4 text-body-sm text-text-main">
          <span>Need an agent account?</span>
          <a
            href="#register"
            className="font-label text-label-md text-primary hover:text-primary-hover font-semibold"
          >
            Contact Admin
          </a>
        </div>
      </header>

      {/* Main Login Showcase */}
      <main className="w-full max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">

        {/* Left Hero Section */}
        <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle text-primary border border-info-surface text-label-sm font-label">
            <span className="material-symbols-outlined text-label-sm">
              auto_mode
            </span>
            <span>Version 3.4 Live — Smart Resolution Engine</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-headline text-display-lg text-text-main tracking-tight leading-tight text-balance">
              Enterprise customer support, organized and resolved at speed.
            </h1>

            <p className="text-body-lg text-light-on-surface-container max-w-xl text-pretty">
              Connect your customers with dedicated support agents. Manage queues,
              enforce SLA targets, and gain real-time visibility across every channel.
            </p>
          </div>

          {/* Demo Workspaces */}
          <div className="space-y-3 pt-2">
            <p className="text-label-sm font-label text-light-on-surface-container uppercase tracking-wider">
              Fast Demo Workspaces:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

              {/* Customer */}
              <div className="bg-light-surface p-3.5 rounded border border-border-subtle shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-semibold bg-primary-subtle text-primary mb-1">
                  Customer
                </span>
                <p className="text-label-md font-semibold text-text-main">
                  Elena Rostova
                </p>
                <p className="text-body-sm text-light-on-surface-container truncate">
                  elena@novapulse.io
                </p>
              </div>

              {/* Agent */}
              <div className="bg-light-surface p-3.5 rounded border border-border-subtle shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-semibold bg-info-surface text-info mb-1">
                  Agent
                </span>
                <p className="text-label-md font-semibold text-text-main">
                  Sarah Jenkins
                </p>
                <p className="text-body-sm text-light-on-surface-container truncate">
                  s.jenkins@helpdesk.internal
                </p>
              </div>

              {/* Administrator */}
              <div className="bg-light-surface p-3.5 rounded border border-border-subtle shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-semibold bg-warning-surface text-warning mb-1">
                  Administrator
                </span>
                <p className="text-label-md font-semibold text-text-main">
                  David Sterling
                </p>
                <p className="text-body-sm text-light-on-surface-container truncate">
                  ops@helpdesk.com
                </p>
              </div>

            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-light-on-surface-container text-body-sm">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-body-md text-success">
                verified
              </span>
              99.98% SLA Uptime
            </span>

            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-body-md text-success">
                lock
              </span>
              SOC2 Type II Certified
            </span>

            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-body-md text-success">
                speed
              </span>
              &lt; 15m Median First Reply
            </span>
          </div>

        </div>

        {/* Right Login Card */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-light-surface rounded-xl border border-border-subtle shadow-lg p-8 sm:p-10">

            <div className="mb-8">
              <h2 className="font-headline text-headline-xl text-text-main mb-1.5">
                Welcome back
              </h2>

              <p className="text-body-md text-light-on-surface-container">
                Enter your email and password to access your support workspace.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label
                  className="block font-label text-label-md text-text-main"
                  htmlFor="email"
                >
                  Work Email
                </label>

                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-3.5 top-3 text-light-on-surface-container text-title-md"
                    aria-hidden="true"
                  >
                    mail
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-light-surface border border-border-subtle rounded text-body-md text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    className="block font-label text-label-md text-text-main"
                    htmlFor="password"
                  >
                    Password
                  </label>

                  <a
                    href="#reset"
                    className="text-body-sm text-primary hover:text-primary-hover font-semibold"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-3.5 top-3 text-light-on-surface-container text-title-md"
                    aria-hidden="true"
                  >
                    lock
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-light-surface border border-border-subtle rounded text-body-md text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-light-on-surface-container hover:text-text-main"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined text-title-md">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-border-subtle text-primary focus:ring-primary"
                  />

                  <span className="text-body-sm text-light-on-surface-container">
                    Keep me signed in for 30 days
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-on-primary font-label text-label-lg rounded shadow-sm flex items-center justify-center gap-2 transition-colors duration-state-change"
              >
                <span>Sign In to HelpDesk</span>
                <span className="material-symbols-outlined text-title-md">
                  arrow_forward
                </span>
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border-subtle"></div>
                </div>

                <div className="relative flex justify-center text-label-sm uppercase">
                  <span className="bg-light-surface px-2 text-light-on-surface-container font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* SSO Alternative */}
              <button
                type="button"
                className="w-full py-2.5 px-4 bg-light-surface hover:bg-light-surface-container border border-border-subtle text-text-main font-label text-label-md rounded flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-title-md text-primary">
                  domain
                </span>
                <span>Single Sign-On (Okta / Azure SAML)</span>
              </button>

            </form>

            {/* Registration Link */}
            <p className="mt-8 text-center text-body-sm text-light-on-surface-container">
              New customer?{' '}
              <a
                href="#register"
                className="text-primary hover:text-primary-hover font-semibold"
              >
                Create customer account
              </a>
            </p>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-body-sm text-light-on-surface-container gap-4">
        <p>
          © 2026 HelpDesk Global Technologies Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-6 font-medium">
          <a href="#privacy" className="hover:text-text-main">
            Privacy Policy
          </a>

          <a href="#terms" className="hover:text-text-main">
            Terms of Service
          </a>

          <a href="#support" className="hover:text-text-main text-success">
            Status: Operational
          </a>
        </div>
      </footer>

    </div>
  )
}

export default Login
