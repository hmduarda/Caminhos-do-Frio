import { useState } from "react"
import { TextoCidade } from "../../style/index.ts"
import * as S from "./styles.ts"
import { Button } from "./styles.ts"
import close from '../../assets/close 1.png'
import qrcode from '../../assets/download.png'
import { useNavigate } from "react-router-dom"

type Props = {
    nomeCidade: string
    fotoCidade: string
    descricaoCidade: string
}

const CardCidade = ({nomeCidade,fotoCidade, descricaoCidade}: Props) => {
    const [ModalActive, setModalActive] = useState(false);
    const navigate = useNavigate();

    const rotaCidade = () => {
        navigate(`/cidades/${nomeCidade}`)
    }

    return (
        <>
        <S.CardDiv>
            <div>
                <img src={fotoCidade}/>
                <div className='card-content'>
                    <S.CardTitle>
                    <S.SubTitle>{nomeCidade}</S.SubTitle>
                    </S.CardTitle>
                    <TextoCidade className='card-text'>{descricaoCidade}</TextoCidade>
                </div>
            </div>
            <div className='card-content'>
                <Button onClick={() => (setModalActive(true))}>Saiba Mais</Button>
            </div>
        </S.CardDiv>
        <S.Modal className={ ModalActive ? 'visible' : ''}>
            <S.ModalContent >
                <header>
                    <img onClick={() => setModalActive(false)} src={close} alt="Ícone de fechar" />
                </header>
                <S.ModalContentContainer>
                    <img src={fotoCidade} alt="" />
                    <div className="text-content">
                        <S.SubTitle>{nomeCidade}</S.SubTitle>
                        <TextoCidade>{descricaoCidade}</TextoCidade>
                        <Button onClick={rotaCidade}>Visitar site</Button>
                        <img src={qrcode} alt="" />
                    </div>
                </S.ModalContentContainer>
            </S.ModalContent>
            <S.Overlay onClick={() => setModalActive(false)}></S.Overlay>
        </S.Modal>
        </>
)
}

export default CardCidade;