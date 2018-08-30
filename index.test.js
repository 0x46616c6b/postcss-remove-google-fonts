const postcss = require('postcss')
const plugin = require('./')

it('test remove google font import', () => {
  let input = '@import url(\'https://fonts.googleapis.com/css\');'

  return postcss([plugin()]).process(input).then(result => {
    expect(result.css).toEqual('')
    expect(result.warnings()).toHaveLength(0)
  })
})

it('test keep other rules untouched', () => {
  let input = 'body { margin: 0; }'

  return postcss([plugin()]).process(input).then(result => {
    expect(result.css).toEqual(input)
    expect(result.warnings()).toHaveLength(0)
  })
})
