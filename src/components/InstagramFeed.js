import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'UTF-8';
    script.src = 'https://cdn.curator.io/published/e3e6df05-ab4c-46c1-a5cd-27f318ec1775.js';
    
    // Append the script element to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Return null since this component doesn't render any UI
  return null;
};

export default InstagramFeed;