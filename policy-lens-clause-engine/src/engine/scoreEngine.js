const riskCategories = require("./riskCategories");
const detectClauses = require("./detectClauses");

/**
 * Calculates category-wise risk and overall score
 */
function calculateScore(detectedClauses) {
  let totalDeduction = 0;
  const categoryResults = {};

  // Max possible weight (used for risk % calculation)
  const MAX_WEIGHT = 20;

  Object.keys(detectedClauses).forEach(categoryKey => {
    const category = riskCategories[categoryKey];

    totalDeduction += category.weight;

    // Calculate risk percentage
    const riskPercentage = Math.round(
      (category.weight / MAX_WEIGHT) * 100
    );

    // Determine risk level
    let riskLevel = "Low";
    if (riskPercentage >= 70) riskLevel = "High";
    else if (riskPercentage >= 40) riskLevel = "Moderate";

    categoryResults[categoryKey] = {
      label: category.label,
      deduction: category.weight,
      riskPercentage,
      riskLevel,
      matchedClauses: detectedClauses[categoryKey],
      explanation: category.explanation
    };
  });

  let overallScore = 100 - totalDeduction;
  overallScore = Math.max(0, overallScore);

  return { overallScore, categoryResults };
}

/**
 * Main function to analyze a policy text
 */
function analyzePolicy(policyText) {
  const detectedClauses = detectClauses(policyText);
  const { overallScore, categoryResults } =
    calculateScore(detectedClauses);

  // Generate alerts for high-risk categories
  const alerts = [];

  Object.values(categoryResults).forEach(category => {
    if (category.riskPercentage >= 70) {
      alerts.push(
        `Critical Risk: ${category.label} detected`
      );
    }
  });

  return {
    overallScore,
    categories: categoryResults,
    detectedCategories: Object.keys(categoryResults),
    alerts
  };
}

module.exports = analyzePolicy;