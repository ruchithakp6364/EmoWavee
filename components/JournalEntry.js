import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Sentiment from "sentiment";

const sentiment = new Sentiment();

export default function JournalEntry() {
  const [entry, setEntry] = useState("");
  const [result, setResult] = useState(null);

  const analyzeEntry = () => {
    const analysis = sentiment.analyze(entry);
    setResult(analysis);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>📝 Journal your thoughts</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 }}
        placeholder="Write how you feel..."
        multiline
        value={entry}
        onChangeText={setEntry}
      />
      <Button title="Analyze Mood" onPress={analyzeEntry} />
      {result && (
        <Text style={{ marginTop: 10 }}>
          Sentiment Score: {result.score} ({result.score > 0 ? "Positive" : result.score < 0 ? "Negative" : "Neutral"})
        </Text>
      )}
    </View>
  );
}
