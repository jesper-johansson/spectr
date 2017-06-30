import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import actions from '../actions';

class Home extends React.Component {
  static mapStateToProps = state => ({
    loaded: state.home.loaded,
    paths: state.sites.paths,
    ip: state.sites.ip,
  });

  componentDidMount() {
    this.props.dispatch(actions.home.homeLoad(true));
    this.props.dispatch(actions.fetchSites());
  }

  render() {
    return (
      <View>
        <Text>{console.log(this.props.paths)}</Text>
        <Text>{this.props.paths ? this.props.paths : 'false'}</Text>
        <Text>{console.log(this.props.ip)}</Text>
        <Text>{this.props.ip ? this.props.ip : 'false'}</Text>
      </View>
    );
  }
}

export default connect(Home.mapStateToProps)(Home);
