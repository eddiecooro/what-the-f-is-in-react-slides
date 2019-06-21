import React from 'react';
var dotStyle = {
  position: 'absolute',
  background: '#ABB8C3',
  color: 'black',
  font: 'normal 15px sans-serif',
  textAlign: 'center',
  cursor: 'pointer'
};

var containerStyle = {
  position: 'absolute',
  transformOrigin: '0 0',
  left: '50%',
  top: '50%',
  width: '10px',
  height: '10px',
  background: '#eee'
};

var targetSize = 25;

class Dot extends React.Component {
  constructor(props) {
    console.log(props.hoverFirst);
    super();
    this.state = { hover: props.hoverFirst };
  }
  enter() {
    this.setState({
      hover: true
    });
  }
  leave() {
    this.setState({
      hover: false
    });
  }
  render() {
    var props = this.props;
    var s = props.size * 1.3;
    var style = {
      ...dotStyle,
      width: s + 'px',
      height: s + 'px',
      left: props.x + 'px',
      top: props.y + 'px',
      borderRadius: s / 2 + 'px',
      lineHeight: s + 'px',
      background: this.state.hover ? '#ff0' : props.color || dotStyle.background
    };
    return (
      <div
        style={style}
        onMouseEnter={() => this.enter()}
        onMouseLeave={() => this.leave()}>
        {this.state.hover ? '*' + props.text + '*' : props.text}
      </div>
    );
  }
}

export default function SierpinskiTriangle({
  x,
  y,
  s,
  color,
  children,
  hoverFirst
}) {
  if (s <= targetSize) {
    return (
      <Dot
        hoverFirst={hoverFirst}
        color={color}
        x={x - targetSize / 2}
        y={y - targetSize / 2}
        size={targetSize}
        text={children}
      />
    );
    return r;
  }
  var newSize = s / 2;
  var slowDown = true;
  if (slowDown) {
    var e = performance.now() + 0.8;
    while (performance.now() < e) {
      // Artificially long execution time.
    }
  }

  s /= 2;

  return [
    <SierpinskiTriangle
      hoverFirst={hoverFirst}
      color={color}
      x={x}
      y={y - s / 2}
      s={s}>
      {children}
    </SierpinskiTriangle>,
    <SierpinskiTriangle color={color} x={x - s} y={y + s / 2} s={s}>
      {children}
    </SierpinskiTriangle>,
    <SierpinskiTriangle color={color} x={x + s} y={y + s / 2} s={s}>
      {children}
    </SierpinskiTriangle>
  ];
}
SierpinskiTriangle.shouldComponentUpdate = function(oldProps, newProps) {
  var o = oldProps;
  var n = newProps;
  return !(
    o.x === n.x &&
    o.y === n.y &&
    o.s === n.s &&
    o.children === n.children
  );
};
SierpinskiTriangle.defaultProps = {
  x: 0,
  y: 0,
  s: 1000
};
