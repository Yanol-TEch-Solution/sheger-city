import { useRef } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

export default function VideoTour() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePictureInPicture = async () => {
    if (videoRef.current) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      } catch (error) {
        console.error('Picture-in-Picture error:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pt-16">
      {/* Back Button */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-20">
        <BackButton to="/" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white" />
      </div>

      {/* Video Section */}
      <section className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl"
        >
          {/* Header */}
          <div className="mb-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-5xl font-bold text-white mb-3 font-display"
            >
              Sheger City <span className="text-red-600">Virtual Tour</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-sm sm:text-base"
            >
              Experience the beauty and innovation of Sheger City
            </motion.p>
          </div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10"
          >
            {/* Control Buttons */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
              {/* Picture-in-Picture Button */}
              <button
                onClick={handlePictureInPicture}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                title="Picture in Picture"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={2} />
                  <rect x="13" y="12" width="6" height="4" stroke="currentColor" strokeWidth={2} fill="currentColor" fillOpacity="0.3" rx="1" />
                </svg>
              </button>
            </div>

            <video
              ref={videoRef}
              src="/sheger-city.mp4"
              controls
              autoPlay
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">4K Quality</h3>
              <p className="text-white/60 text-xs">Ultra HD Video</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Full Tour</h3>
              <p className="text-white/60 text-xs">Complete City View</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Innovation</h3>
              <p className="text-white/60 text-xs">Smart City Features</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
