import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from "react-native";
import { Card, Title, FAB, Paragraph } from "react-native-paper";
import JobsService from "../../../services/JobsService";
import Header from "../../../components/header/Header";
const JobBoard = ({ navigation }) => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    JobsService.getJobs({
      lng: -84.73555943153565,
      lat: 33.96886433181504,
      distance: 100000,
    }).then((data) => {
      setJobs(data);
    });
  }, []);

  const goToFutureEmployees = () => {
    navigation.navigate("RootEmployer", { message: false });
  };
  const goToAddJobScreen = () => {
    navigation.navigate("AddJob");
  };

  return (
    <View style={styles.container}>
      <Header type="outlined" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={{
            width: "80%",
            justifyContent: "space-evenly",
            marginLeft: 24,
          }}
        >
          <Text style={{ fontSize: 50, marginBottom: 20 }}>Job Board</Text>
          <Text style={{ fontSize: 20, marginBottom: 40 }}>
            You treat me like I was your ocean, you swim in my blood when it's
            warm. My cycles of circular motion, protect you and keep you from
            harm. You live in a world of illusion, where everything's peaches
            and cream. We all face a scarlet conclusion but we spend our time in
            a dream.
          </Text>
        </View>

        {!jobs && <ActivityIndicator size="large" />}

        {jobs &&
          jobs.map((item, i) => (
            <Card
              key={i}
              style={{
                backgroundColor: item.color,
                borderRadius: 15,
                marginLeft: 20,
                marginBottom: 15,
                height: 125,
                width: "42%",

                // backgroundColor: jobs.length - 1 == i ? "black" : item.color,
              }}
              onPress={() => goToFutureEmployees(i)}
            >
              <Card.Content
                style={{ height: "100%", justifyContent: "space-around" }}
              >
                <Text
                  style={{
                    fontSize: 18,
                  }}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  {item.companyName.toUpperCase()}
                </Text>
              </Card.Content>
            </Card>
          ))}

        <View
          style={{
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FAB style={styles.fab} icon="plus" onPress={goToAddJobScreen} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    alignItems: "center",
  },
  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  fab: {
    backgroundColor: "black",
  },

  headerButton: { position: "relative", top: 30 },
});

export default JobBoard;
