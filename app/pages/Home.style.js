import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5F5F5',
      },
search:{
    marginTop:5,
    color:'#cccccc',
    flex: 0,
},
input:{
    marginBottom:10,
    paddingBottom: 20,
    paddingRight:40,
    height:48,
},
card:{
    backgroundColor: 'green',
},
header:{
    flex: 0,
    marginBottom:10,
    marginTop:10,
    marginRight:15,
    marginLeft:15,
    padding:5,
    height:40,
    backgroundColor: 'white',
    borderRadius:3,
},
flatview: {
    justifyContent: 'center',
    paddingTop: 10,
    borderRadius: 2,
  },
  cardList:{
    flex: 0,
    marginRight:15,
    marginLeft:15,
    padding:10,
    height:80,
    marginTop:0,
    borderColor:  'black',
    backgroundColor: '#fff',
    borderRadius:5,
},
})
export default styles;