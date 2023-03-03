import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from "@material-tailwind/react/Input";

const colores={
    error:'#bb2929'
}

const LeyendaError=styled.p`
    font-size : 16px;
    margin-bottom : 1;
    color: #FF0000;
    /*display:none*/
    `;
const LeyendaErrorNaranja=styled.p`
    font-size : 16px;
    margin-bottom : 1;
    margin-left : 17px;
    font-family: 'DM Sans', sans-serif;
    color: #ea580c;
    /*display:none*/
    `;
const LeyendaMensaje=styled.p`
    font-size : 16px;
    margin-bottom : 1;
    margin-left : 17px;
    font-family: 'DM Sans', sans-serif;
    color: #1e3a8a;
    /*display:none*/
    `;
const IconoValidacion=styled(FontAwesomeIcon)`
position : absolute;
right : 780px;
bottom : 660px;
z-index : 100;
font-size : 16px;
`;

const MensajeErrorForm=styled.div`
    height:45px;
    line-height:45px;
    background:#F66060;
    padding:0px 15px;
    border-radius:3px;
    grid-column:span 2;
    p{
        margin:0;
    }
`;

const InputCambiosColor = styled(Input)`

error
`;
export {LeyendaError,
    LeyendaMensaje, 
    IconoValidacion, 
    MensajeErrorForm, 
    InputCambiosColor,
    LeyendaErrorNaranja};