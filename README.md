# react-utterances
react-utterances is the react component for [utterances][utterances] that is a
lightweight comments widget built on GitHub issues. To get started, checkout
https://utteranc.es

Check out below:
- [live demo][livedemo]
- [live demo on sandbox][livedemo_sandbox]
- [realworld blog usage][alucio]

## install

```sh
$ yarn add react-utterances
```

## usage

```
import React, { Component } from 'react'
import ReactUtterences, { identifierTypes } 'react-utterances'

const repo = 'github-namespace/project-name'
class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>What is Lorem Ipsum?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <ReactUtterences repo={repo} type={'url'} />
      </div>
    )
  }
}
```

[utterances]: https://utteranc.es/
[livedemo]: https://kwk5x0nyr7.codesandbox.io/
[livedemo_sandbox]: https://codesandbox.io/s/kwk5x0nyr7
[alucio]: https://aluc.io/
