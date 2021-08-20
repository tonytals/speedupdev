import styled from 'styled-components';

export const Modal = styled.div`
    position: absolute;
    display: ${props => props.open ? "block" : "none"};
    
    width: 100%;
    height: 100%;
    
    min-height: 400px;
    
    margin-top:0.9%;
    left:0;
    
   
   background-color:#ededed;
   opacity: 0.9;
   transition: all 5s ease;

   z-index: 2;
   
   box-shadow:
      0 12.5px 10px rgba(0, 0, 0, 0.050),
      0 100px 80px rgba(0, 0, 0, 0.09)
   ;

    border-top: 2px solid #ffcd07;
   
   
`;
