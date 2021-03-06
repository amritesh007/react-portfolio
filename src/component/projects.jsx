import React from "react";
import PropTypes from "prop-types";

export default class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light mt-5">
          <div className=" project-container container bg-light pb-5">
            <h1
              id="projects"
              className={"text-center " + this.props.fadeInRight}
            >
              Projects
            </h1>
            <div className="row my-5">
              <div
                className={
                  "testbg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>RCCMS</h2>
                  </div>
                  <div>
                    <button id="vmarine-button" className="project-button"
                    onClick={() =>
                      window.open(
                        "http://vaad.up.nic.in/AppLanding/index.html",

                        "resizable=yes"
                      )
                    }>
                      Link
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "aguabg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>1ML Android Application</h2>
                  </div>
                  <div>
                    <button
                      id="agua-button"
                      className="project-button"
                      onClick={() =>
                        window.open(
                          "https://play.google.com/store/apps/details?id=com.medical.product&hl=en",

                          "resizable=yes"
                        )
                      }
                    >
                      Link
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "todobg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Complaint Register</h2>
                  </div>
                  <div>
                    <button
                      id="todo-button"
                      className="project-button"
                      onClick={() =>
                        window.open(
                          "https://github.com/amritesh007/Complaint_Management_Android",

                          "resizable=yes"
                        )
                      }
                    >
                      Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*hidden modals*/}
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
