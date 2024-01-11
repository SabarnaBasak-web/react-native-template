import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// import SearchInput from './SearchInput';
import {Searchbar} from 'react-native-paper';
export const HeaderComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hey, Rahul</Text>
      <Searchbar
        placeholder="Search Products or store"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.styledInputSearchBar}
        iconColor="#8891A5"
        inputStyle={styles.inputSearchTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginTop: 30,
  },
  container: {
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 10,
    borderColor: '#2A4BA0',
    borderWidth: 1,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  styledInputSearchBar: {
    marginVertical: 30,
    backgroundColor: '#153075',
  },
  inputSearchTextStyle: {
    fontFamily: 'Manrope-Regular',
    color: '#8891A5',
    fontWeight: '500',
    fontSize: 14,
  },
});
