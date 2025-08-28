import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function BreathingExercise() {
  const [started, setStarted] = useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>🧘 Breathing Exercise</Text>
      <Button title={started ? "Relax..." : "Start Breathing"} onPress={() => setStarted(!started)} />
      {started && <Text style={{ marginTop: 10 }}>Inhale... Exhale... Repeat slowly 🌬</Text>}
    </View>
  );
}
