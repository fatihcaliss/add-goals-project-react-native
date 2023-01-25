import { View, TextInput, Button, StyleSheet, Modal,Image } from "react-native"
import { useState } from "react"
function GoalInput(props) {

    const [enteredGoalText, setenteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setenteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setenteredGoalText("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.images} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color={"#f31282"} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color={"#b180f0"}/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 24,
        padding:16,
        // borderBottomWidth: 1,
        // borderColor: "#cccccc",
        backgroundColor: "#311b6b"
    },
    images:{
        width:100,
        height:100,
        margin:20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        colro:"#120438",
        borderRadius:6,
        width: "100%",
        padding: 16
    },
    buttonContainer: {
        marginTop:16,
        flexDirection: "row",
    },
    button:{
        width:100,
        marginHorizontal:8
    }
});