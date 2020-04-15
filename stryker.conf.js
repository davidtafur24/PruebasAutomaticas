/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = function (config){
  config.set({  
  
  files: [],
  mutate: ["e2e_ghost_puppeteer.js"],
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off"});

};
