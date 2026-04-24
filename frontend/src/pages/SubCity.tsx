import { useParams } from 'react-router-dom';

const SubCity = () => {
  const { id } = useParams();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Sub City {id}</h1>
        <p className="text-gray-600 mb-8">
          Welcome to Sub City {id} - serving our local community with dedicated services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <p className="text-gray-600 text-sm">
              Sub City {id} is home to diverse communities and offers comprehensive local services.
            </p>
          </div>

          {/* Offices */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Local Offices</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">📍 Main Office</li>
              <li className="text-gray-600">📍 Service Center</li>
              <li className="text-gray-600">📍 Health Center</li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Available Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">✓ ID Services</li>
              <li className="text-gray-600">✓ Property Registration</li>
              <li className="text-gray-600">✓ Business License</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="text-gray-600">Sub City {id} Administration Office, Addis Ababa</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-gray-600">+251 11 XXX XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCity;
