import {keyframes} from 'styled-components';

export const pulse = {
	one: keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
  }
  `,
	two: keyframes`
    0% {
      transform: scale(1);
    }
    
    50% {
      transform: scale(1.2);
    }
    
    100% {
      transform: scale(1);
    }
    `,
	three: keyframes`
      0% {
        transform: scale(1);
      }
      
      50% {
        transform: scale(1.3);
      }
      
      100% {
        transform: scale(1);
      }
      `,
};
