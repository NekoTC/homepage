import { config } from '../config';

/**
 * Hero component with animated gradient background blobs
 * Material You 3 design with smooth animations
 */
export function Hero() {
  return (
    <div className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden mb-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-md-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{
            top: '-10%',
            left: '-10%',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-md-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{
            top: '-5%',
            right: '-10%',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-md-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{
            bottom: '-10%',
            left: '20%',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-roboto font-light text-md-on-surface mb-4 tracking-tight">
          {config.name}
        </h1>
        <p className="text-xl md:text-2xl text-md-on-surface-variant font-light">
          {config.role}
        </p>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
