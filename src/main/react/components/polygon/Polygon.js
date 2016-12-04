import React, { Component } from 'react';

class PathBuilder{
  constructor(position){
    this.path = 'M '+position.x+', ' + position.y;
  }
  append(text){
    this.path += ' ' + text;
  }
  lineTo(position){
    this.append('L ' + position.x+', '+position.y);
  }
  close(){
    this.append('z');
    return this.path;
  }
}

class Polygon extends Component {

  static defaultProps = {
    sides : 6,
    radius : 50,
    width : 100,
    height : 100
  }

  constructor(props){
    super(props);
    this.state = {percentage: 1};
    if(typeof(this.props.borderWidth) !== 'undefined'){
      this.borderWidth = this.props.borderWidth;
    }
    else{
      this.borderWidth = this.props.radius/2;
    }
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.update(),
    //   1
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  update(){
    let newPercentage = this.state.percentage + 0.001;
    this.setState({
      percentage: newPercentage > 1? 0: newPercentage
    })
  }

  startPoint(){
    return  { x: this.props.width/2, y: this.props.height/2 }
  }

  magnitude(vector){
    return Math.sqrt(vector.x*vector.x+vector.y*vector.y);
  }

  direction(vector){
    let magnitude = this.magnitude(vector);
    return {x: vector.x/magnitude, y: vector.y/magnitude};
  }

  movePointInward(point, toward, amount){
    let difference = {x: toward.x-point.x, y: toward.y-point.y};
    let direction = this.direction(difference);
    return {x: point.x+amount*direction.x, y: point.y+amount*direction.y};
  }

  rotate(angle, point, about){
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    let x = point.x-about.x;
    let y = point.y-about.y;
    return {x: x*cos-y*sin+about.x, y: x*sin+y*cos+about.y};
  }
  preparePoints(percentage){
    if(percentage > 1 || percentage <=0){
        percentage = 1;
    }
    let fullSegments = Math.floor(this.props.sides*percentage);
    let diff = this.props.sides*percentage - fullSegments;
    let position = {x: this.startPoint().x, y: this.startPoint().y-this.props.radius};

    let path = new PathBuilder(position);
    for(let i = 0;i<fullSegments;i++){
        position = this.rotate(Math.PI*2.0/this.props.sides,position,this.startPoint());
        path.lineTo(position);
    }
    if(diff > 0 && diff<1){
        let nextSegment = this.rotate(Math.PI*2.0/this.props.sides,position,this.startPoint());
        let nextInnerShellPosition = this.movePointInward(nextSegment, this.startPoint(), this.borderWidth);
        let lastInnerShellPosition = this.movePointInward(position, this.startPoint(), this.borderWidth);
        let nextPosition = { x: position.x+(nextSegment.x-position.x)*diff, y:position.y+(nextSegment.y-position.y)*diff };
        let nextInnerPosition = {x: lastInnerShellPosition.x+(nextInnerShellPosition.x-lastInnerShellPosition.x)*diff, y: lastInnerShellPosition.y+(nextInnerShellPosition.y-lastInnerShellPosition.y)*diff };
        path.lineTo(nextPosition);
        path.lineTo(nextInnerPosition);
    }
    if(percentage <= 1){
        let innerShellPosition = this.movePointInward(position, this.startPoint(), this.borderWidth);
        path.lineTo(innerShellPosition);
        for(let i = 0;i<fullSegments;i++){
            innerShellPosition = this.rotate(-Math.PI*2.0/this.props.sides,innerShellPosition,this.startPoint());
            path.lineTo(innerShellPosition);
        }
    }
    return path.close();
  }

  render() {
        return (
          <svg className={this.props.class} shapeRendering="crispEdges" width={this.props.width} height={this.props.height} style={this.props.style}>
            <path d={this.preparePoints(this.state.percentage)} />
          </svg>
    )};
}

export default Polygon;
