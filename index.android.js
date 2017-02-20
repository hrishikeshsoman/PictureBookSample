'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import PBGridView from './src/components/GridView';
import PBDetailView from './src/containers/DetailView';
//dummy
var data = require('./books.json');

class reactNativeSample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<PBDetailView
              title="Noddy's Magic Stories"
              author='Enid Blyton'
              price={33.35}
              purchased={false}
            />);
  }
}

AppRegistry.registerComponent('reactNativeSample', () => reactNativeSample);
