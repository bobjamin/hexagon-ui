import React, { Component } from 'react';
import './Infobox.css';

class Infobox extends Component {
  getIcon(property){
    if(property==='ion-android-watch'){
      return (
        <div>
        <i className={property + ' infoicon fa-stack-1x'}></i>
        <i className='ion-ios-clock-outline infoicon fa-stack-1x'></i>
        </div>
      )
    }
    return (<i className={property + ' infoicon fa-stack-1x'}></i>)
  }
  render() {
        return (
          <div className='infobox'>
            <span className='fa-stack'>
              <i className='ion-ios-circle-filled infoiconback fa-stack-2x'></i>
              {this.getIcon(this.props.icon)}
            </span>
            <h3 className='infotext'>{this.props.infoText}</h3>
            <p className='subtext'>{this.props.subText}</p>
          </div>
    )};
}

export default Infobox;
