import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput as NativeTextInput,
  Modal,
} from "react-native";

import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import JobsService from "../../../services/JobsService";
import Compensation from "../../../modals/Compensation";
import ResponsibilitiesModal from "../../../modals/ResponsibilitiesModal";
import LogoModal from "../../../modals/LogoModal";
import LocationModal from "../../../modals/LocationModal";

const AddJob = ({ addJobModalVisible, setAddJobModalVisible }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [whoWeAre, setWhoWeAre] = useState("");
  const [overview, setOverview] = useState("");
  const [compensationType, setCompensationType] = useState([]);

  const [compensationModalVisible, setCompensationModalVisible] = useState(
    false
  );

  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [
    responsibilitiesModalVisible,
    setResponsibilitiesModalVisible,
  ] = useState(false);

  const [logoModalVisible, setLogoModalVisible] = useState(false);

  const goBack = () => {
    setAddJobModalVisible(false);
  };

  const postJob = () => {
    JobsService.addJob(data);
  };

  const setCompensation = (compensationValue) => {
    setCompensationType(compensationValue);
  };
  const data = {
    jobTitle: jobTitle,
    companyName: companyName,
    whoWeAre: whoWeAre,
    overview: overview,
    compensationType: compensationType,
  };

  return (
    <Modal visible={addJobModalVisible} style={styles.container}>
      <LocationModal
        locationModalVisible={locationModalVisible}
        setLocationModalVisible={setLocationModalVisible}
      />
      <ResponsibilitiesModal
        responsibilitiesModalVisible={responsibilitiesModalVisible}
        setResponsibilitiesModalVisible={setResponsibilitiesModalVisible}
      />
      <Compensation
        setCompensation={setCompensation}
        compensationModalVisible={compensationModalVisible}
        setCompensationModalVisible={setCompensationModalVisible}
      />
      <LogoModal
        logoModalVisible={logoModalVisible}
        setLogoModalVisible={setLogoModalVisible}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "15%",
        }}
      >
        <Button color="black" onPress={goBack} uppercase={false}>
          <Text style={{ color: "black" }}>Cancel</Text>
        </Button>
        <Text style={{ fontSize: 30 }}>Add Job</Text>
        <Button onPress={postJob} uppercase={false}>
          <Text style={{ color: "black" }}>Done</Text>
        </Button>
      </View>
      <ScrollView>
        <View style={styles.inputContainer1}>
          <TextInput
            style={{
              height: 60,
              width: "95%",
              backgroundColor: "white",
            }}
            theme={{ colors: { primary: "black" } }}
            selectionColor="black"
            value={jobTitle}
            name="jobTitle"
            onChangeText={(value) => setJobTitle(value)}
            label="Job Title"
            mode="flat"
          />

          <TextInput
            style={{
              height: 60,
              width: "95%",
              backgroundColor: "white",
            }}
            selectionColor="black"
            theme={{ colors: { primary: "black" } }}
            value={companyName}
            name="companyName"
            label="Company Name"
            onChangeText={(value) => setCompanyName(value)}
            mode="flat"
          />
        </View>
        <View style={styles.inputContainer2}>
          <View style={{ alignItems: "flex-start", width: "90%" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.26)" }}>Company Info</Text>
          </View>

          <Button
            onPress={() => setLogoModalVisible(true)}
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Logo</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
          <Button
            onPress={() => setLocationModalVisible(true)}
            style={styles.buttons}
            contentStyle={{}}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Location</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
          <View
            style={{
              width: "95%",
              alignItems: "center",
              borderWidth: 1,
              marginBottom: 60,
              borderRadius: 20,
              borderColor: "rgba(0, 0, 0, 0.26)",
            }}
          >
            <Text style={styles.textAreaLabel}>Who We Are</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={data.whoWeAre}
              name="whoWeAre"
              onChangeText={(value) => setWhoWeAre(value)}
              multiline={true}
              mode="flat"
            />
          </View>
          <View style={{ width: "90%", alignItems: "flex-start" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.26)" }}>Job Info</Text>
          </View>
          <Button
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Experience</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
          <Button
            onPress={() => setCompensationModalVisible(true)}
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Compensation</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>

          <Button
            style={styles.buttons}
            onPress={() => setResponsibilitiesModalVisible(true)}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Responsibility</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
        </View>
        <View style={styles.inputContainer3}>
          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}>Overview</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={overview}
              name="overview"
              onChangeText={(value) => setOverview(value)}
              multiline={true}
              mode="flat"
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { justifyContent: "center" },
  inputContainer1: {
    flex: 1,
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  inputContainer2: { flex: 1, alignItems: "center", marginBottom: 40 },
  inputContainer3: { flex: 1, alignItems: "center" },
  buttons: {
    width: "96%",
    height: 50,
  },
  buttonsInnerContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonTextColor: { color: "black" },
  textAreaContainer: {
    width: "95%",
    alignItems: "center",

    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
  },
  textAreas: {
    width: "90%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
    zIndex: 1,
  },
  textAreaLabel: {
    position: "absolute",
    zIndex: 2,
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
    fontSize: 20,
  },

  button: { width: "60%" },
});
export default AddJob;
