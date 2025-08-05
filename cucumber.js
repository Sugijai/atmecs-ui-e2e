let options = [
    "--require-module ts-node/register",
    "--require cucmber.config.ts",
    "--require tests/stepDefinitions/**/*.ts",
    "--parallel " + (process.env.PARALLEL || 1),
    //"--retry 2",
    "--dry-run",
    "--formate @cucumber/pretty-formatter",
    "--formate json:./reports/cucumber_repot.json",
    "--formate ./allureReportGenerator.js:summary"
].join(" ");

let run_features = ["./tests/features/", options].join(" ");

module.exports = {
    test_runner: run_features
}