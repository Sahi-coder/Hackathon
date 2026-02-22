function analyzePolicy(text) {
  let score = 100;
  let categories = {};
  let matchedClauses = [];

    const lowerText = text.toLowerCase();

  // Data sharing risk
  if (lowerText.includes("third party")) {
    score -= 15;
    categories.dataSharing = "High";
    matchedClauses.push("Third party data sharing detected");
  }

  // Auto renewal risk
  if (lowerText.includes("auto renew") || lowerText.includes("automatic renewal")) {
    score -= 10;
    categories.autoRenewal = "Medium";
    matchedClauses.push("Auto renewal clause detected");
  }

  // Selling data risk
  if (lowerText.includes("sell your data")) {
    score -= 20;
    categories.dataSelling = "High";
    matchedClauses.push("Selling user data detected");
  }

  let riskLevel = "Low";
  if (score < 70) riskLevel = "High";
  else if (score < 85) riskLevel = "Medium";

  return {
    overallScore: score,
    riskLevel,
    categories,
    matchedClauses
  };
}

module.exports = analyzePolicy;