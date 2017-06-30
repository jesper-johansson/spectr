import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import actions from '../actions';

class Home extends React.Component {
  static mapStateToProps = state => ({
    loaded: state.home.loaded,
    sites: state.sites.sites,
  });

  componentDidMount() {
    this.props.dispatch(actions.home.homeLoad(true));
    this.props.dispatch(actions.fetchSites());
  }

  render() {
    return (
      <View>
        <Text>{this.props.sites ? this.props.sites : 'false'}</Text>
      </View>
    );
  }
}

export default connect(Home.mapStateToProps)(Home);
