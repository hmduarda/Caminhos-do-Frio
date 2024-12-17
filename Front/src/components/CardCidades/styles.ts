import styled from "styled-components"
import { cores } from "../../style"

export const CardDiv = styled.div`
    border: 1px solid ${cores.principal};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-content{
        padding: 8px;
    }

    img{
        width: 100%;
        height: 220px;
        object-fit: fill;
    }

    
    p{
        margin-bottom: 20px;
    }
`

export const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    .card-grade{
        display: flex;
        text-align: center;
        align-items: center;

        img{
            margin-left: 8px;
        }
    }
`

export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: ${cores.principal};
`
export const Button = styled.button`
    padding: 3px 6px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    color: ${cores.branco};
    background-color: ${cores.principal};
    border: solid ${cores.principal};
`
export const Modal = styled.div`
    z-index: 1;   
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible{
        display: flex;
    }

    `
    export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    `

    export const ModalContent = styled.div`
    z-index: 1;   
    max-width: 1024px;
    padding: 8px;
    background-color: ${cores.branco};
    position: relative;

    header{
        display: flex;
        justify-content: flex-end;

        img{
            z-index: 1;
            cursor: pointer;
        }
    }
`
export const ModalContentContainer = styled.div`
    padding: 0px 16px 16px 16px;
    display: flex;

    img{
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    .text-content{
        margin-left: 22px;

        p{
            margin: 20px 0px;
        }

        button {
            max-width: 225px;
            border: none;
            padding: 6px;
        }

        img{
            width: 80px;
            height: 80px;
            margin-left: 65%;
            object-fit: cover;
        }
    }
`