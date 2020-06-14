import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MTable from './components/MTable';
import CheckBoxComponent from './components/CheckBoxComponent';
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
        <>
          <CheckBoxComponent />
        </>
      </div>
    )
  }
}

export default App;
