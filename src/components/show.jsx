import React from 'react'
import styled from 'styled-components'
import Rating from './rating'

export default class Show extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: null,
      hasImage: false
    }
  }

  componentDidMount () {
    try {
      const image = require(`public/img/${this.props.show.image}`)
      this.setState({
        image: image,
        hasImage: true
      })
    } catch (err) {
      this.setState({
        image: require('public/img/notfound.png'),
        hasImage: false
      })
    }
  }

  componentWillUnmount () {
    console.log('unmounted')
  }

  render () {
    const {show, router} = this.props
    return (
      <ShowContainer
        onClick={() => router.push(`/series-list/${encodeURIComponent(show._id)}`)}
      >
        <ShowDataList>
          <div>
            <StyledImage
              hasImage={this.state.hasImage}
              src={this.state.image}
            />
          </div>
          <ShowInfo>
            <h3 style={{margin: 0}}>{show.title}</h3>
            <li><b>year:</b> {show.year}</li>
            <Rating />
          </ShowInfo>
        </ShowDataList>
      </ShowContainer>
    )
  }
}
            // <li><b>creators:</b> {
            //   show.creators.map((creator, index) =>
            //     `${creator}${index + 1 === show.creators.length ? '' : ', '}`
            //   )
            // }</li>

Show.propTypes = {
  show: React.PropTypes.object,
  router: React.PropTypes.object
}

const ShowContainer = styled.div`
  display: inline-block;
  height: 12%;
  width: 14rem;
  overflow: hidden;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin: 0.2em;
  padding: 1%;
  flex: 0 1 auto;
  cursor: pointer;
  &:hover {
    background: ivory
    border-color: black
  }
`

const ShowDataList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  height: 6em;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
`

const ShowInfo = styled.div`
  height: 90%;
  padding: 1em;
  padding-top: 0;
`

export const StyledImage = styled.img`
  height: ${props => props.hasImage ? 90 : 60}px;
  width: auto;
`
