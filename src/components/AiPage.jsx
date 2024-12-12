import React from 'react';

const AiPage = () => {
  return (
    <div
      style={{
        width: '320mm', // A4 width in millimeters
        height: '217mm', // A4 height in millimeters
        boxSizing: 'border-box',
        margin: '50px', // Centering the page horizontally
        marginLeft: "-140px",
        backgroundColor: 'linear-gradient(135deg, #F0F8FF, #E6E6FA, #F5FFFA, #F0FFF0, #FFF5EE, #FDF5E6, #FAF0E6, #F5F5DC, #FFFFF0, #F0FFFF, #E0FFFF, #F0F8FF, #FAEBD7, #FFFAF0, #F5F5F5, #FFF8DC, #F8F8FF, #FDF5E6, #FFFAF0, #F5F5F5, #FAFAD2, #FFFACD, #F8F8FF, #FFFFE0, #FFFAFA)', // Light gradient background
        animation: 'backgroundAnimation 10s infinite', // Background animation
      }}
    >
      <h1
        style={{
          textAlign: 'center', // Center the title text
          marginBottom: '20px',
          animation: 'titleAnimation 3s infinite', // Title animation
        }}
      >
        AI Webpage
      </h1>
      <div
        style={{
          width: '100%',
          height: 'calc(100% - 40px)', // Adjust for title and padding
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://gemini-clone-ai.onrender.com/"
          title="AI Webpage"
          width="100%"
          height="100%"
          style={{
            border: 'none',
            borderRadius: '8px',
            animation: 'iframePulse 5s infinite', // Iframe pulse animation
          }}
        />
      </div>
      <style>{`
        @keyframes backgroundAnimation {
          0% { background: #F0F8FF; }
          10% { background: #E6E6FA; }
          20% { background: #F5FFFA; }
          30% { background: #F0FFF0; }
          40% { background: #FFF5EE; }
          50% { background: #FDF5E6; }
          60% { background: #FAF0E6; }
          70% { background: #F5F5DC; }
          80% { background: #FFFFF0; }
          90% { background: #F0FFFF; }
          100% { background: #E0FFFF; }
        }

        @keyframes titleAnimation {
          0%, 100% {
            transform: scale(1);
            color: #000;
          }
          50% {
            transform: scale(1.2);
            color: #ff5722;
          }
        }

        @keyframes iframePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
        }
      `}</style>
    </div>
  );
};

export default AiPage;
