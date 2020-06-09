import {StyleSheet, Dimensions} from 'react-native';

const STYLE = {
  BORDER_ROUNDED: 25,
  PRIMARY_COLOR: '#8c499c',
  ERROR: '#922541',
  PRIMARY_TEXT_COLOR: '#4c4747',
  SECONDARY_TEXT_COLOR: '#5d5d5d',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    padding: 0,
    //backgroundColor: STYLE.PRIMARY_COLOR
  },
  forgotPasswordText: {
    // color: '#fff',
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingTop: 5,
    marginBottom: 20,
  },
  textInputWrapper: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    // marginBottom: 8,
    paddingHorizontal: 10,
    height: 50,
    // borderRadius: STYLE.BORDER_ROUNDED,
    //backgroundColor: '#f1f1f1',
    overflow: 'hidden',
    fontSize: 9,
  },
  content: {
    padding: 3,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  RowDirection: {
    flexDirection: 'row',
  },
  customCard: {
    //backgroundColor: '#fff',
    margin: 4,
    borderRadius: 8,
    elevation: 2,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    borderWidth: 1,
    shadowRadius: 10,
  },
  noElevation: {
    elevation: 0,
    shadowColor: '#fff',
  },
  noPadding: {
    padding: 0,
  },
  customCardContent: {
    padding: 20,
    paddingTop: 10,
  },
  customCardHeader: {
    padding: 20,
    paddingBottom: 0,
  },
  customHeaderOutsideCard: {
    margin: 4,
    marginBottom: 2,
  },
  customHeaderOutsideCardClientTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: STYLE.PRIMARY_TEXT_COLOR,
    flexWrap: 'wrap',
  },
  noPaddingTop: {
    paddingTop: 0,
  },
  paddingLevelOne: {
    padding: 10,
  },
  marginTopLevelOne: {
    marginTop: 10,
  },
  paddingBottomLevelFour: {
    paddingBottom: 40,
  },
  qrContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
  markerStyle: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: STYLE.PRIMARY_COLOR,
  },
  cameraStyle: {
    height: Dimensions.get('window').height,
  },
  clientTitle: {
    fontSize: 20,
    fontWeight: '500',
    // color: STYLE.PRIMARY_TEXT_COLOR,
    flexWrap: 'wrap',
    flex: 1,
    paddingBottom: 5,
  },
  section: {
    padding: 5,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '200',
    color: STYLE.PRIMARY_TEXT_COLOR,
    flexWrap: 'wrap',
    flex: 1,
    paddingBottom: 2,
  },
  pageText: {
    fontSize: 12,
    fontWeight: '300',
    color: STYLE.PRIMARY_TEXT_COLOR,
    flexWrap: 'wrap',
  },
  loginQRCode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '80%',
  },
  loginHeader: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    color: '#fff',
    flexWrap: 'wrap',
    flex: 0,
    paddingLeft: 2,
  },
  loginHeaderSeparator: {
    flex: 1,
    marginTop: 20,
    borderWidth: 0.3,
    borderColor: STYLE.PRIMARY_COLOR,
  },
  loginForm: {
    minHeight: 280,
    width: '80%',
    justifyContent: 'flex-start',
  },
  loginPageLogoWrapper: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: STYLE.PRIMARY_COLOR,
    overflow: 'hidden',
    marginBottom: 10,
  },
  loginPageLogo: {
    height: 50,
    resizeMode: 'contain',
    width: '90%',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  clientTitleSecondary: {
    fontSize: 15,
    fontWeight: '500',
    color: STYLE.PRIMARY_TEXT_COLOR,
    flexWrap: 'wrap',
    flex: 1,
  },
  clientImage: {
    width: 'auto',
    height: 200,
    borderRadius: 8,
  },
  dataTable: {
    padding: 0,
  },
  dataTableCell: {
    padding: 0,
    margin: 0,
  },
  listItem: {
    paddingBottom: 12,
    paddingTop: 12,
  },
  listItemCondensed: {
    paddingBottom: 6,
    paddingTop: 6,
  },
  bordered: {
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 15,
    color: STYLE.SECONDARY_TEXT_COLOR,
    fontWeight: '500',
    paddingBottom: 2,
  },
  itemDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: STYLE.SECONDARY_TEXT_COLOR,
  },
  viewMoreInfo: {
    padding: 0,
  },
  viewMoreInfoText: {
    color: STYLE.PRIMARY_COLOR,
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 5,
  },
  tabBar: {
    //backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    height: 50,
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  tabBarIndicator: {
    //backgroundColor: STYLE.PRIMARY_COLOR,
    height: 3,
  },
  tabBarActiveLabel: {
    color: STYLE.PRIMARY_COLOR,
  },
  clientTitleSub: {
    display: 'flex',
    flex: 1,
    fontSize: 14,
    fontWeight: '200',
    color: STYLE.SECONDARY_TEXT_COLOR,
  },
  immFabGroup: {
    position: 'absolute',
    marginBottom: 50,
    elevation: 6,
  },
  immFabStyle: {
    //backgroundColor: '#fff',
    elevation: 6,
  },
  immFab: {
    //backgroundColor: '#fff',
    position: 'absolute',
    right: 16,
    bottom: 66,
    elevation: 6,
  },
  form: {
    //backgroundColor: '#fff'
  },
  inputText: {
    marginTop: 5,
    marginBottom: 5,
  },
  primaryButtonInner: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 46,
    borderRadius: STYLE.BORDER_ROUNDED,
    //backgroundColor: STYLE.PRIMARY_COLOR,
    color: '#fff',
  },
  buttonIcon: {
    display: 'flex',
    padding: 0,
    margin: 1,
  },
  primaryButton: {
    borderRadius: STYLE.BORDER_ROUNDED,
    color: '#fff',
  },
  secondaryButtonInner: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 46,
    borderRadius: STYLE.BORDER_ROUNDED,
    //backgroundColor: '#fff',
    color: STYLE.PRIMARY_COLOR,
  },
  secondaryButton: {
    borderRadius: STYLE.BORDER_ROUNDED,
    color: STYLE.PRIMARY_COLOR,
  },
  linkColor: {
    color: STYLE.PRIMARY_COLOR,
  },
  noFlex: {
    flex: 0,
  },
  offlineWrapper: {
    //backgroundColor: STYLE.ERROR,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: 0,
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8c499c',
  },
  errorText: {
    color: STYLE.ERROR,
  },
  offlineText: {color: '#fff'},
  QRCameraStyle: {
    height: Dimensions.get('window').height,
  },
  QRMarkerStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: STYLE.PRIMARY_COLOR,
  },
});

export default styles;
