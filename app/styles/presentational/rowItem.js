import { StyleSheet } from 'react-native';

const rowItem = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 2,
  marginLeft: 2,
  paddingTop: 25,
  paddingRight: 20,
  paddingBottom: 25,
  paddingLeft: 20,
  display: 'flex',
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
  flexShrink: 1,
  flexDirection: 'column',
  paddingRight: 40,
  display: 'flex',
};

const rowItemColumnRight = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 16,
};

const rowItemIcon = {
  width: 16,
  height: 16,
  tintColor: '#eb5e8f',
};

const rowItemText = {
  fontFamily: 'Helvetica Neue',
  fontWeight: '300',
};

const rowItemTextTitle = {
  ...rowItemText,
  marginBottom: 6,
  fontSize: 15,
  fontWeight: '500',
  color: '#525252',
};

const rowItemTextIp = {
  ...rowItemText,
  marginBottom: 4,
  fontSize: 13,
  color: '#5384ea',
};

const rowItemTextMode = {
  ...rowItemText,
  fontSize: 12,
  color: '#b9b9b9',
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
  rowItemTextTitle,
  rowItemTextIp,
  rowItemTextMode,
  rowItemShadow,
  rowItemColumnLeft,
  rowItemColumnRight,
  rowItemIcon,
  rowItemPath,
  rowItemIp,
});
