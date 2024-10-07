import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity` 
    width: 350px;
    height: 47px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 16px;
`;

export const TaskText = styled.Text`
    color: #000000;
    font-size: 17px;
    font-weight: 400;
    font-family: Roboto;
    
`;

export const TaskDone = styled.TouchableOpacity`
    width: 24px;
    height: 30px;
    background-color: #0E4865;
    justify-content: center;
    align-items: center;
    margin-right: 16px;

`;

export const TaskDelete = styled.TouchableOpacity`
    width: 24px;
    height: 30px;
    background-color: #8D1717;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
`;
