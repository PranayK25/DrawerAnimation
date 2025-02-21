import {StyleSheet} from 'react-native';
import {scale} from '../utils/dimensions';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },

  divider: {
    width: scale(160),
    height: scale(1),
    backgroundColor: 'white',
    marginVertical: scale(70),
  },

  drawerList: {
    marginTop: scale(40),
  },

  signOut: {
    marginLeft: scale(24),
  },

  drawerTitle: {
    fontSize: scale(30),
    color: 'white',
    fontWeight: 700,
    paddingLeft: scale(30),
  },

  drawerContent: {
    marginTop: scale(80),
    paddingLeft: scale(30),
  },

  drawerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#141425',
  },

  header: {
    marginTop: scale(20),
  },

  selectedDrawerItem: {
    paddingLeft: scale(20),
    paddingVertical: scale(8),
    backgroundColor: '#452416',
    borderRadius: scale(12),
    width: scale(150),
    marginTop: scale(8),
  },

  unselectedDrawerItem: {
    paddingLeft: scale(20),
    paddingVertical: scale(8),
    borderRadius: scale(12),
    width: scale(150),
    marginTop: scale(8),
  },

  selectedDrawerItemText: {
    fontSize: scale(22),
    color: '#fb796e',
  },

  unselectedDrawerItemText: {
    fontSize: scale(22),
    color: 'white',
  },
});

export default styles;
