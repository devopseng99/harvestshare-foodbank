'use client';

import { useState } from 'react';

const givingLevels = [
  { amount: 25, label: 'Seed', meals: 100, desc: 'Provides a week of meals for a family of four' },
  { amount: 50, label: 'Sprout', meals: 200, desc: 'Stocks a weekend backpack program for 10 kids' },
  { amount: 100, label: 'Harvest', meals: 400, desc: 'Fuels a mobile pantry delivery to a food desert' },
  { amount: 250, label: 'Abundance', meals: 1000, desc: 'Supports a community garden for an entire season' },
];

const events = [
  { date: 'Apr 5, 2026', title: 'Spring Food Drive', location: 'Metro Central Warehouse', type: 'Volunteer' },
  { date: 'Apr 12, 2026', title: 'Community Garden Planting Day', location: 'Eastside Community Park', type: 'Event' },
  { date: 'Apr 19, 2026', title: 'Nutrition Workshop', location: 'Southport Community Center', type: 'Education' },
  { date: 'May 3, 2026', title: 'Harvest Gala Fundraiser', location: 'Grand Ballroom Downtown', type: 'Fundraiser' },
  { date: 'May 10, 2026', title: 'Mobile Pantry Volunteer Day', location: 'Northern Valley Route', type: 'Volunteer' },
];

export default function GetInvolvedPage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', interest: 'warehouse' });
  const [showThankYou, setShowThankYou] = useState(false);
  const [showVolunteerThankYou, setShowVolunteerThankYou] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get Involved</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Every action counts. Donate, volunteer, or partner with us to fight hunger in our community.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Donate Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                donationType === 'one-time' ? 'bg-harvest-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              One-Time
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                donationType === 'monthly' ? 'bg-harvest-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {givingLevels.map((level) => (
              <button
                key={level.amount}
                onClick={() => setSelectedAmount(level.amount)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedAmount === level.amount
                    ? 'border-harvest-700 bg-harvest-50'
                    : 'border-gray-200 hover:border-harvest-300'
                }`}
              >
                <div className="text-xl font-bold text-harvest-700">${level.amount}</div>
                <div className="text-xs font-semibold text-harvest-600 uppercase">{level.label}</div>
                <div className="text-xs text-gray-500 mt-1">{level.meals} meals</div>
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-4">
            {givingLevels.find((l) => l.amount === selectedAmount)?.desc}
          </p>

          <button
            onClick={() => setShowThankYou(true)}
            className="w-full py-3 bg-harvest-700 text-white font-semibold rounded-lg hover:bg-harvest-800 transition-colors"
          >
            Donate ${selectedAmount} {donationType === 'monthly' ? '/month' : ''}
          </button>

          {showThankYou && (
            <div className="mt-4 p-4 bg-giving-50 rounded-lg border border-giving-200 text-giving-800 text-sm">
              Thank you for your generous {donationType} gift of ${selectedAmount}! A confirmation has been sent to your email.
            </div>
          )}
        </div>

        {/* Volunteer Signup */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowVolunteerThankYou(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={volunteerForm.name}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-harvest-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={volunteerForm.email}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-harvest-500 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
              <select
                value={volunteerForm.interest}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-harvest-500 focus:border-transparent"
              >
                <option value="warehouse">Warehouse Sorting</option>
                <option value="delivery">Delivery Driver</option>
                <option value="pantry">Pantry Assistant</option>
                <option value="garden">Community Garden</option>
                <option value="events">Event Coordinator</option>
                <option value="admin">Administrative Support</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-giving-600 text-white font-semibold rounded-lg hover:bg-giving-700 transition-colors"
            >
              Sign Up to Volunteer
            </button>
          </form>

          {showVolunteerThankYou && (
            <div className="mt-4 p-4 bg-giving-50 rounded-lg border border-giving-200 text-giving-800 text-sm">
              Welcome aboard, {volunteerForm.name}! We&apos;ll send orientation details to {volunteerForm.email}.
            </div>
          )}

          {/* Corporate Partnership */}
          <div className="mt-8 p-6 bg-harvest-50 rounded-lg border border-harvest-200">
            <h3 className="font-semibold text-harvest-800">Corporate Partnerships</h3>
            <p className="text-sm text-harvest-700 mt-1">
              Interested in matching gifts, sponsored drives, or employee volunteer days? We&apos;d love to collaborate.
            </p>
            <a href="/contact" className="inline-block mt-3 text-sm font-medium text-harvest-700 hover:text-harvest-800">
              Inquire about partnerships &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Event Calendar */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <span className="text-xs font-semibold text-harvest-600 uppercase tracking-wide">{event.type}</span>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{event.location}</p>
              <p className="text-sm font-medium text-harvest-700 mt-2">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
