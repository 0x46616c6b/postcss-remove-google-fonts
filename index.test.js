const postcss = require('postcss')

const plugin = require('./')

async function run (input, output) {
  let result = await postcss([plugin()]).process(input, {from: undefined})
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('should remove google font import', async () => {
  await run('@import url(\'https://fonts.googleapis.com/css\');', '', {})
})

it('should keep other rules untouched', async () => {
  await run('body { margin: 0; }', 'body { margin: 0; }', {})
})
