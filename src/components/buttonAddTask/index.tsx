import {Container, AddTaskText, ButtonAdd} from './styles'
import { Feather } from '@expo/vector-icons';

type Props = {
    onPress: () => void;
    onChangeText: (text: string) => void;
    onBlur: (e: any) => void;
    value: string;
}

export function ButtonAddTask({onPress, onChangeText, onBlur, value}: Props) {
    return (
        <Container>
            <ButtonAdd onPress={onPress}>
                <Feather name="plus-circle" size={20} color="#1D1B20" />
                <AddTaskText>Adicionar</AddTaskText>
            </ButtonAdd>

            <input 
                type="text"
                value={value}
                onChange={(e) => onChangeText(e.target.value)}
                onBlur={onBlur}
                placeholder="Digite uma tarefa"
            />
        </Container>
    )
}
