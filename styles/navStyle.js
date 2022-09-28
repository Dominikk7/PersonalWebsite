import {StyleSheet} from 'react-native';

const navStyle = StyleSheet.create({
    navBarParent: {
      //flex: .15, //Amount of bar showing
      //maxHeight: 100, //Max height of bar
      //minHeight: 70,
      alignItems: 'center',
      //padding: '100',
      flexDirection: 'row', 
      flexWrap: "wrap",
      justifyContent: 'space-between'   
      
  
    },
    navBar: {
      flex: '1',
      alignItems: 'center',
      flexWrap: "wrap",
      flexDirection: 'row'
       
    },
    navBarText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"   
    }
  });

export default navStyle;