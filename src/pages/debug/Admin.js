import React, {Component} from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
import {Menu} from 'semantic-ui-react';
import Debug from "./Debug";
import Login from "./Login";
import {check, logout} from "../../redux/actions/auth";
import {connect} from "react-redux";
import Blog from "../blog/Blog";
import Markdown from "./markdown/Markdown";

class Admin extends Component {

  constructor(props) {
    super(props);

    this.props.check()

  }

  renderMenuItem(to, name, active, user) {
    return user ? (
        <Menu.Item as={Link} to={to} name={name} active={active === to}/>
    ) : (
        null
    )
  }

  renderRightMenu(user, logout, url, active) {
    return ( user ? (
          <Menu.Menu position={"right"}>
            <Menu.Item header>{user}</Menu.Item>
            <Menu.Item name={"logout"} onClick={() => logout()}/>
          </Menu.Menu>
        ) : (
          <Menu.Menu position={"right"}>
            <Menu.Item as={Link} to={url + "/login"} name={"login"} active={active === url + "/login"}/>
          </Menu.Menu>
        )
    );
  }


  render() {
    const {user, logout} = this.props;
    const { url } = this.props.match;
    //let activeItem = this.props.location.pathname.replace(this.props.match.path, "");
    let activeItem = this.props.location.pathname;
    return (
        <div className="vd_container_main" style={{flexWrap: "nowrap"}}>
            <Menu attached={"top"} inverted size={"huge"}>
              <Menu.Item as={Link} to={"/"} name={"Home"}/>
              <Menu.Item as={Link} to={url} name={"Admin panel"} active={activeItem === url}/>

              {this.renderMenuItem(url+"/debug", "debug", activeItem, user)}
              {this.renderMenuItem(url+"/markdown", "markdown", activeItem, user)}


              {this.renderRightMenu(user, logout, url, activeItem)}
            </Menu>

            <ProtectedRoute exact path={url} component={Blog} user={user}/>
            <ProtectedRoute path={url + "/debug"} component={Debug} user={user}/>
            <ProtectedRoute path={url + "/markdown"} component={Markdown} user={user}/>
            <Route path={url + "/login"} component={Login}/>
        </div>
    )
  }

}

const ProtectedRoute = ({component: Component, ...rest}) => (
  <Route
      {...rest}
      render={props => {
          return (rest.user ? (
              <Component {...props}/>
          ) : (
              <Redirect
                  to={{
                    pathname: "/admin/login",
                    state: {from: props.location}
                  }}
              />
          ))
      }
      }
  />
);

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    check: () => {
      dispatch(check())
    },
    logout: () => {
      dispatch(logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
