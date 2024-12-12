import React from 'react';

const AiPage = () => {
  return (
    <div className="w-[400mm] h-[185mm] box-border mx-auto -ml-[25px] bg-gradient-to-br from-[#F0F8FF] to-[#E0FFFF] animate-bgAnimation">
    <h1 className="text-center mb-5 animate-titleAnimation">AI Webpage</h1>
    <div className="w-full h-[calc(100%-40px)] overflow-hidden">
      <iframe
        src="https://gemini-clone-ai.onrender.com/"
        title="AI Webpage"
        className="w-full h-full border-none rounded-lg animate-iframePulse"
      ></iframe>
    </div>
    <style>{`
      @keyframes bgAnimation {
        0% { background-color: #F0F8FF; }
        10% { background-color: #E6E6FA; }
        20% { background-color: #F5FFFA; }
        30% { background-color: #F0FFF0; }
        40% { background-color: #FFF5EE; }
        50% { background-color: #FDF5E6; }
        60% { background-color: #FAF0E6; }
        70% { background-color: #F5F5DC; }
        80% { background-color: #FFFFF0; }
        90% { background-color: #F0FFFF; }
        100% { background-color: #E0FFFF; }
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
