import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.1rem;
background: solid;
border:0.5rem solid var(--lightBlue);
border-color: #3b5998;
background-color:#3b5998; 

/*${props => 
props.cart ? "var(--mainYellow)" : "var(--lightBlue)"}*/

color: #f79e3b;
/*${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")}*/
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem;
transition:all 0.9s ease-in-out;
&:hover{
    background: #f79e3b;
    color: var(--mainBlue);
/*${prop => 
    prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"}*/
    
}
&:focus {
    outline: none;
}
`;