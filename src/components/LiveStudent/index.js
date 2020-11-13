import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class LiveStudent extends Component {
  state = {
    isDead: this.props.student.isDead,
  }

  render() {
    const { student } = this.props;
    return (
    <Card body>{student.firstName} {student.lastName}</Card>
    );
  }
}

export default LiveStudent;
