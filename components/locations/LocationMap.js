export default function LocationMap({ src, title, height = 200, className = '' }) {
  if (!src) {
    return (
      <div
        className={`bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm ${className}`}
        style={{ height }}
      >
        Map loading...
      </div>
    );
  }

  return (
    <div className={`map-container rounded-xl overflow-hidden border border-gray-200 ${className}`}>
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title || 'Google Map'}
      />
    </div>
  );
}
