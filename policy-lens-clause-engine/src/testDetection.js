const detectClauses = require("./engine/detectClauses");

const samplePolicy = `
We use cookies and analytics tools to improve our services.
Your information may be shared with third parties and affiliates.
Subscriptions automatically renew unless cancelled.
We are not responsible for any damages.
We may retain data indefinitely.
`;

const result = detectClauses(samplePolicy);

console.log(JSON.stringify(result, null, 2));