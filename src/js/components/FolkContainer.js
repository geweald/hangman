import React, { Component } from 'react';
import Folk from './Folk';
import Bar from './Bar';

class FolkContainer extends Component {
  render() {
    const { stage } = this.props;
    const propsToPass = {
      head: stage > 0,
      neck: stage > 1,
      corpus: stage > 2,
      rightArm: stage > 3,
      leftArm: stage > 4,
      rightHand: stage > 5,
      leftHand: stage > 6,
      rightLeg: stage > 7,
      leftLeg: stage > 8,
      rightFoot: stage > 9,
      leftFoot: stage > 10
    }

    return (
      <div className="FolkContainer">
        <Bar />
        <Folk {...propsToPass} />
      </div>
    );
  }
}

export default FolkContainer;