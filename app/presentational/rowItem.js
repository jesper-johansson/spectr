import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import styles from '../styles';

const openSite = (ip, path) => {
  Linking.openURL(`http://${ip}${path}`);
};

const RowItem = props => (
  <TouchableOpacity onPress={() => openSite(props.ip, props.path)}>
    <View style={styles.presentational.rowItem}>
      <View style={styles.presentational.rowItemColumnLeft}>
        <Text style={styles.presentational.rowItemText} numberOfLines={1}>
          {props.absolutePath}
        </Text>
        <Text style={styles.presentational.rowItemText} numberOfLines={1}>
          {props.ip}
        </Text>
        <Text style={styles.presentational.rowItemText} numberOfLines={1}>
          {props.mode}
        </Text>
      </View>
    </View>
    <View style={styles.presentational.rowItemShadow} />
  </TouchableOpacity>
);

export default connect()(RowItem);
