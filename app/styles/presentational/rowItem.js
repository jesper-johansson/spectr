import { StyleSheet } from 'react-native';

const rowItem = {
  flexDirection: 'row',
  marginBottom: 8,
  paddingRight: 11,
  paddingLeft: 11,
  display: 'flex',
  height: 40,
  backgroundColor: '#ffffff',
};

const rowItemColumn = {
  alignItems: 'center',
  height: '100%',
};

const rowItemColumnRight = {
  ...rowItemColumn,
  width: '35%',
};

const rowItemColumnLeft = {
  ...rowItemColumn,
  width: '65%',
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
