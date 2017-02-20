'use strict';

import React, { Component, PropTypes } from 'react';
import GridView from 'react-native-grid-view';
import PBGridItem from '../GridItem';
import { StyleSheet, Text, ListView, View } from 'react-native';

const styles = require('./styles.js');
const { array } = PropTypes;

export default class PBGridView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataSource),
    };
  }

  renderGridItem = (book) => {
    console.log('In renderGridItem');
    const { title, author, type, price } = book;

    return <PBGridItem
              title={title}
              author={author}
              type={type}
              price={price}
           />;
  }

  render() {

    return (<ListView contentContainerStyle={styles.gridWrapper}
              dataSource={this.state.dataSource}
              renderRow={(gridItem) => this.renderGridItem(gridItem) }
            >
            </ListView>);
  }
}

PBGridView.propTypes = {
  dataSource: array
};
