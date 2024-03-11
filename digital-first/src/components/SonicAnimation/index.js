import React from 'react';

import Sonic from '../../assets/images/sonic.gif';

const SonicAnimation = () => {
  return (
    <div style={{ height: "200px", width: "200px" }}>


      <img
        src={Sonic}
        alt="Sonic GIF"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}

      />


    </div>
  );
};

export default SonicAnimation;
