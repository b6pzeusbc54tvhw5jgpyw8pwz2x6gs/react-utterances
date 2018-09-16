const Combinatorics = require('js-combinatorics')

const scopeList = ['root','component','demo']
const scopeEnumList = []

Combinatorics.power(scopeList).forEach( subset => {
  if( subset.length < 1 ) return

  const isAll = subset.length === scopeList.length
  scopeEnumList.push( isAll ? 'all' : subset.join(','))
})

module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', scopeEnumList],
    'scope-empty': [2, 'never'],
    'subject-case': [2, 'never', ['sentence-case','start-case','pascal-case','upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['build','chore','ci','docs','feat','fix','perf','refactor','revert','style','test','dx']],
  }
}

