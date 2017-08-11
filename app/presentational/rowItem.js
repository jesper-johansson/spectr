import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Image, Linking } from 'react-native';
import styles from '../styles';

const openSite = (ip, path) => {
  Linking.openURL(`http://${ip}${path}`);
};

const RowItem = props => (
  <TouchableOpacity onPress={() => openSite(props.ip, props.path)}>
    <View style={styles.presentational.rowItem}>
      <View style={styles.presentational.rowItemColumnLeft}>
        <Text style={styles.presentational.rowItemTextTitle} numberOfLines={1}>
          {props.absolutePath}
        </Text>
        <Text style={styles.presentational.rowItemTextIp} numberOfLines={1}>
          {props.ip}
        </Text>
        <Text style={styles.presentational.rowItemTextMode} numberOfLines={1}>
          {props.mode}
        </Text>
      </View>
      <View style={styles.presentational.rowItemColumnRight}>
        <Image
          style={styles.presentational.rowItemIcon}
          source={{ uri: props.mode === 'proxy' ? 'crosshair' : 'server' }}
          resizeMode="repeat"
        />
      </View>
    </View>
    <View style={styles.presentational.rowItemShadow} />
  </TouchableOpacity>
);

export default connect()(RowItem);
