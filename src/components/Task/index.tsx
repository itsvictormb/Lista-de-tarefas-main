import { Feather } from '@expo/vector-icons';
import { Container, TaskDelete, TaskDone, TaskText } from './styles';
import { TaskProps, RootStackParamList }  from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '@/context/TaskContext';



type Props = NativeStackScreenProps<RootStackParamList>;

export function Task(props: TaskProps) {
    const navigation = useNavigation<Props["navigation"]>();
    const { selectTask } = useContext(TaskContext);
  
    function handlePress() {
      navigation.navigate("Details", props); 
      selectTask(props);
    }
  
    return (
      <Container onPress={() => handlePress()}>
        <TaskDelete onPress={props.onRemove}>
          <Feather name="trash-2" size={20} color="white" />
        </TaskDelete>
        <TaskText>{props.title}</TaskText>
        <TaskDone onPress={props.onCheck} style={props.status ? { backgroundColor: '#0E9577' } : {}}>
          {props.status && <Feather name="check" size={20} color="white" />}
        </TaskDone>
      </Container>
    );
  }
  