import React, {Component} from 'react';
import {Form, Message, Segment} from "semantic-ui-react";
import {Redirect} from "react-router-dom";
import {check, login, logout, register} from "../../redux/actions/auth";
import {connect} from "react-redux";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        user: '',
        pass: '',
      },
      redirect: false
    };

    props.check();
  }

  handleChange = (e, {name, value}) => {
    this.setState({form: {...this.state.form, [name]: value}})
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/admin"} };
    const { form } = this.state;
    const {login, user, error} = this.props;

    if (user) {
      return <Redirect to={from}/>
    }

    return (
        <div className="vd_container_sub" style={{marginTop: "10%"}}>
          <Form error={error} onSubmit={() => login(form)} style={{width: "20rem"}}>
            <Segment raised>
              <Form.Input
                  fluid
                  icon={"user"}
                  iconPosition={"left"}
                  name={"user"}
                  placeholder={"User"}
                  value={form.user}
                  onChange={this.handleChange}
              />
              <Form.Input
                  fluid
                  icon={"lock"}
                  iconPosition={"left"}
                  name={"pass"}
                  type={"password"}
                  placeholder={"Password"}
                  value={form.pass}
                  onChange={this.handleChange}
              />
              <Message
                error
                content={"User or password is wrong"}
              />
              <Form.Button fluid color={"olive"} content={"Login"}/>
            </Segment>
          </Form>
        </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    error: state.auth.login.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user))
    },
    check: () => {
      dispatch(check())
    },
    logout: () => {
      dispatch(logout())
    },
    register: (user) => {
      dispatch(register(user))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)