import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from 'react-responsive';
import ComputerScreen from '../assets/Desktop.png'; 

const WelcomeMessage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      style={{
        position: 'relative', 
        width: '100%', 
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!isMobile ? (
        <div
          style={{
            position: 'absolute',
            top: '45%', 
            left: '20%', 
            textAlign: 'center', 
            width: '50%',
            fontFamily: 'Courier New, monospace',
            fontSize: '1.5em', 
            fontWeight: 'bold', 
            color: '#32CD32',
          }}
        >
          <TypeAnimation
            sequence={[
              'Hello..',
              1000,
              'World!',
              2000,
              'Mundo!',
              2000,
              'Monde!',
              2000
            ]}
            wrapper="span"
            speed={60}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      ) : null}
      <img
        src={ComputerScreen}
        alt="Computer Screen"
        style={{
          width: '100vh',
          height: '65%', 
        }}
      />
    </div>
  );
};

export default WelcomeMessage;