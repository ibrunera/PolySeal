import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  footer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 130,
    borderTopWidth: 2.5,
    justifyContent: 'center',
  },
  footerTextBox: {
    paddingTop: 10,
    alignItems: 'center',
    width: '40%',
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerImg: {
    height: '80%',
    resizeMode: 'contain',
    width: '25%',
  },
  footerImgRina: {
    height: '100%',
    resizeMode: 'contain',
    width: '25%',
  },
});
