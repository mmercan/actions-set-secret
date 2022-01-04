
const process = require('process')
const cp = require('child_process')
const path = require('path')

// test('throws invalid number', async () => {
//   await expect(wait('foo')).rejects.toThrow('milliseconds not a number');
// });

// test('wait 500 ms', async () => {
//   const start = new Date();
//   await wait(500);
//   const end = new Date();
//   var delta = Math.abs(end - start);
//   expect(delta).toBeGreaterThanOrEqual(500);
// });

// shows how the runner will run a javascript action with env / stdout protocol
test('test  runs', () => {


  process.env['INPUT_repository'] = 'mmercan/actions-set-secret'
  process.env['INPUT_name'] = 'test_secret_name'
  process.env['INPUT_value'] = 'test_secret_value'
  process.env['INPUT_token'] = process.env.REPO_ACCESS_TOKEN

  const ip = path.join(__dirname, 'index.js')
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString()
  console.log(result)
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test environment runs', () => {

  process.env['INPUT_environment'] = 'dev'

  process.env['INPUT_repository'] = 'mmercan/actions-set-secret'
  process.env['INPUT_name'] = 'test_secret_name'
  process.env['INPUT_value'] = 'test_secret_value'
  process.env['INPUT_token'] = process.env.REPO_ACCESS_TOKEN

  const ip = path.join(__dirname, 'index.js')
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString()
  console.log(result)
})
