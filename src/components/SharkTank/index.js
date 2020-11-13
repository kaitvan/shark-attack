import React, { Component } from 'react';
import LiveStudent from '../LiveStudent';

class SharkTank extends Component {
  render() {
    const renderStudentToDom = () => (
      this.props.livingStudents.map((student) => <LiveStudent key={student.id} student={student} />)
    );

    return (
      <div className='tank'>
        <h2>Shark Tank</h2>
        {renderStudentToDom()}
      </div>
    );
  }
}

export default SharkTank;
