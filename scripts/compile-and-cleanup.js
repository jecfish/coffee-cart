'use strict';
const fs = require('fs');

const MEASURES_DIR_PATH = 'measures/';
const COMPILED_RESULTS_PATH = 'data/sample-1.json';

(() => {
    const measureFile = MEASURES_DIR_PATH + fs.readdirSync(MEASURES_DIR_PATH)[0];
    const result = JSON.parse(fs.readFileSync(measureFile));
    const extractedResult = {
        fetchTime: result.steps[0].lhr.fetchTime,
        performance: result.steps[0].lhr.categories.performance.score
    }
    const compiledResults = JSON.parse(fs.readFileSync(COMPILED_RESULTS_PATH));
    compiledResults.push(extractedResult);
    fs.writeFileSync(COMPILED_RESULTS_PATH, JSON.stringify(compiledResults, null, 2));
    fs.unlinkSync(measureFile);
    console.log('Number of audits in compiled results', compiledResults.length);
})();
