import {
  StyleSheet,
  // Text,
  View,
  // Button,
  // TextInput,
  // ScrollView,
  FlatList,
  Button
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  // const [enteredGoalText, setenteredGoalText] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  // function goalInputHandler(enteredText) {
  //   setenteredGoalText(enteredText)
  // }

  function startAddGoalHandler() {
    setModalIsVisible(true)

  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    // setcourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setcourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    // console.log("DELETE")
    setcourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler} />
        {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {courseGoals.map((goal) =>
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )}
        </ScrollView> */}
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }} />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginEnd: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }

});
