

import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import { Input, Header, Icon, Card, Thumbnail, Body, Left, CardItem} from 'native-base';
import {connect} from 'react-redux';
import styles from './Home.style';
import {handleSearchChanged, searchList} from '../actions/SearchActions';


class Home extends Component{
 
  handleSearch(text){
    this.props.handleSearchChanged(text);
}
handleGo(){
  const { user } = this.props;
  this.props.searchList(user) 
}

  render() {
    return (
      <View style={styles.container}>
         <Card style={styles.card} >
         <Header style={styles.header} searchBar rounded>
        <Icon style={styles.search} name='ios-search'/>
        <Input style={styles.input} placeholder="Search Github User" placeholderTextColor="#c6c6c6"
        returnKeyType="done"
        onChangeText={( this.handleSearch.bind(this))}
        onSubmitEditing={() => this.handleGo()}/>
        </Header>
        </Card>

        <FlatList
          data={this.props.listSearch}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
         
          <View style={styles.flatview}>
          
            <CardItem style={styles.cardList}>
              <Left>
              <Thumbnail resizeMode={'stretch'}  source={{ uri: item.avatar_url }}/>
                 <Body>
                   <Text>
                   {item.login}
                  </Text>
                </Body>
               </Left>
            </CardItem>
       
          </View>
        
          }
          keyExtractor={item => item.login}
        />
      </View>
    );
  }
}


const mapStateToProps = ({ auth }) => {
  const {listSearch, user} = auth;

  return {listSearch, user};
};
export default connect(mapStateToProps, { handleSearchChanged, searchList }) (Home); 



