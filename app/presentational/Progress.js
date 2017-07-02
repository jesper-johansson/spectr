import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';

const Progress = props => (
  <View style={styles.presentational.progress}>
    <Text>Fetching: {props.percent}%</Text>
  </View>
);

export default connect()(Progress);
