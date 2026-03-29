'use client';

import { useState } from 'react';

const sidebarItems = [
  { id: 'overview', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'giving', label: 'Giving History', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'impact', label: 'My Impact', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { id: 'events', label: 'Events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'receipts', label: 'Tax Receipts', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
];

const givingHistory = [
  { date: 'Mar 15, 2026', amount: 100, program: 'School Meal Program', type: 'Monthly' },
  { date: 'Feb 15, 2026', amount: 100, program: 'School Meal Program', type: 'Monthly' },
  { date: 'Feb 1, 2026', amount: 250, program: 'Emergency Food Response', type: 'One-Time' },
  { date: 'Jan 15, 2026', amount: 100, program: 'School Meal Program', type: 'Monthly' },
  { date: 'Dec 20, 2025', amount: 500, program: 'Year-End Campaign', type: 'One-Time' },
  { date: 'Dec 15, 2025', amount: 100, program: 'School Meal Program', type: 'Monthly' },
];

const upcomingEvents = [
  { date: 'Apr 5', title: 'Spring Food Drive', role: 'Warehouse Volunteer' },
  { date: 'Apr 12', title: 'Community Garden Day', role: 'Team Lead' },
  { date: 'May 3', title: 'Harvest Gala', role: 'Registered Attendee' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const totalGiven = givingHistory.reduce((sum, g) => sum + g.amount, 0);
  const mealsProvided = totalGiven * 4;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-harvest-400 to-giving-500 mx-auto" />
            <h2 className="text-center font-semibold text-gray-900 mt-3">Sarah Johnson</h2>
            <p className="text-center text-sm text-gray-500">Champion Member since 2024</p>
          </div>
          <nav className="bg-white rounded-xl shadow-md overflow-hidden">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-harvest-50 text-harvest-700 border-l-4 border-harvest-700'
                    : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome back, Sarah!</h1>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="text-sm text-gray-500">Total Given (2025-26)</div>
                  <div className="text-3xl font-bold text-harvest-700 mt-1">${totalGiven.toLocaleString()}</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="text-sm text-gray-500">Meals Provided</div>
                  <div className="text-3xl font-bold text-giving-600 mt-1">{mealsProvided.toLocaleString()}</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="text-sm text-gray-500">Volunteer Hours</div>
                  <div className="text-3xl font-bold text-amber-600 mt-1">48</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Recent Giving</h3>
                  {givingHistory.slice(0, 3).map((gift, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{gift.program}</div>
                        <div className="text-xs text-gray-500">{gift.date}</div>
                      </div>
                      <div className="text-sm font-semibold text-harvest-700">${gift.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                  {upcomingEvents.map((event, i) => (
                    <div key={i} className="flex gap-4 py-2 border-b border-gray-100 last:border-0">
                      <div className="text-sm font-bold text-harvest-700 w-12">{event.date}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        <div className="text-xs text-gray-500">{event.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'giving' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Giving History</h1>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Program</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {givingHistory.map((gift, i) => (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="px-6 py-4 text-sm text-gray-900">{gift.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{gift.program}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            gift.type === 'Monthly' ? 'bg-harvest-100 text-harvest-700' : 'bg-giving-100 text-giving-700'
                          }`}>
                            {gift.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">${gift.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Impact Report</h1>
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-harvest-50 rounded-lg">
                    <div className="text-4xl font-bold text-harvest-700">{mealsProvided.toLocaleString()}</div>
                    <div className="text-gray-600 mt-1">Meals Funded</div>
                  </div>
                  <div className="text-center p-6 bg-giving-50 rounded-lg">
                    <div className="text-4xl font-bold text-giving-600">12</div>
                    <div className="text-gray-600 mt-1">Families Directly Supported</div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Impact Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'School Meals', pct: 45 },
                      { label: 'Emergency Response', pct: 25 },
                      { label: 'Mobile Pantry', pct: 20 },
                      { label: 'Community Gardens', pct: 10 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-medium text-harvest-700">{item.pct}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-harvest-500 to-giving-500 h-2 rounded-full" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">My Events</h1>
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-harvest-100 flex items-center justify-center text-harvest-700 font-bold text-sm">
                        {event.date}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.role}</div>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 bg-giving-100 text-giving-700 rounded-full font-medium">Registered</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'receipts' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Tax Receipts</h1>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-600 mb-4">Download your tax-deductible donation receipts below.</p>
                <div className="space-y-3">
                  {['2025 Annual Summary', 'Q1 2026 Summary'].map((receipt) => (
                    <div key={receipt} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-harvest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-medium text-gray-900">{receipt}</span>
                      </div>
                      <button className="text-sm font-medium text-harvest-700 hover:text-harvest-800">Download PDF</button>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  HarvestShare Food Bank Network is a 501(c)(3) organization. EIN: 12-3456789. All donations are tax-deductible.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
