import React from 'react'
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);
function Profile() {
  return (
    <div className={cx("container")}>

        <div className="row">
            <div className="col-sm-3">
                

                <div className="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"></img>
                    <h6>Upload a different photo...</h6>
                    <input type="file" className="text-center center-block file-upload"></input>
                </div>
                
                
                <ul className="list-group">
                    <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Ví</strong></span> 125</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                </ul> 

            
            </div>
            
            <div className="col-sm-9">
                
                <div className="tab-content">
                    <div className="tab-pane active" id="home">

                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label htmlFor="first_name"><h4>First name</h4></label>
                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."></input>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label htmlFor="last_name"><h4>Last name</h4></label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."></input>
                                </div>
                            </div>
                
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label htmlFor="phone"><h4>Phone</h4></label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."></input>
                                </div>
                            </div>
                
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label htmlFor="email"><h4>Location</h4></label>
                                    <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"></input>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label htmlFor="password"><h4>Password</h4></label>
                                    <input type="password" className="form-control" placeholder="password" title="enter your password."></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                        <br></br>
                                        <button className="btn btn-lg btn-success" > Save</button>
                                    </div>
                            </div>
                        </form>
                    
                    </div>

                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Profile