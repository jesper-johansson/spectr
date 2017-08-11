import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { home, sites } from '../actions';
import RowItem from '../presentational/RowItem';
import Progress from '../presentational/Progress';
import styles from '../styles';

class Home extends React.Component {
  static mapStateToProps = state => ({
    loaded: state.home.loaded,
    items: state.sites.items,
    progressActive: state.sites.progressActive,
    progressPercent: state.sites.progressPercent,
  });

  componentDidMount() {
    this.props.dispatch(home.homeLoad(true));
    this.props.dispatch(sites.fetchSites());
  }

  render() {
    return (
      <View style={styles.containers.home}>
        <FlatList
          style={styles.containers.flatList}
          data={this.props.items}
          renderItem={({ item, index }) => <RowItem index={index} absolutePath={item.absolutePath} path={item.path} ip={item.ip} key={item.id} mode={item.mode} />}
        />
        {this.props.progressPercent < 100 && this.props.progressPercent > 0 ? <Progress percent={this.props.progressPercent} /> : null}
      </View>
    );
  }
}

export default connect(Home.mapStateToProps)(Home);
