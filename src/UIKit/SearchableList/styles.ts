import {StyleSheet} from 'react-native';

import {Colors} from '../../UIKit';

export const localStyles = StyleSheet.create({
  container: {
    marginTop: 18,
  },

  // List
  listAnchor: {
    marginTop: 10,
  },

  list: {
    height: 152,
  },

  // Item
  itemContainer: {
    backgroundColor: Colors.green,
    height: 30,
    justifyContent: 'center',
    marginVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  itemText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default localStyles;
