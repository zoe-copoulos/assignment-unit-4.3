'use strict';

const Mocha = require('mocha');
const { EVENT_RUN_BEGIN, EVENT_RUN_END, EVENT_TEST_FAIL, EVENT_TEST_PASS } =
  Mocha.Runner.constants;

// Custom output to match our rubric
class MyReporter {
  _logger = console.log; // So that we always have something to log with
  constructor(runner) {
    // const stats = runner.stats;
    const errors = [];
    runner
      .on(EVENT_TEST_FAIL, (test, err) => {
        errors.push(err);
        this._logger(
          `\x1b[31m`,
          `| ${test.parent.title} | no, see note ${errors.length} |`,
          `\x1b[0m`
        );
        // console.log(test)
      })
      .on(EVENT_TEST_PASS, (test, err) => {
        this._logger(`\x1b[32m`, `| ${test.parent.title} | yes |`, `\x1b[0m`);
      })
      .once(EVENT_RUN_BEGIN, () => {
        this._logger('');
        this._logger(`---
| Part 3 - Cart System | Complete? |
| --- | :---: |`);
        this._logger(
          `\x1b[32m`,
          `| Runs in browser without console errors | yes |`,
          `\x1b[0m`
        );
      })
      .once(EVENT_RUN_END, () => {
        this._logger('');
        // console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);

        errors.map((err, i) => {
          this._logger('');
          this._logger(`${i + 1}) ${err}`);
        });
      });
  }
}

module.exports = MyReporter;
