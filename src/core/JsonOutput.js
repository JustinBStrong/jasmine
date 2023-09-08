function generateJsonOutput(testResults) {
  const jsonOutput = {};

  for (const test of testResults) {
    jsonOutput[test.description] = {
      errorMessage: test.failedExpectations[0]
        ? test.failedExpectations[0].message
        : '',
      testPassed: test.status === 'passed',
    };
  }

  return jsonOutput;
}

module.exports = generateJsonOutput;
