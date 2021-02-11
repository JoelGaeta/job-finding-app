import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, TextInput, List } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../../components/header/Header";
const AddJob = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const goBack = () => {
    navigation.goBack();
  };
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.container}>
      <Header screenTitle="Add Job" withEditButton />
      <ScrollView contentContainerStyle={{}}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 40,
            marginTop: 20,
          }}
        >
          <TextInput
            style={{
              height: 60,
              width: "95%",
              backgroundColor: "white",
            }}
            mode="flat"
            value={text}
            onChangeText={(text) => setText(text)}
            label="Job Title"
          />

          <TextInput
            style={{
              height: 60,
              width: "95%",
              backgroundColor: "white",
            }}
            label="Company Name"
            mode="flat"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <List.Accordion
            title="Company Logo"
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Company Logo"
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Company Logo"
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Company Logo"
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Company Logo"
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TextInput
            style={{
              height: 100,
              width: "95%",
              backgroundColor: "white",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            multiline={true}
            mode="outlined"
          />

          <TextInput
            style={{
              height: 100,
              width: "95%",
              backgroundColor: "white",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            multiline={true}
            mode="outlined"
          />

          <TextInput
            style={{
              height: 100,
              width: "95%",
              backgroundColor: "white",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            multiline={true}
            mode="outlined"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { justifyContent: "center" },
  inputContainer1: { alignItems: "center" },
  inputContainer2: {},
  inputContainer3: {},
  button: { width: "60%", borderRadius: 20 },
});
export default AddJob;
