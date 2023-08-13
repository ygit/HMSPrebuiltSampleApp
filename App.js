import React, { useState } from "react";
import { StatusBar, StyleSheet, Button, View } from "react-native";
import { HMSPrebuilt } from "@100mslive/react-native-room-kit";

const App = () => {
  const [showHMSPrebuilt, setShowHMSPrebuilt] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {showHMSPrebuilt ? (
        <HMSPrebuilt
          roomCode="abc-lmno-xyz"
          options={{ userName: "John Appleseed" }}
        />
      ) : (
        <View style={styles.joinContainer}>
          <Button title="Start" onPress={() => setShowHMSPrebuilt(true)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  joinContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
