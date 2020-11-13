import React from 'react';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';
import studentsData from '../helpers/data/studentsData';

class App extends React.Component {
  state = {
    livingStudents: studentsData.livingStudents(),
    deadStudents: studentsData.dearlyBeloved(),
  }

  attackStudent = () => {
    if (this.state.livingStudents.length) {
      const chosenStudent = this.state.livingStudents[Math.floor(Math.random() * Math.floor(studentsData.livingStudents().length))];
      studentsData.followTheLight(chosenStudent.id);
      this.setState({
        livingStudents: studentsData.livingStudents(),
        deadStudents: studentsData.dearlyBeloved(),
      });
    }
  }

  render() {
    const { livingStudents, deadStudents } = this.state;
    return (
      <div className="App">
        <h1>SHARK ATTACK</h1>
        <SharkTank livingStudents={livingStudents} />
        <button className="attack btn btn-danger" onClick={this.attackStudent}>Shark Attack</button>
        <Graveyard deadStudents={deadStudents}/>
      </div>
    );
  }
}

export default App;
