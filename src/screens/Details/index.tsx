import { Container, OverlaidText, TopContainer, TopButton, TopLeftText, TopCenterText, FrameContainer, Frame, TextLabel, TitlesInput, ButtonAdd, ButtonAddText } from "./styles";
import {Feather} from "@expo/vector-icons";
import { RootStackParamList } from "@/utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";
import { Alert } from "react-native";




type Props = NativeStackScreenProps<RootStackParamList>; 


export default function TaskCreate() {

    const navigation= useNavigation<Props['navigation']>();

    const {tasks, createTask, setTasks} = useContext(TaskContext);
    const [taskTitleText, setTaskTitleText] = useState("");
    const [taskSubtitleText, setTaskSubtitleText] = useState("");

    const {task} = useContext(TaskContext);

    function handleTaskAdd() {
        if(taskTitleText == "") {
          console.log('vazio');
          return Alert.alert("Erro", "Tarefa está sem descrição.");
        }
    
        if(tasks.some((task)=> task.title === taskTitleText)) {
          console.log('Tarefa já existe!');
          return Alert.alert("Erro", "Tarefa já existe!");
        }

        let subtitle = "";
    
        if (task.subtitle != '') {
            subtitle = task.subtitle!;
        }
        createTask(taskTitleText, subtitle);
        setTaskTitleText('');
        setTaskSubtitleText('');
        navigation.popToTop()
      }

      


    return (
        <Container>
            <TopContainer>
                <TopButton onPress={() => navigation.popToTop()}>
                    <Feather name="chevron-left" size={24} color="#007AFF" />
                    <TopLeftText>Voltar</TopLeftText>
                </TopButton>
                
                
            </TopContainer>
            <TopCenterText>Adicionar</TopCenterText>
                
            <FrameContainer>
                <OverlaidText>ADICIONE A PRÓXIMA ATIVIDADE</OverlaidText>
                <Frame>
                    <TextLabel>Título</TextLabel>
                    <TitlesInput
                    placeholder='Título da sua atividade'
                    placeholderTextColor="rgba(60, 60, 67, 0.3);"
                    keyboardType='default'
                    onChangeText={setTaskTitleText}
                    />
                </Frame>
                <Frame>
                    <TextLabel>Subtítulo</TextLabel>
                    <TitlesInput
                    placeholder='Explicação da atividade'
                    placeholderTextColor="rgba(60, 60, 67, 0.3);"
                    keyboardType='default'
                    onChangeText={setTaskSubtitleText}
                    />
                </Frame>
            </FrameContainer>
            <FrameContainer>
                <OverlaidText>ALARME E LEMBRETE</OverlaidText>
                    <Frame>
                        <TextLabel>Alarme</TextLabel>

                    </Frame>
                    <Frame>
                        <TextLabel>Lembrete</TextLabel>
                    </Frame>
            </FrameContainer>
            <FrameContainer>
                <ButtonAdd onPress={handleTaskAdd}>
                    <ButtonAddText>Adicionar</ButtonAddText>
                </ButtonAdd>
            </FrameContainer>
        </Container>

    );
}