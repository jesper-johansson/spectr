import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import styles from '../styles';

const openSite = (ip, path) => {
  Linking.openURL(`http://${ip}:3000${path}`);
};

const RowItem = props => (
  <TouchableOpacity onPress={() => openSite(props.ip, props.path)}>
    <View style={styles.presentational.rowItem}>
      <View style={styles.presentational.rowItemColumnLeft}>
        <Text
          style={styles.presentational.rowItemPath}
          numberOfLines={1}
        >
          {props.path}
        </Text>
      </View>
      <View style={styles.presentational.rowItemColumnRight}>
        <Text style={styles.presentational.rowItemIp}>{props.ip}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default connect()(RowItem);
