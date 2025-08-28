import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import MoodTracker from "./components/MoodTracker";
import BreathingExercise from "./components/BreathingExercise";
import JournalEntry from "./components/JournalEntry";

export default function App() {
  const [mood, setMood] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#f5f5f5" }}>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          🌊 EmoWavee - Your Mental Wellness Buddy
        </Text>
        <MoodTracker mood={mood} setMood={setMood} />
        <BreathingExercise />
        <JournalEntry />
      </ScrollView>
    </SafeAreaView>
  );
}
