import { StyleSheet } from 'react-native';

const rowItem = {
  marginRight: 2,
  marginLeft: 2,
  paddingTop: 25,
  paddingRight: 15,
  paddingBottom: 25,
  paddingLeft: 15,
  borderWidth: 1,
  borderColor: '#e8e8ec',
  backgroundColor: '#ffffff',
};

const rowItemShadow = {
  marginRight: 5,
  marginBottom: 12,
  marginLeft: 5,
  height: 2,
  backgroundColor: '#e8e8ec',
};

const rowItemColumnLeft = {
};

const rowItemText = {
  fontFamily: 'Helvetica Neue',
  fontWeight: '300',
};

const rowItemPath = {
  ...rowItemText,
  textAlign: 'left',
};

const rowItemIp = {
  ...rowItemText,
  textAlign: 'right',
};

export default StyleSheet.create({
  rowItem,
  rowItemText,
  rowItemShadow,
  rowItemColumnLeft,
  rowItemPath,
  rowItemIp,
});
