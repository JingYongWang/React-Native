import React, { Component } from "react";
import {
		AppRegistry,
    View,
    Text,
    StyleSheet,
		Button,
		FlatList,
} from "react-native";

import DataArr from '../data'

class ResultScreen extends React.Component {
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

	renderItemView({item, index}){
		return (
			<View style={styles.viewContainer}>
				<Text style={styles.viewText}>{item.govSite}</Text>
			</View>
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
          <FlatList style={styles.fliterList}
            data={this.state.DataArr}
            renderItem={this.renderItemView.bind(this)}
            keyExtractor={this.extraUniqueKey}
          >
          </FlatList>
					<Button title="go back SearchPage"
									onPress={() => this.props.navigation.goBack()}></Button>
				</View>
		);
	}
}
export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
		},
		viewText: {
			fontSize: 24,
		},
		viewContainer: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			height: 60,
			borderRadius: 5,
			marginTop: 10, 
		},
		fliterList: {
			backgroundColor: 'white',
			flex: 1,
			marginTop: 10,
		}
});

AppRegistry.registerComponent('App', () => App);