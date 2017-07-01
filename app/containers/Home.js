import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { home, sites } from '../actions';

class Home extends React.Component {
  static mapStateToProps = state => ({
    loaded: state.home.loaded,
    paths: state.sites.paths,
    ips: state.sites.ips,
    progressActive: state.sites.progressActive,
    progressPercent: state.sites.progressPercent,
  });

  componentDidMount() {
    this.props.dispatch(home.homeLoad(true));
    this.props.dispatch(sites.fetchSites());
  }

  render() {
    const prog = this.props.progressActive ? <Text>Progress: {this.props.progressPercent} %</Text> : null;
    return (
      <View>
        <Text />
        <Text />
        <Text>Path: {this.props.paths}</Text>
        <Text>IP: {this.props.ips}</Text>
        {prog}
      </View>
    );
  }
}

export default connect(Home.mapStateToProps)(Home);
