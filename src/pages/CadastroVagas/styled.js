import styled from "styled-components";




export const Body = styled.div.attrs (props => ({
  

})) `
  width: 100vw;
  height: 100vh;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  
`; 


export const Container = styled.div`
  width: 100%;
  max-width: 270px;
  
  border: 2px solid black;
  padding: 10px 3%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  
  

`; 


export const Div = styled.div `
  padding: 5px;
  text-align: left;
  
`;

export const Input = styled.input.attrs (props => ({
    
    
    
}))`

  border: 2px solid;
  width: 300px;
  height: 35px;
  border-radius: 5px;
  

`;

export const Textarea = styled.textarea.attrs (props => ({


}))`

  border: 2px solid;
  width: 300px;
  height: 95px;
  border-radius: 5px;

`;

export const FormH1 = styled.h1 `
  margin-bottom: 10px;
  color: black;
  font-size: 30px;
  font-weight: 400px;
  text-align: center;

`;

export const Button = styled.button `
  background: #532a55;
  margin: 0.5rem 5px;
  border: 2px solid;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 295px;
  height: 40px;
  text-align: center;

  &:hover{
    transition: all 0.3s ease-in-out;
    background: #3a2b4d;
  } 

`;
