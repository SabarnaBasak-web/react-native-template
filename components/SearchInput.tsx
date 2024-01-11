import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const SearchInput = () => {
  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        editable
        style={styles.searchInputField}
        placeholder="Search Products or store"
        placeholderTextColor={'#8891A5'}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInputContainer: {
    backgroundColor: '#153075',
    marginVertical: 30,
    borderRadius: 20,
    fontFamily: 'Manrope-Regular',
  },
  searchInputField: {
    padding: 10,
    fontSize: 15,
    color: 'white',
  },
});
