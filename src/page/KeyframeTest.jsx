import React from "react";
import '../styles/_test.scss';

import styled, {keyframes} from 'styled-components';

const move = keyframes`
	0%{
    	top: 20px;
        left: 20px;
        background:green;
    }
    
    30%{
    	top: 50px;
        background:orange;
    }
    
    50%{
    	top: 100px;
        opacity: 0;
        left: 200px;
    }
    
    70%{
    	top: 150px;
        background: blue;
    }
    
    100%{
    	top: 20px;
        background: green;
        opacity: 1;
    }
`;

const Box = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 150px;

    background: green;
    position: absolute;
    top: 20px;
    left: 20px;
    opacity: 1;
    animation: ${move} 2s 1s infinite;
`;


const KeyframeTest = () => {

  return (
    <div>
      <Box></Box>
    </div>
  );

}

export default KeyframeTest;