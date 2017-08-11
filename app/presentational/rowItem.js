import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Linking } from 'react-native';
// import styles from '../styles';

const openSite = (ip, path) => {
  Linking.openURL(`http://${ip}:3000${path}`);
};

const RowItem = props => (
  <TouchableOpacity onPress={() => openSite(props.ip, props.path)}>
    <View>
      <View>
        <Text numberOfLines={1}>
          {props.path}
        </Text>
        <Text numberOfLines={1}>
          {props.ip}
        </Text>
        <Text numberOfLines={1}>
          {props.mode}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default connect()(RowItem);
