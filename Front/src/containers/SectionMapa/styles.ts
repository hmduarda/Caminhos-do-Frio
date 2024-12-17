import styled from "styled-components";
import { breakpoints } from "../../style";

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px;
    margin: 240px 60px 120px 60px;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: 1fr;
    }

`