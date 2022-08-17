/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'b180d574e769817806e1332cfcadc3632e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('This code was executed');
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Ai news app</h1>
    </div>
  );
};

export default App;
