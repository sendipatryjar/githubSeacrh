

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './App.style';
import {handleSearchChanged} from './app/actions/SearchActions';

class Home extends Component{


  handleSearch(text){
    this.props.handleSearchChanged(text);
}
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.search} name="ios-search" />
        <Input style={styles.input} placeholder="Search" placeholderTextColor="#c6c6c6"
        //value={this.state.search_list}
        onChangeText={(this.handleSearch.bind(this))}/>
      </View>
    );
  }
}


const mapStateToProps = ({ auth }) => {
  const {user} = auth;

  return {user};
};
export default connect(mapStateToProps, { handleSearchChanged }) (Home); 



