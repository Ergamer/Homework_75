import React, { Component } from 'react';
import './App.css';
import {fetchDecode, fetchEncode} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {

    state = {
      decode:'',
      encode: '',
      password: ''
    };

    onChangeHandler = (event) => {
      this.setState({[event.target.name]: event.target.value});
    };

  render() {
    return (
      <div className="App">
        <div className="FirstArea">
            <span>Decoded message</span>
            <textarea value={this.state.decode}
                      name="decode"
                      onChange={this.onChangeHandler}></textarea>
        </div>
        <div className="SecondArea">
            <span>Password</span>
            <input value={this.state.password}
                   name="password" type="text"
                   onChange={this.onChangeHandler}/>
            <div className="ActionButtons">
                <button className="EncodeButton"
                    onClick={() => {
                        this.props.fetchEncode({message: this.state.decode, password: this.state.password}).then(res => {
                            this.setState({encode: this.props.encode, decode: ''});
                        })
                    }}>
                    Encode
                </button>
                <button className="DecodeButton"
                        onClick={() => {
                            this.props.fetchDecode({message: this.state.encode, password: this.state.password}).then(res => {
                                this.setState({decode: this.props.decode, encode: ''});
                            })
                        }}>
                    Decode
                </button>
            </div>
        </div>
        <div className="ThirdArea">
            <span>Encoded message</span>
            <textarea value={this.state.encode}
                      name="encode"
                      onChange={this.onChangeHandler}></textarea>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
    return {
        decode: state.decode,
        encode: state.encode
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchDecode: (messages) => dispatch(fetchDecode(messages)),
        fetchEncode: (messages) => dispatch(fetchEncode(messages))
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (App);
