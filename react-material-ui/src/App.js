import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MTable from './components/MTable';
import CoursesList from './components/CourseList';
import AppBarComponent from './components/AppBarComponent';
import MTab from './components/MTab';
import SelectComponent from './components/SelectComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <AppBarComponent /> */}
        <MTab />
        <SelectComponent />

        {/* <CoursesList /> */}
        <MTable />
      </div>
    )
  }
}

export default App;
