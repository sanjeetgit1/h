import React from 'react';

const TalkUs = () => {
  return (
    <div className="mt-5"> {/* mt-5 is Tailwind class for margin-top */}
      <h1>Talk to Us</h1>
      {/* <p className=>This is the TalkUs page where users can interact with us!</p> */}
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/12/12/20241212122821-QZ714G0H.json"
        width="100%"
        height="600"
        title="BotPress WebChat"
      ></iframe>
    </div>
  );
};

export default TalkUs;
