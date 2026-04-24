import { useParams } from 'react-router-dom';

const Sector = () => {
  const { name } = useParams();

  const sectorInfo: Record<string, { title: string; icon: string; description: string }> = {
    land: {
      title: 'Land & Property Services',
      icon: '🏗️',
      description: 'Manage land registration, building permits, and property services',
    },
    health: {
      title: 'Health Services',
      icon: '🏥',
      description: 'Access healthcare facilities, emergency services, and health programs',
    },
    transport: {
      title: 'Transport Services',
      icon: '🚗',
      description: 'Driver licenses, vehicle registration, and transport permits',
    },
    education: {
      title: 'Education Services',
      icon: '📚',
      description: 'School information, enrollment, and educational programs',
    },
    finance: {
      title: 'Finance Services',
      icon: '💰',
      description: 'Tax services, payments, and financial administration',
    },
    business: {
      title: 'Business Services',
      icon: '💼',
      description: 'Business registration, licenses, and commercial permits',
    },
  };

  const sector = sectorInfo[name || 'land'] || sectorInfo.land;

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{sector.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{sector.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{sector.description}</p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Apply Online</h3>
            <p className="text-gray-600 text-sm mb-4">
              Submit applications and track status online
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Start Application
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Required Documents</h3>
            <p className="text-gray-600 text-sm mb-4">
              View list of required documents for services
            </p>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 w-full">
              View Documents
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Contact Office</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get in touch with our service team
            </p>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 w-full">
              Contact Us
            </button>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span className="text-gray-700">New online service portal now available</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span className="text-gray-700">Extended service hours on weekdays</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span className="text-gray-700">Reduced processing time for applications</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sector;
