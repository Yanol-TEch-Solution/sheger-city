const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Sheger City</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building a modern, transparent, and citizen-centered government
          </p>
        </div>

        {/* City Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold mb-4">City Overview</h2>
            <p className="text-gray-600 mb-4">
              Sheger City is a vibrant metropolitan area committed to providing excellent services 
              to its citizens through digital transformation and transparent governance.
            </p>
            <p className="text-gray-600">
              With a population of millions, we serve diverse communities across 11 sub-cities, 
              offering comprehensive services in land administration, health, transport, education, 
              and business development.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a leading smart city that provides world-class services, promotes sustainable 
              development, and ensures the well-being of all citizens.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To deliver efficient, transparent, and accessible government services through digital 
              innovation while fostering economic growth and social development.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Digital Transformation</h3>
              <p className="text-gray-600 text-sm">
                Successfully digitized 80% of government services
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-semibold mb-2">Green Initiative</h3>
              <p className="text-gray-600 text-sm">
                Planted over 500,000 trees across the city
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold mb-2">Citizen Satisfaction</h3>
              <p className="text-gray-600 text-sm">
                Achieved 85% citizen satisfaction rating
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
