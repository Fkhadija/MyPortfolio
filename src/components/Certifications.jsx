function Certifications() {
  const certs = [
    {
      title: "Keyword Research Essentials with Semrush",
      issuer: "Semrush",
      issued: "juil. 2025",
      expires: "juil. 2026",
    },
    {
      title: "On-Page SEO Essentials with Semrush",
      issuer: "Semrush",
      issued: "juil. 2025",
      expires: "juil. 2026",
    },
    {
      title: "Ultimate 2024 Marketing Trivia",
      issuer: "Semrush",
      issued: "juil. 2025",
      expires: "juil. 2026",
    },
    {
      title: "Getting Started with Semrush",
      issuer: "Semrush",
      issued: "mai 2025",
      expires: "mai 2026",
    },
    {
      title: "Mastering YouTube Search Trends and SEO Strategies",
      issuer: "Semrush",
      issued: "mai 2025",
      expires: "mai 2026",
    },
    {
      title: "Navigating On-Page and Technical SEO: A Semrush Deep Dive",
      issuer: "Semrush",
      issued: "mai 2025",
      expires: "mai 2026",
    },
    {
      title: "EF SET English Certificate 59/100 (B2 Upper Intermediate)",
      issuer: "EF SET",
      issued: "août 2024",
    },
    {
      title: "Certificat officiel EF SET 41/100 (B1 Intermediate)",
      issuer: "EF SET",
      issued: "mars 2024",
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      issued: "mars 2024",
      skills: "Python (Programming Language)",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Licences et certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
            <p className="text-sm text-gray-600">Émis par {cert.issuer}</p>
            <p className="text-sm text-gray-500">
              {cert.issued &&
                `Émise le ${cert.issued}${
                  cert.expires ? ` · Expire le ${cert.expires}` : ""
                }`}
            </p>
            {cert.skills && (
              <p className="text-sm text-gray-700 mt-2">
                <strong>Compétences :</strong> {cert.skills}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
