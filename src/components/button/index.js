import { ButtonContainer } from "./styled"



export const ButtonCont = ({text,onClick,primaryCond,flexGrown}) => {

    return (
        <ButtonContainer flexGrow = {flexGrown} primary={primaryCond} onClick={onClick}>
            {text}
        </ButtonContainer>
    )
}