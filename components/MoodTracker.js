import React from "react";
import { View, Text, Button } from "react-native";

const moods = ["😊 Happy", "😢 Sad", "😡 Angry", "😴 Tired"];

export default function MoodTracker({ mood, setMood }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>How are you feeling today?</Text>
      {moods.map((m, i) => (
        <Button key={i} title={m} onPress={() => setMood(m)} />
      ))}
      {mood ? <Text style={{ marginTop: 10 }}>You feel: {mood}</Text> : null}
    </View>
  );
}
