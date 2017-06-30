import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
// import styles from '../styles';

const rowItem = () => (
  <View>
    <View>
      <Text>{this.props.page}</Text>
    </View>
    <View>
      <Text>{this.props.ip}</Text>
    </View>
  </View>
);

export default connect()(rowItem);
