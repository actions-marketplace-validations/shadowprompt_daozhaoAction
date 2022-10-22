const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    core.info(`Waiting ${ms} milliseconds ...`);

    core.info('start at=>' + (new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(ms));
    core.info('end at=>' +(new Date()).toTimeString());

    core.setOutput('time', 'abc');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
