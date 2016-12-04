import React, { Component } from 'react';
import Polygon from '../polygon/Polygon';
import './Dashboard.css'

class Dashboard extends Component {

  getBackdrop(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    let polygons = [];
    for(var i = 0;i<100;i++){
      let x = Math.random() * w;
      let y = Math.random() * h/2;
      let s = Math.random() * 50+25
      polygons.push(<Polygon key={i} class='backdrophex' width={s*2} height={s*2} borderWidth={s} radius={s} style={{zIndex:-10000, position: 'fixed', left: x, top: y, fill: 'rgba(52, 152, 219, 0.21)'}} />)
    }
    return (
      <div>
        {polygons}
      </div>
    );
  }

  render() {
        return (
          <div>
            {this.getBackdrop()}
            <div className='container startinfobox'>
              <div className='helptext' >
                <h2>No build plans?, no problem.</h2>
                <h3>Just create one, it&#39;s easy</h3>
                <h4>Click the hexagon</h4>
              </div>
              <div>
              <div className='getstarted'>
                <i className='ion-plus gs-one' />
                <Polygon class='hexagon' borderWidth={20} />
              </div>
              </div>
            </div>
          </div>
    )};
}

export default Dashboard;
