const Transparency = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Transparency & Public Data</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Access public information, budgets, and performance reports
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Budget */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Budget Summary</h3>
            <p className="text-gray-600 mb-4">View detailed budget allocations and expenditures</p>
            <button className="text-blue-600 font-semibold hover:underline">View Budget →</button>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-2">Ongoing Projects</h3>
            <p className="text-gray-600 mb-4">Track progress of city development projects</p>
            <button className="text-blue-600 font-semibold hover:underline">View Projects →</button>
          </div>

          {/* Performance */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Performance Reports</h3>
            <p className="text-gray-600 mb-4">Review service delivery metrics and achievements</p>
            <button className="text-blue-600 font-semibold hover:underline">View Reports →</button>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Service Statistics</h3>
            <p className="text-gray-600 mb-4">Access data on service usage and satisfaction</p>
            <button className="text-blue-600 font-semibold hover:underline">View Statistics →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
