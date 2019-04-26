import React from 'react';
import HomePage from '../pages/HomePage.js';
import {Provider} from "react-redux";
import store from "../store";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
          <HomePage/>
      </Provider>
    )
  }
}
