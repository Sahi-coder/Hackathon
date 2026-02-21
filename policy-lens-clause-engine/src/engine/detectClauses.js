const riskCategories = require("./riskCategories");
function splitIntoSentences(text) {
  return text
    .replace(/\n+/g, " ")
    .match(/[^.!?]+[.!?]+/g) || [];
}
function detectClauses(policyText) {
  const sentences = splitIntoSentences(policyText.toLowerCase());

  const matchedClauses = {};

  Object.keys(riskCategories).forEach(category => {
    matchedClauses[category] = [];
  });

  sentences.forEach(sentence => {
    Object.entries(riskCategories).forEach(
      ([categoryKey, categoryData]) => {

        const keywordMatched = categoryData.keywords.some(keyword =>
          sentence.includes(keyword)
        );

        if (keywordMatched) {
          matchedClauses[categoryKey].push(sentence.trim());
        }
      }
    );
  });

  // Remove empty categories
  Object.keys(matchedClauses).forEach(category => {
    if (matchedClauses[category].length === 0) {
      delete matchedClauses[category];
    }
  });

  return matchedClauses;
}

module.exports = detectClauses;