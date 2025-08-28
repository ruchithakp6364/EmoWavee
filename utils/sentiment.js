import Sentiment from "sentiment";
const sentiment = new Sentiment();

export const analyzeMood = (text) => {
  return sentiment.analyze(text);
};
