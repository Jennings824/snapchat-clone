import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

class Header extends React.Component {

  render() {
    return (
      <View style={styles.topNav}>
      <StatusBar barStyle="light-content"/>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    backgroundColor: 'rgb(12,0,49)',
    paddingTop: 20,
    top: 0,
    height:70,
    position: "absolute",
    width: 100+'%',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'helvetica',
    alignSelf: 'center',
    fontSize: 14

  }
})

export default Header;
