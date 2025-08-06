let options = [
    "--require-module ts-node/register",
    "--require cucumber.config.ts",
    "--require tests/stepDefinitions/**/*.ts",
    "--parallel " + (process.env.PARALLEL || 1),
    "--retry 0",
    //"--dry-run",
    "--format @cucumber/pretty-formatter",
    "--format json:./reports/cucumber_repot.json",
    "--format ./allureReportGenerator.js:summary"
].join(" ");

let run_features = ["./tests/features/", options].join(" ");

module.exports = {
    test_runner: run_features
}
