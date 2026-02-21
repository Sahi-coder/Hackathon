const riskCategories = {
  dataSharing: {
    label: "Data Sharing",
    keywords: [
      "third party",
      "third-party",
      "affiliates",
      "partners",
      "shared with",
      "disclose"
    ],
    weight: 15,
    explanation:
      "The policy allows sharing user data with external parties."
  },

  tracking: {
    label: "Tracking & Analytics",
    keywords: [
      "cookies",
      "analytics",
      "tracking",
      "beacons",
      "log files"
    ],
    weight: 10,
    explanation:
      "User behavior is tracked using cookies or analytics tools."
  },

  autoRenewal: {
    label: "Auto Renewal",
    keywords: [
      "auto-renew",
      "automatically renew",
      "recurring payment",
      "subscription renews"
    ],
    weight: 20,
    explanation:
      "Subscriptions may renew automatically without manual confirmation."
  },

  liability: {
    label: "Limited Liability",
    keywords: [
      "not responsible",
      "no liability",
      "as is",
      "without warranties"
    ],
    weight: 15,
    explanation:
      "The company limits its legal responsibility."
  },

  retention: {
    label: "Data Retention",
    keywords: [
      "retain indefinitely",
      "stored indefinitely",
      "no deletion period"
    ],
    weight: 10,
    explanation:
      "User data may be stored for an undefined or long duration."
  }
};

module.exports = riskCategories;