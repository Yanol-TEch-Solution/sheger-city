const News = () => {
  const newsItems = [
    {
      category: 'Announcement',
      title: 'New Digital Service Platform Launched',
      date: 'April 20, 2026',
      excerpt: 'Citizens can now access all government services through our new digital platform.',
    },
    {
      category: 'Update',
      title: 'Road Construction Project Completed',
      date: 'April 18, 2026',
      excerpt: 'Major road infrastructure project in Sub City 5 has been successfully completed.',
    },
    {
      category: 'Event',
      title: 'Public Health Campaign',
      date: 'April 15, 2026',
      excerpt: 'Free health screening available at all health centers this month.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">News & Updates</h1>
        <p className="text-center text-gray-600 mb-12">
          Stay informed about the latest developments in Sheger City
        </p>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-blue-600 uppercase">{item.category}</span>
                  <h2 className="text-2xl font-semibold mt-2 mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <button className="mt-4 text-blue-600 font-semibold text-sm hover:underline">
                    Read full article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
