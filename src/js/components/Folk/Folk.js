import React, { Component } from 'react';
import Corpus from './Corpus';
import headImg from '../../../img/head.png';


class Folk extends Component {
  render() {
    const { head, neck, corpus, rightArm, leftArm, rightHand, 
      leftHand, rightLeg, leftLeg, rightFoot, leftFoot } = this.props;

    return (
      <div className="Folk">
        <div className="Folk__neck"hidden={!neck} ></div>
        <img className="Folk__head" hidden={!head} src={headImg} />

        <Corpus hidden={!corpus} />
        <div className="Folk__left-hand"hidden={!leftHand} ></div>
        <div className="Folk__right-hand"hidden={!rightHand} ></div>
        <div className="Folk__left-arm"hidden={!leftArm} ></div>
        <div className="Folk__right-arm"hidden={!rightArm} ></div>

        <div className="Folk__left-foot"hidden={!leftFoot} ></div>
        <div className="Folk__right-foot"hidden={!rightFoot} ></div>
        <div className="Folk__left-leg"hidden={!leftLeg} ></div>
        <div className="Folk__right-leg"hidden={!rightLeg} ></div>
      </div>
    );
  }
}

export default Folk;