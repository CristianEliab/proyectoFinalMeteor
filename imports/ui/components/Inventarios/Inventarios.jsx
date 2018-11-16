import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './inventario.css';

export class Inventario extends Component {

  render() {

    var estilo = {
      width: '1%'
    };
    var estilo2 = {
      width: '20%'
    };
    
    return (
      <div className="Inventarios ">
        <div className="container body">
          <div className="right_col" role="main">
            <div className="">
              <div className="page-title">
                <div className="title_left">
                  <h3>Projects <small>Listing design</small></h3>
                </div>

                <div className="title_right">
                  <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for..." />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Go!</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="row">
                <div className="col-md-12">
                  <div className="x_panel">
                    <div className="x_title">
                      <h2>Projects</h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content">

                      <p>Simple table with project listing with progress and editing options</p>

                      <table className="table table-striped projects">
                        <thead>
                          <tr>

                            <th style={estilo}>#</th>
                            <th style={estilo2}>Project Name</th>
                            <th>Team Members</th>
                            <th>Project Progress</th>
                            <th>Status</th>
                            <th style={estilo2}>#Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="57"></div>
                              </div>
                              <small>57% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="47"></div>
                              </div>
                              <small>47% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="77"></div>
                              </div>
                              <small>77% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                              </div>
                              <small>60% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="12"></div>
                              </div>
                              <small>12% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="35"></div>
                              </div>
                              <small>35% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="/user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="87"></div>
                              </div>
                              <small>87% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="77"></div>
                              </div>
                              <small>77% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                          <tr>
                            <td>#</td>
                            <td>
                              <a>Pesamakini Backend UI</a>
                              <br />
                              <small>Created 01.01.2015</small>
                            </td>
                            <td>
                              <ul className="list-inline">
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                                <li>
                                  <img src="./user.png" className="avatar" alt="Avatar" />
                                </li>
                              </ul>
                            </td>
                            <td className="project_progress">
                              <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="77"></div>
                              </div>
                              <small>77% Complete</small>
                            </td>
                            <td>
                              <button type="button" className="btn btn-success btn-xs">Success</button>
                            </td>
                            <td>
                              <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                              <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default Inventario
