import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'

class Messages extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messages: [
        {id:1, from:'Mom', Content: 'How are you?'},
        {id:2, from:'Dad', Content: 'Hello Michael?'},
        {id:3, from:'Brother1', Content: 'Can I borrow 10 bucks?'},
        {id:4, from:'Brother2', Content: 'Can I borrow 20 bucks?'},
        {id:5, from:'Dog', Content: 'Woof'}
      ]
    }
  }

_renderMessage(item){
  return(
    <View style={styles.message}>
      <Text style={[{paddingTop:5}, styles.message]}>
        From: {item.from}
      </Text>
      <Text style={[{paddingBottom:5}, styles.message]}>
        {item.Content}
      </Text>
    </View>
  )
}

  render() {
    return (
      <FlatList
      keyExtractor={(item)=>item.id}
        style={styles.main}
        data={this.state.messages}
        renderItem={({item})=>this._renderMessage(item)}
      />

    );
  }
}

const styles = StyleSheet.create({
    main: {

  },
  message:{
    width: 100+'%',
    borderBottomWidth: 1,
    borderColor: "rgb(71,77,89)"
  },
  messageText: {
    color: 'rgb(71,77,89)',
    fontFamily: 'helvetica',
    fontSize: 14
  }
})


export default Messages;
