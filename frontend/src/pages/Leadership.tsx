const Leadership = () => {
  const leaders = [
    {
      name: 'Mayor Name',
      title: 'Mayor of Sheger City',
      image: '👤',
      bio: 'Leading Sheger City towards digital transformation and sustainable development.',
    },
    {
      name: 'Deputy Mayor 1',
      title: 'Deputy Mayor - Administration',
      image: '👤',
      bio: 'Overseeing administrative operations and public services.',
    },
    {
      name: 'Deputy Mayor 2',
      title: 'Deputy Mayor - Development',
      image: '👤',
      bio: 'Managing urban development and infrastructure projects.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">City Leadership</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the dedicated leaders working to serve the citizens of Sheger City
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-8xl">
                {leader.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-blue-600 text-sm mb-4">{leader.title}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
