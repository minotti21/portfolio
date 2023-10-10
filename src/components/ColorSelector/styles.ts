import rgbUtils from "@/utils/rgbUtils";
import { styled } from "styled-components";

export const ColorSelectorContainer = styled.div`
    position: relative;
`

export const StyledColorSelectorIcon = styled.div`
    width: 28px;
    height: 28px;
    transition: 0.2s;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.defaultColor};
`

export const StyledBorderColorSelectorIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background: ${({ theme }) => theme.defaultColor};
    cursor: pointer;
`

export const StyledColorSelector = styled.div`
    display: flex;
    position: absolute;
    margin-top: 0.6em;
    right: 0;
    padding: 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.backgroundColor === 'rgb(248, 250, 252)' ? rgbUtils.darkenRGBColor(theme.backgroundColor, 10) : rgbUtils.lightenRGBColor(theme.backgroundColor, 15)};
    -webkit-box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.8);
    -moz-box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.8);
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.8);

`

export const StyledColorIcon = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
    margin: 0 4px;
`