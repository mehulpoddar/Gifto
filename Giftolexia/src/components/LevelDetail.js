import React, { Component } from 'react';
import { Text, TouchableOpacity, Linking, Image, FlatList, View } from 'react-native';
import { Card, CardSection } from './common';


const LevelDetail = (props) => {
  const {
    labelTextStyle,
    imageStyle,
    flatlistStyle,
    buttonText,
  } = styles;

class HorizontalFlatListItem extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL(this.props.item.Link)}
        >
        <Image
          style={imageStyle}
          source={this.props.item.Img}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

  /*let links = [];*/
  let list = [];
  for (let i = 0; i < props.lno; i++) {
    if (i === 0) {
      /*links = [];*/
      list = [];
    }

    /* --- Code Not Used Anymore */
    /*
    links.push(
			<View style={viewStyle} key={i}>
        <TouchableOpacity
         onPress={() => Linking.openURL(props.links[i])}
        >
        <Image
         source={props.src[i]}
        />
        </TouchableOpacity>
      </View>
		);
    */
    list.push(
      { Link: props.links[i], Img: props.src[i] }
    );
	}
  return (
      <Card style={{ backgroundColor: props.color }}>
          <CardSection style={{ backgroundColor: props.color }}>
              <Text style={labelTextStyle}>{props.level}</Text>
          </CardSection>

          <CardSection style={{ backgroundColor: props.color }}>
            <Text style={buttonText}>{props.body}</Text>
          </CardSection>
          <CardSection style={{ backgroundColor: props.color }}>
            <FlatList
                data={list}
                contentContainerStyle={list.length < 7 && flatlistStyle}
                horizontal={true}
                renderItem={({ item, index }) =>
                    <HorizontalFlatListItem
                      index={index}
                      item={item}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
          </CardSection>

      </Card>
  );
};

const styles = {
  labelTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },
  imageStyle: {
    height: 50,
    flex: 1,
    width: 50,
    resizeMode: 'contain'
  },
  buttonCont: {
    backgroundColor: '#499acf',
    paddingVertical: 10,
    marginTop: 0,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    borderColor: 'white'
  },
  flatlistStyle: {
    flex: 1,
    justifyContent: 'center'
  },
};

export default LevelDetail;
