import React, { Component } from 'react';
import GraveStone from '../GraveStone';

class Graveyard extends Component {
  render() {
    const renderGraveStonesToDom = () => (
      this.props.deadStudents.map((student) => <GraveStone key={student.id} student={student} />)
    );

    return (
      <div className='graveyard'>
        <h2>Graveyard</h2>
        {renderGraveStonesToDom()}
      </div>
    );
  }
}

export default Graveyard;
