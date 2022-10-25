import React from 'react'

function Login() {
  return (
    <div className="content-w3ls">
        <div className="content-agile1">
            <h2 className="agileits1">Official</h2>
            <p className="agileits2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="content-agile2">
            <form action="#" method="post">
                <div className="form-control w3layouts"> 
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" title="Please enter your First Name" required=""> </input>
                </div>

                <div className="form-control w3layouts">	
                    <input type="email" id="email" name="email" placeholder="mail@example.com" title="Please enter a valid email" required=""> </input>
                </div>

                <div className="form-control agileinfo">	
                    <input type="password" className="lock" name="password" placeholder="Password" id="password1" required=""></input>
                </div>	

                <div className="form-control agileinfo">	
                    <input type="password" className="lock" name="confirm-password" placeholder="Confirm Password" id="password2" required=""></input>
                </div>			
                
                <input type="submit" className="register" value="Register"></input>
            </form>
            
            <p className="wthree w3l">Fast Signup With Your Favourite Social Profile</p>
            <ul className="social-agileinfo wthree2">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
        </div>
        <div className="clear"></div>
    </div>
  )
}

export default Login