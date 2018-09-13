/* globals document */

import React, { Component } from 'react'
import hash from 'object-hash'
import Paper from '@material-ui/core/Paper'
import map from 'lodash/map'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import GithubCorner from 'react-github-corner'

import './App.css'
import ReactUtterences, { identifierTypes } from '../../component'

const GITHUB_NAMESPACE = 'b6pzeusbc54tvhw5jgpyw8pwz2x6gs'
const GITHUB_COMPONENT_REPO = 'react-utterances'
const GITHUB_COMPONENT_REPO_URL = `https://github.com/${GITHUB_NAMESPACE}/${GITHUB_COMPONENT_REPO}`
const GITHUB_DEMO_COMMENT_NAMESPACE_REPO = 'b6pzeusbc54tvhw5jgpyw8pwz2x6gs/aluc-io-comment'

const root = {
  display: 'flex',
  margin: 20,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'pathname',
      issueNumber: -1,
      specificTerm: '',
    }
  }

  handleClick = e => {
    if( this.state.type === e.target.value ) return
    this.setState({ type: e.target.value })
  }

  handleChangeSpecificTerm = e => {
    if( this.state.specificTerm === e.target.value ) return
    this.setState({ specificTerm: e.target.value })
  }
  handleChangeIssueNumber = e => {
    const issueNumber = Number(e.target.value)
    if( this.state.issueNumber === issueNumber ) return
    this.setState({ issueNumber })
  }

  componentDidMount() {
    const scriptEl = document.createElement('script')
    scriptEl.src = 'https://buttons.github.io/buttons.js'
    scriptEl.async = true
    scriptEl.defer = true
    document.head.appendChild(scriptEl)
  }

  render() {
    const hashKey = hash( this.state )
    const { issueNumber, type, specificTerm } = this.state
    const TypeElList = map(identifierTypes, (info, key) => {
      const labelStyle = {}
      if( key === type ) {
        labelStyle.color = '#886ce4'
      }
      return (
        <FormControlLabel
          key={key}
          value={key}
          style={{ height: 50 }}
          label={
            <React.Fragment>
              <span style={labelStyle}>{info.summary}</span>
              { key === 'issue-number' &&
                <TextField
                  style={{ height: 60, marginLeft: 10 }}
                  label="issue-number"
                  id="margin-dense"
                  value={issueNumber > 0 ? issueNumber : ''}
                  margin="dense"
                  onChange={this.handleChangeIssueNumber}
                  disabled={type !== 'issue-number'}
                />
              }
              { key === 'issue-term' &&
                <TextField
                  style={{ height: 50, marginLeft: 10 }}
                  label="issue-term"
                  id="margin-dense"
                  value={specificTerm}
                  margin="dense"
                  onChange={this.handleChangeSpecificTerm}
                  disabled={type !== 'issue-term'}
                />
              }
            </React.Fragment>
          }
          control={ <Radio /> }
        />
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://avatars3.githubusercontent.com/u/27908738?v=3&s=88'} className="App-logo" alt="logo" />
          <h1 className="App-title">react-utterances</h1>
          <p className="App-intro">
            <a href='https://www.npmjs.com/package/react-utterances'>react-utterances</a> is the react component for <a href='https://utteranc.es'>utterances</a> that is a lightweight comments widget built on GitHub issues. To get started, checkout <a href='https://utteranc.es'>https://utteranc.es</a>
          </p>
          <div className='Status-Buttons'>
            <a className="github-button" href={GITHUB_COMPONENT_REPO_URL} data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star on GitHub">Star</a>
            <a className="github-button" href={`https://github.com/${GITHUB_NAMESPACE}`} data-size="large" aria-label="Follow @alfreduc on GitHub">Follow @alfreduc</a>
            <a className='blogLink' href='https://aluc.io/'>My blog real world demo</a>
          </div>
        </header>
        <div style={root}>
          <Paper>
            <FormControl component="fieldset" style={{ margin: 10 }}>
              <FormLabel component="legend">Select Type</FormLabel>
              <RadioGroup
                aria-label="type"
                name="type"
                value={this.state.type}
                onChange={this.handleClick}
              >
                {TypeElList}
              </RadioGroup>
            </FormControl>
          </Paper>
        </div>
        <div style={{ margin: 20 }}>
          <ReactUtterences
            key={hashKey}
            hashKey={hashKey}
            repo={GITHUB_DEMO_COMMENT_NAMESPACE_REPO}
            type={this.state.type}
            specificTerm={this.state.specificTerm}
            issueNumber={this.state.issueNumber}
            debug={true}
          />
        </div>
        <GithubCorner
          href={GITHUB_COMPONENT_REPO_URL}
          bannerColor='#886ce4'
        />
      </div>
    )
  }
}

export default App

