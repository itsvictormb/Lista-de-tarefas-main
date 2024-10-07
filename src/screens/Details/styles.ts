import styled from 'styled-components/native/';

export const Container = styled.View`
    flex: 1;
    background-color: #FCEEC9;
    padding: 16px;
    padding-top: 64px;
   
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-auto-flow: 0px;

`;

export const TopButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    
`;

export const TopLeftText = styled.Text`
    color: #007AFF;
    font-size: 16px;

    
`;

export const TopCenterText = styled.Text`
    color: #000;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    justify-content: center;

    
`;

export const OverlaidText = styled.Text`
    margin-left: 16px;
    color: #3C3C43;
    opacity: 0.6;
    font-size: 13px;
    
`;

export const FrameContainer = styled.View`
    margin-top: 40px;
    flex-direction: column;
    gap: 1px;
`;

export const Frame = styled.View`
    flex-direction: row;
    width: 361px;
    height: 44px;
    background-color: #FFF;
    border-radius: 8px;
    align-items: center;
   

`;

export const TextLabel = styled.Text`
    color: #000;
    font-size: 17px;
    font-weight: 500;
    margin-left: 16px;

`;

export const TitlesInput = styled.TextInput`
    flex: 1;
    padding-left: 16px;
    font-size: 17px;
    border-left: 1px solid #007AFF;
`;

export const ButtonAdd = styled.TouchableOpacity`
    width: 361px;
    height: 44px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    
`;

export const ButtonAddText = styled.Text`
    color: #007AFF;
    font-size: 17px;
    font-weight: 400;
`;