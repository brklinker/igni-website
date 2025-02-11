'use client';

import { DollarSign, Search, Store, ShoppingCart, Laptop, Heart, FileText, X, MousePointer2, Sparkles } from "lucide-react";

const FlameMascot = () => (
  <div className="w-24 h-24 mx-auto mb-8 relative">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse">
      <path
        d="M12 2C9.39 4.85 5.74 8.2 5.74 12.34C5.74 16.5 8.63 19.89 12 19.89C15.37 19.89 18.26 16.5 18.26 12.34C18.26 8.2 14.61 4.85 12 2Z"
        fill="url(#flame-gradient)"
        className="animate-float"
      />
      <defs>
        <linearGradient id="flame-gradient" x1="12" y1="2" x2="12" y2="19.89">
          <stop offset="0%" stopColor="rgb(249, 115, 22)" />
          <stop offset="100%" stopColor="rgb(234, 88, 12)" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-3">
      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <FlameMascot />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Meet Igni
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              Shop items, not brands
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your smart shopping companion that finds the best deals and alternatives while you browse.
              Never overpay again.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Coming Soon to Chrome
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">How Igni Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to smarter shopping decisions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-primary/20">
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-primary/20"></div>
            </div>
            
            {/* Step 1 */}
            <div className="bg-background rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary mx-auto">
                <MousePointer2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Browse Normally</h3>
              <p className="text-muted-foreground text-center">
                Shop as you usually would. Igni works quietly in the background while you browse products or services.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-background rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary mx-auto">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Instant Analysis</h3>
              <p className="text-muted-foreground text-center">
                Igni automatically finds better deals and alternatives based off what you're searching for.
              </p>
              <div className="mt-4 bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Better Deals Found</span>
                  <span className="text-green-600">3 options</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-background rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary mx-auto">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Save & Choose</h3>
              <p className="text-muted-foreground text-center">
                Make informed decisions with transparent pricing and verified alternatives.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">✓</span>
                  <span>Seller insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">✓</span>
                  <span>Better-priced alternatives</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">✓</span>
                  <span>Product pros and cons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">See Igni in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real examples of how Igni helps you save money and make smarter choices
            </p>
          </div>

          {/* Main Example */}
          <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-xl overflow-hidden mb-12">
            <div className="relative">
              <img 
                src="furniture-example.png"
                alt="Igni finding better furniture deals"
                className="w-full rounded-t-xl"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Save $200
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Smart Alternative Found</h3>
                  <p className="text-muted-foreground">Direct from manufacturer with significant savings</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <span className="font-medium">Original Price</span>
                    <p className="text-sm text-muted-foreground">World Market</p>
                  </div>
                  <span className="text-lg font-semibold line-through text-muted-foreground">$849.99</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                  <div>
                    <span className="font-medium text-primary">Better Deal Found</span>
                    <p className="text-sm text-muted-foreground">TOV Furniture (Manufacturer)</p>
                  </div>
                  <span className="text-lg font-semibold text-primary">$649.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Bring product research everywhere</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Igni product breakdowns with pros and cons and price comparisons
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-xl overflow-hidden mb-12">
            <div className="relative">
              <img 
                src="vpn-example.png"
                alt="Igni comparing VPN services"
                className="w-full rounded-t-xl"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Feature Comparison
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Laptop className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Compare Software Products Instantly</h3>
                  <p className="text-muted-foreground">See features, prices, and insights at a glance.</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Choose Igni</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Shop smarter, faster, and with confidence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Save Money */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative bg-background p-8 rounded-lg">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Save Money</h3>
                <p className="text-muted-foreground">
                  Automatically find better prices across thousands of retailers and manufacturers. Never overpay again.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span className="font-semibold">Average savings:</span>
                    <span>15-40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Time */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative bg-background p-8 rounded-lg">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Save Time</h3>
                <p className="text-muted-foreground">
                  Skip the endless research. Igni instantly compares prices, features, and alternatives while you browse.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span className="font-semibold">Time saved:</span>
                    <span>Hours per purchase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smarter Decisions */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative bg-background p-8 rounded-lg">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Laptop className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smarter Decisions</h3>
                <p className="text-muted-foreground">
                  Compare SaaS products effortlessly. See feature breakdowns, pricing plans, and alternatives at a glance.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span className="font-semibold">Knowledge:</span>
                    <span>From experts and trusted sources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Stay in the Loop</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be the first to know when Igni launches. Join our waitlist for early access and exclusive deals.
            </p>
          </div>
          <form 
            className="max-w-md mx-auto flex gap-4"
            name="waitlist"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-8">
            <FlameMascot />
          </div>
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Igni. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}