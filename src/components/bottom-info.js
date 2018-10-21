import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import { Spring } from 'react-spring'

class BottomInfo extends Component {
  state = { toggle: true }
  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  render () {
    return (
      <Spring
        from={{h: '10vh', w: '90%'}}
        to={{
          h: this.state.toggle ? '15vh' : '100vh',
          w: this.state.toggle ? '90%' : '100%'
        }}
        toggle={this.toggle} // Additional props will be spread over the child
        children={({h, w, toggle}) => {
          return (
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div
                onClick={toggle}
                style={{
                  borderRadius: '5px 5px 0 0',
                  backgroundColor: 'white',
                  position: 'absolute',
                  width: w,
                  zIndex: toggle ? 5 : 0,
                  height: h,
                  bottom: '-20px',
                  padding: '15px 20px'
                }}
              >
                <h3 className="title is-4" style={{
                  fontWeight: 100
                }}>
                  O que é a Criosfera?
                </h3>
              </div>
            </div>
          )
        }}
      />
    )
  }
}

export default BottomInfo;
