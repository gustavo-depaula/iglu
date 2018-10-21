import React from 'react';
import { Spring } from 'react-spring'
import CitiesList from './cities-list'

const activatedStyles = {
  width: '100%',
  height: '100vh',
  left: '0',
  top: '0',
  icon: 'fas fa-chevron-left'
}

const defaultStyles = {
  width: '90%',
  height: '4vh', //56px
  left: '20px',
  top: '21px',
  icon: 'fas fa-bars'
}

class SearchBox extends React.Component {
  state = { fullscreen: false, searchTerm: '' }
  activate = () => this.setState({fullscreen: true})
  close = () => this.setState({fullscreen: false})
  handleSearchTerm = (event) => this.setState({searchTerm: event.target.value});


  render () {
    return (
      <Spring
        from={defaultStyles}
        to={this.state.fullscreen ? activatedStyles : defaultStyles}
        children={
          ({toggle, ...styles}) => (
            <div style={{
              ...styles,
              borderRadius: this.state.fullscreen ? '0' : '5px',
              position: 'absolute',
              zIndex: this.state.fullscreen ? 10 : 2,
              backgroundColor: 'white'
            }}>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field has-addons">
                      <p className="control">
                        {this.state.fullscreen &&
                         <a className="button" onClick={this.close} style={{
                           borderColor: 'white',
                           borderRadius: this.state.fullscreen ? '0' : '5px 0 0 5px',
                           height: '56px',
                           fontSize: '21px',
                           fontWeight: '300',
                           boxShadow: '-2px 4px 7px 0px rgba(0, 0, 0, 0.25)',
                         }}>
                           <i className='fas fa-chevron-left'/>
                         </a>
                        }
                        {!this.state.fullscreen &&
                         <a className="button" onClick={this.close} style={{
                           borderColor: 'white',
                           borderRadius: this.state.fullscreen ? '0' : '5px 0 0 5px',
                           height: '56px',
                           fontSize: '21px',
                           fontWeight: '300',
                           boxShadow: '-2px 4px 7px 0px rgba(0, 0, 0, 0.25)',
                         }}>
                           <i className='fas fa-bars'/>
                         </a>
                        }
                      </p>
                      <p className="control is-expanded">
                        <input className="input" type="text" onChange={this.handleSearchTerm} onFocus={this.activate} placeholder="Onde?" style={{
                          borderColor: 'white',
                          borderRadius: this.state.fullscreen ? '0' : '0 5px 5px 0',
                          height: '56px',
                          fontSize: '21px',
                          fontWeight: '300',
                          boxShadow: '2px 4px 7px 0px rgba(0, 0, 0, 0.25)',
                        }} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {this.state.fullscreen && <CitiesList searchTerm={this.state.searchTerm}/>}
            </div>
          )
        }
      />
    )

  }
}

export default SearchBox;
