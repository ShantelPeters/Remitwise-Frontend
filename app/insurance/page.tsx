import Link from 'next/link'
import { ArrowLeft, Plus, Shield, CheckCircle } from 'lucide-react'

export default function Insurance() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Micro-Insurance</h1>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
              disabled
            >
              <Plus className="w-5 h-5" />
              <span>New Policy</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Policies */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PolicyCard
              name="Health Insurance"
              coverageType="health"
              monthlyPremium={20}
              coverageAmount={1000}
              nextPayment="2024-02-01"
              active={true}
            />
            <PolicyCard
              name="Emergency Coverage"
              coverageType="emergency"
              monthlyPremium={15}
              coverageAmount={500}
              nextPayment="2024-02-05"
              active={true}
            />
          </div>
        </div>

        {/* Total Premium */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Total Monthly Premium</h3>
              <p className="text-sm text-gray-600">Auto-paid from remittance allocation</p>
            </div>
            <div className="text-3xl font-bold text-blue-600">$35</div>
          </div>
        </div>

        {/* Add Policy Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Create New Policy</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Policy Name
              </label>
              <input
                type="text"
                placeholder="e.g., Health Insurance, Emergency Coverage"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Coverage Type
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              >
                <option>Health</option>
                <option>Emergency</option>
                <option>Life</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Premium (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="20.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coverage Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="1000.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              disabled
            >
              Create Policy
            </button>
          </form>
        </div>

        {/* Integration Note */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Integration Required:</strong> Connect to insurance smart contract to create policies, 
            pay premiums, and track coverage. Integrate with payment processing for automatic premium payments.
          </p>
        </div>
      </main>
    </div>
  )
}

function PolicyCard({ name, coverageType, monthlyPremium, coverageAmount, nextPayment, active }: { 
  name: string, 
  coverageType: string, 
  monthlyPremium: number, 
  coverageAmount: number, 
  nextPayment: string,
  active: boolean 
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
        {active && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>Active</span>
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Coverage Type</span>
          <span className="font-semibold text-gray-900 capitalize">{coverageType}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Monthly Premium</span>
          <span className="font-semibold text-gray-900">${monthlyPremium}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Coverage Amount</span>
          <span className="font-semibold text-gray-900">${coverageAmount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Next Payment</span>
          <span className="font-semibold text-gray-900">{nextPayment}</span>
        </div>
      </div>

      {active && (
        <button
          className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
          disabled
        >
          Pay Premium Now
        </button>
      )}
    </div>
  )
}

