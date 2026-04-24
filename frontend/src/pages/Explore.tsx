const Explore = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Sheger City</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the vibrant culture, rich heritage, and endless opportunities
          </p>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tourist Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Attraction {i}</h3>
                  <p className="text-sm text-gray-600">Discover the beauty and history of this landmark</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Cultural Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Traditional Arts</h3>
              <p className="text-gray-600">Experience the rich artistic traditions of our community</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Historical Sites</h3>
              <p className="text-gray-600">Visit landmarks that tell the story of our city</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Investment Opportunities</h2>
          <div className="bg-white rounded-lg shadow p-8">
            <p className="text-gray-600 mb-6">
              Sheger City offers numerous opportunities for investors in various sectors including technology, 
              real estate, manufacturing, and services.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Learn More About Investing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
