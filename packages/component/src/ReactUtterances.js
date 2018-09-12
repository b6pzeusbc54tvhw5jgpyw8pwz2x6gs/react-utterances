import React, { Component } from 'react'
import PropTypes from 'prop-types'

const validTypeList = [
  'pathname',
  'url',
  'title',
  'og:title',
  'issue-number',
  'issue-term',
]

const getAttrName = type => {
  if( validTypeList.indexOf( type ) < 0 ) {
    console.warn('Wrong type: ' + type )
    return
  }

  return type === 'issue-number' ? 'issue-number' : 'issue-term'
}

const getAttrValue = (type, specificTerm, issueNumber) => {
  if( validTypeList.indexOf( type ) < 0 ) {
    console.warn('Wrong type: ' + type )
    return
  }

  if( type === 'pathname') {
    return 'pathname'
  } else if( type === 'url') {
    return 'url'
  } else if( type === 'title') {
    return 'title'
  } else if( type === 'og:title') {
    return 'og:title'
  } else if( type === 'issue-term' ) {
    return specificTerm
  } else if( type === 'issue-number') {
    return issueNumber
  }
}

class ReactUtterences extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { pending: true }
  }

  componentDidMount() {
    const { repo, type, specificTerm, issueNumber } = this.props
    const attrName = getAttrName(type)
    const value = getAttrValue(type, specificTerm, issueNumber)
    if( type === 'issue-term' && ! value ) {
      console.warn(`When type is '${type}', 'specificTerm' prop must be provided`)
      return
    } else if( type === 'issue-number' && (isNaN(value) || value < 1)) {
      console.warn(`When type is '${type}', valid 'issueNumber' prop must be provided`)
      return
    }
    const scriptEl = document.createElement('script')
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.async = true
    scriptEl.setAttribute('repo', repo)
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute(attrName, value)
    scriptEl.onload = () => this.setState({ pending: false })
    this.myRef.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div className='react-utterences' ref={this.myRef}>
        { this.props.debug && 
          <pre style={{ background: '#cccccc', padding: 10 }}>{`
this.props: ${JSON.stringify(this.props,null,2)}
location.pathname: "${window.location.pathname}"
location.href: "${window.location.href}"
          `.trim()}</pre>
        }
        { this.props.debug && <div>👇👇If the settings are valid, the comment widget appear below👇👇</div> }
        { this.state.pending && <div>Loading script...</div> }
      </div>
    )
  }
}

export const identifierTypes = {
  'pathname': {
    attrValue: '',
    summary: 'Issue title contains page pathname',
  },
  'url': {
    attrValue: 'url',
    summary: 'Issue title contains page URL',
  },
  'title': {
    attrValue: 'title',
    summary: 'Issue title contains page title',
  },
  'og:title': {
    attrValue: 'og:title',
    summary: 'Issue title contains page og:title',
  },
  'issue-number': {
    attrValue: -1,
    summary: 'Specific issue number',
  },
  'issue-term': {
    attrValue: '',
    summary: 'Issue title contains specific term',
  },
}

ReactUtterences.propTypes = {
  type: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  specificTerm: PropTypes.string,
  issueNumber: PropTypes.number,
  hashKey: PropTypes.string,
  debug: PropTypes.bool,
}

export default ReactUtterences

