const { CucumberJSAllureFormatter } = require("allure-cucumberjs")
const { AllureRuntime } = require("allure-cucumberjs")
const path = require("path");

class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({
        resultsDir: path.resolve("./reports/allure-results"),
      }),
      {},
    );
  }
}

module.exports = Reporter;
