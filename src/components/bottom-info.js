import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import { Spring } from 'react-spring'

const data = [
  {
    title: 'Iceberg',
    value: 'Icebergs são pedaços de gelo que são formados em terra e flutuam em um oceano ou lago. Icebergs podem ser de vários tamanhos e formas, desde cubos de gelo até tamanhos de um pequeno país! Devido a seu tamanho, são especialmente perigosos para embarcações.'
  }, {
    title: 'Gelo do Mar',
    value: 'É a água congelada do oceano. Ele forma, cresce e derrete no oceano. Em constraste com ele, geleiras, icebergs e prateleiras de gelo flutuam no oceano mas se originaram em terra firme. Durante a maior parte do ano, o gelo do mar está coberto por neve.'
  }, {
    title: 'Lençol de gelo',
    value: 'É uma massa de gelo glacial que se extende mais de 50.000m². Temos apenas 2 prateleiras de gelo na Terra e elas estão na Groenlândia e na Antartica. Na última era do gelo, elas estavam presente em grande parte do território da América do Norte e Escandinávia.'
  }, {
    title: 'Prateleira de gelo',
    value: 'São pedaços flutuantes permanentes que se conectam a uma massa terrestre.'
  }, {
    title: 'Criosfera',
    value: 'O termo criosfera tem origem do grego e vêm de "krios" que significa "frio". A criosfera é a parte da água congelada do sistema da Terra. São locais da Terra que estão sujeitos a temperaturas negativas por pelo menos boa parte do ano.'
  }
]

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
                <p>
                  A criosfera compreende os lugares da Terra que a água é encontrada em estado sólido (gelo ou neve). E é definida de acordo os seus componentes:
                </p>
                <ul>
                  <li>- Água congelada</li>
                  <li>- Água congelada na superfície terrestre</li>
                  <li>- Lençóis de gelo</li>
                  <li>- Geleiras</li>
                  <li>- Neve e solo congelado (permafrost)</li>
                  <li>- Gelo do mar, gelo do lago e gelo do rio</li>
                </ul>
                <p/>
                {data.map((d, index) => (
                  <div key={index} style={{ paddingBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold' }}>{d.title}</p>
                    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      />
    )
  }
}

export default BottomInfo;
