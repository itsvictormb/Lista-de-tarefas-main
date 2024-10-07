import React, { useEffect, useState, useContext } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import { Task } from "../../components/Task";
import { TaskContext } from "@/context/TaskContext";
import { TaskProps, RootStackParamList } from "@/utils/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Title } from "./styles";
import { Calendar } from "react-native-calendars"; 
import { ButtonAddTask } from "../../components/buttonAddTask"; // Substituição para o novo componente

const TaskSchema = Yup.object().shape({
  taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(20, "No máximo 20 caracteres")
    .required("Tarefa não pode ser vazia"),
  taskSubtitle: Yup.string()
    .max(50, "Descrição não pode exceder 50 caracteres")
});

type Props = NativeStackScreenProps<RootStackParamList>;

const MyCalendar = () => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        markedDates={{
          "2024-10-04": { selected: true, marked: true, selectedColor: "blue" },
          "2024-10-10": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2024-10-15": { disabled: true, disableTouchEvent: true },
        }}
        onDayPress={(day: any) => {
          console.log("selected day", day);
        }}
      />
    </View>
  );
};

export default function Home() {

  const navigation = useNavigation<Props["navigation"]>();
  const { tasks, createTask, setTasks } = useContext(TaskContext);

  function handleTaskChangeStatus(taskToChange: TaskProps) {
    const updatedTasks = tasks.filter(
      (task) => task.title !== taskToChange.title
    );
    const newTask = {
      id: taskToChange.id,
      subtitle: taskToChange.subtitle,
      title: taskToChange.title,
      status: !taskToChange.status,
    };
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
  }

  function handleTaskDelete(taskToDelete: TaskProps) {
    Alert.alert(
      `Deletar a atividade ${taskToDelete.title.toUpperCase()} de sua lista?`,
      `Para adicioná-la novamente, você terá que adicionar manualmente`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter(
              (task) => task.title !== taskToDelete.title
            );
            setTasks(updatedTasks);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  }

  function handlePress(task: TaskProps) {
    navigation.navigate("Details", {
        id: task.id,
        title: task.title,
        subtitle: task.subtitle,
        status: task.status,
    });
}


  return (
    <View style={styles.container}>
      <MyCalendar />
      <View style={styles.content}>
        <Title>Meu Dia</Title>

        <View style={styles.tasks}>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Task
                id={item.id}
                title={item.title}
                status={item.status}
                onCheck={() => handleTaskChangeStatus(item)}
                onRemove={() => handleTaskDelete(item)}
              />
            )}
            ListEmptyComponent={() => (
              <View>
                <Text>Você ainda não cadastrou tarefas!</Text>
                <Text>Adicione uma tarefa para começar.</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.addTask}>
        <Formik
          initialValues={{ taskText: '', taskSubtitle: '' }} // Adicionado 'taskSubtitle'
          validationSchema={TaskSchema}
          onSubmit={(values, { resetForm }) => {
            createTask(values.taskText, values.taskSubtitle);
            resetForm();
          }}
        >
          {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
            <>
              <ButtonAddTask
                value={values.taskText}
                onPress={handleSubmit}
                onChangeText={handleChange('taskText')}
                onBlur={handleBlur('taskText')}
              />
              {touched.taskText && errors.taskText && (
                <Text style={{ color: 'red' }}>{errors.taskText}</Text>
              )}
              <ButtonAddTask
                value={values.taskSubtitle}
                onPress={handleSubmit}
                onChangeText={handleChange('taskSubtitle')}
                onBlur={handleBlur('taskSubtitle')}
              />
              {touched.taskSubtitle && errors.taskSubtitle && (
                <Text style={{ color: 'red' }}>{errors.taskSubtitle}</Text>
              )}
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEEC9",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 65,
    paddingBottom: 32,
  },
  calendarContainer: {
    marginVertical: 20,
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    gap: 16,
    justifyContent: "flex-start",
  },
  tasks: {
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "column",
  },
  addTask: {
    justifyContent: "flex-end",
  },
});




