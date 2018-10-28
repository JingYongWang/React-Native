/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { AppRegistry,TouchableOpacity , StyleSheet, Text, View,  FlatList, TextInput, Image, Linking  } from 'react-native';
import DataArr from '../data'

export default class App extends React.Component {

  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props);

    this.state = {
      DataArr: [
        {
          name: '1', 
          city: 'Taipei', 
          picture: 'http://web.ntnu.edu.tw/~498231299/homepage/homepage_Chance/picture/p1.jpg',
          govSite: 'https://www.gov.taipei/'
        }, 
        {
          name: '2', 
          city: 'New Taipei',
          picture: 'http://cdn.tour-ntpc.com/site/a3be84a9-7283-40a3-b4c7-758bf39c7828/Content/Upload/Place/addc7b9d-39c3-4bb3-814e-8c6944f3f589.jpg',
          govSite: 'https://www.ntpc.gov.tw/ch/index.jsp'
        }, 
        {
          name: '3', 
          city: 'Ylian',
          picture: 'http://pic.pimg.tw/den531/1381606365-2491863139.jpg',
          govSite: 'https://www.tycg.gov.tw/ch/index.jsp?popflag=Y'
        }, 
        {
          name: '4', 
          city: 'Taoyuau',
          picture: 'http://img.ltn.com.tw/2017/new/oct/17/images/bigPic/600_131.jpg',
          govSite: 'https://www.e-land.gov.tw/Default.aspx'
        }
      ],
    };
  }

  onChanegeTextKeyword(text) {
    this.timeA(text)
  }

  timeA(text) {
    if(this.timeA) {
      clearTimeout(this.time);
    }
    this.time = setTimeout(() => {
      if(text === '') {
        this.setState({
          DataArr: DataArr,
        });
        return;
      }
      else{
        for(let i = 0; i < DataArr.length; i++){
          if (DataArr[i].city === text) {
            this.setState({
              DataArr:[DataArr[i]],
            });
            return;
          }
          else{
            this.setState({
              DataArr:[],
            });
          }
        }
      }
    }, 500);
  }


  renderItemView({item, index}){
    return (
      <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate('Result')}>
        <View style={styles.viewContainer}>
          <Image style={styles.imageAvatar}
          source={{uri: item.picture}}
          >
          </Image>
          <Text style={styles.viewText}>{item.city}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  extraUniqueKey(item,index){
    return index+item;
  }

  render() {
    for (let i = 0; i < DataArr.length; i++) {
      DataArr[i]['key'] = i;
   }
    return (
      <View style={styles.container}>
        <TextInput style={styles.textput}
        underlineColorAndroid="transparent"
        maxLength={20}
        placeholder={'請輸入你要查的城市'}
        onChangeText={this.onChanegeTextKeyword.bind(this)}
        >
        </TextInput>
        <View style={styles.footer}>
          <FlatList style={styles.fliterList}
            data={this.state.DataArr}
            renderItem={this.renderItemView.bind(this)}
            keyExtractor={this.extraUniqueKey}
          >
          </FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderRadius: 5,
    marginTop: 10, 
  },
  touchable: {
    flex: 1,
    height: 60,
    backgroundColor: 'white',
  },
  viewText: {
    fontSize: 24,
    marginLeft: 30,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5
  },
  textput: {
    height: 60,
    backgroundColor: '#BAB9B9',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  fliterList: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 10,
  }
});

AppRegistry.registerComponent('App', () => App);

// react-native start
// react-native run-android