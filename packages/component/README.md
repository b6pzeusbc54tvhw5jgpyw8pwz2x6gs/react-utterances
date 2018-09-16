# react-utterances
react-utterances is the react component for [utterances][utterances] that is a
lightweight comments widget built on GitHub issues. To get started, checkout
https://utteranc.es

Check out below:
- [live demo][livedemo_website]
- [live demo on sandbox][livedemo_sandbox]
- [real world use case][alucio] in my blog

## install

```sh
$ yarn add react-utterances
```

## usage
[utterances][utterances] have 6 types of **Blog Post<->Issue Mapping**
currently. **react-utterances** support all 6 types, check out below examples.

1. `pathname` type:
```js
import React, { Component } from 'react'
import ReactUtterences from 'react-utterances'

const repo = 'github-namespace/project-name'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>What is Lorem Ipsum?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <ReactUtterences repo={repo} type={'pathname'} />
      </div>
    )
  }
}

export default MyComponent
```

2. `url` type. just change `pathname` to `url` in above example:
```diff
-        <ReactUtterences repo={repo} type={'pathname'} />
+        <ReactUtterences repo={repo} type={'url'} />
```

3. // TODO

[utterances]: https://utteranc.es/
[livedemo_website]: https://kwk5x0nyr7.codesandbox.io/my-first-post
[livedemo_sandbox]: https://codesandbox.io/s/kwk5x0nyr7
[alucio]: https://aluc.io/
