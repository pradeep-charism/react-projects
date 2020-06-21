import React from "react";
import { render } from "react-dom";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {
        title: "",
      },
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  render() {
    return (
      <form>
        <h2>Course</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.courses.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
