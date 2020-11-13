import React, { Component } from 'react';
import studentsData from '../../helpers/data/studentsData';
import LiveStudent from '../LiveStudent';

class SharkTank extends Component {
  state = {
    students: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({
      students: studentsData.livingStudents(),
    });
  }

  render() {
    const { students } = this.state;
    const renderStudentToDom = () => (
      students.map((student) => <LiveStudent key={student.id} student={student} />)
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
