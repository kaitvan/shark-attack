import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class GraveStone extends Component {
  render() {
    const { student } = this.props;
    return (
        <Card body>{student.firstName} {student.lastName}</Card>
    );
  }
}

export default GraveStone;
