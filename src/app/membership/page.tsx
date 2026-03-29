'use client';

import { useState } from 'react';

const tiers = [
  {
    name: 'Friend',
    monthlyPrice: 10,
    annualPrice: 100,
    color: 'harvest-500',
    benefits: [
      'Monthly impact newsletter',
      'Digital membership card',
      'Invitation to annual gala',
      'Name on donor wall',
    ],
  },
  {
    name: 'Champion',
    monthlyPrice: 25,
    annualPrice: 250,
    color: 'harvest-700',
    popular: true,
    benefits: [
      'Everything in Friend',
      'Quarterly impact reports',
      'Priority volunteer scheduling',
      'Exclusive behind-the-scenes tours',
      'Champion recognition badge',
      'Tax receipt auto-generation',
    ],
  },
  {
    name: 'Guardian',
    monthlyPrice: 100,
    annualPrice: 1000,
    color: 'giving-600',
    benefits: [
      'Everything in Champion',
      'Personal impact advisor',
      'Named program sponsorship',
      'Board meeting observer access',
      'VIP gala seating',
      'Corporate matching consultation',
      'Legacy giving planning',
    ],
  },
];

export default function MembershipPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Membership Tiers</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join our community of supporters and make a sustained impact on food security in our region.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 inline-flex items-center bg-white rounded-lg p-1 shadow-md">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              billing === 'monthly' ? 'bg-harvest-700 text-white' : 'text-gray-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              billing === 'annual' ? 'bg-harvest-700 text-white' : 'text-gray-700'
            }`}
          >
            Annual <span className="text-xs opacity-75">(Save 17%)</span>
          </button>
        </div>
      </div>

      {/* Tier Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-white rounded-xl shadow-lg overflow-hidden relative ${
              tier.popular ? 'ring-2 ring-harvest-700 scale-105' : ''
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-harvest-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
            )}
            <div className={`h-2 bg-${tier.color}`} />
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${billing === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                </span>
                <span className="text-gray-500">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-giving-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors ${
                tier.popular
                  ? 'bg-harvest-700 text-white hover:bg-harvest-800'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Join as {tier.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recognition */}
      <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">Recognition Levels</h2>
        <p className="mt-2 text-gray-600">
          All members are recognized on our annual Impact Wall and in our year-end report. Guardian members receive named recognition on sponsored programs.
        </p>
        <div className="mt-6 flex justify-center gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-harvest-300 to-harvest-500 mx-auto" />
            <div className="mt-2 text-sm font-medium text-gray-900">Friend</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-harvest-500 to-harvest-700 mx-auto" />
            <div className="mt-2 text-sm font-medium text-gray-900">Champion</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-giving-400 to-giving-600 mx-auto" />
            <div className="mt-2 text-sm font-medium text-gray-900">Guardian</div>
          </div>
        </div>
      </div>
    </div>
  );
}
