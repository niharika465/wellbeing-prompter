import React, { useState } from 'react';
import './app.scss';
import Modal from './components/modal/modal';
import CustomButton from './components/custon-button/custom-button';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [userChoice, setUserChoice] = useState('');

  const handleClick = () => {
    setIsOpened(!isOpened);
    setUserChoice('');
  };

  return (
    <>
      <CustomButton
        label="Take a Quiz"
        onClick={handleClick}
        styles={{
          base: 'button',
        }}
      />
      <Modal
        isOpen={isOpened}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    </>
  );
};

export default App;
