import { StyleSheet } from 'react-native';

const rowItem = {
  flexDirection: 'row',
  marginBottom: 8,
  paddingRight: 11,
  paddingLeft: 11,
  display: 'flex',
  height: 40,
  backgroundColor: '#f5f5f5',
};

const rowItemColumn = {
  alignItems: 'center',
  height: '100%',
};

const rowItemColumnRight = {
  ...rowItemColumn,
  width: '30%',
};

const rowItemColumnLeft = {
  ...rowItemColumn,
  width: '70%',
  overflow: 'hidden',
};

const rowItemText = {
  display: 'flex',
  width: '100%',
  lineHeight: 40,
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
  rowItemColumnRight,
  rowItemColumnLeft,
  rowItemPath,
  rowItemIp,
});
