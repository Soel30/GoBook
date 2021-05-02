import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Content() {
  const [content, setContent] = useState([]);
  const renderItem = ({item}) => {
    return (
      <View style={style.wrap}>
        <View style={style.pCover}>
          <Image
            source={{uri: item.cover}}
            style={style.cover}
            resizeMode={'cover'}
            resizeMethod={'resize'}
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
            style={{
              ...StyleSheet.absoluteFillObject,
            }}
          />
        </View>
        <View style={style.rating}>
          <Text style={style.user}>13+</Text>
        </View>
        <TouchableOpacity style={style.favorite}>
          <View style={{}}>
            <FontAwesome5 name={'heart'} color="white" size={17} solid />
          </View>
        </TouchableOpacity>
        <View style={style.genre}>
          <FlatList
            style={{flexDirection: 'row', flexWrap: 'wrap'}}
            data={item.genres}
            renderItem={renderGenre}
            listKey={item => item.id.toString()}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            key={Math.random().toString(36).substr(2, 9)}
          />
          <View style={style.star}>
            <FontAwesome5 name={'star'} color="#cc104d" size={9} solid />
            <FontAwesome5 name={'star'} color="#cc104d" size={9} solid />
            <FontAwesome5 name={'star'} color="#cc104d" size={9} solid />
            <FontAwesome5 name={'star'} color="#cc104d" size={9} solid />
            <FontAwesome5 name={'star'} color="white" size={9} solid />
            <Text style={style.review}>107 REVIEWS</Text>
          </View>
        </View>
        <View style={style.pTitle}>
          <Text style={style.title}>{item.title}</Text>
          <Text
            style={{
              color: 'grey',
              marginTop: 5,
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            105 Watch
          </Text>
        </View>
      </View>
    );
  };
  const renderGenre = ({item}) => {
    return (
      <View>
        <Text
          style={{
            color: '#b62b56',
            fontSize: 9,
            marginLeft: 3,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const getContent = () => {
    axios
      .get(
        'https://gist.githubusercontent.com/Soel30/af336d6e84aff2a130029369d968d382/raw/a8e3a2adcc1ac4c07bc32af9bbb4390257d2d88e/content.json',
      )
      .then(res => {
        setContent(res.data.data);
      });
  };
  useEffect(() => {
    getContent();
  }, []);
  return (
    <View>
      <FlatList
        numColumns={2}
        data={content}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  wrap: {
    marginTop: 10,
    flex: 0.5,
    marginBottom: 10,
    backgroundColor: '#212030',
    marginRight: 5,
    borderColor: '#373552',
    borderWidth: 2,
    borderRadius: 10,
    position: 'relative',
  },
  pTitle: {marginVertical: 10, marginHorizontal: 10},
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  review: {
    color: '#4c4b5b',
    fontSize: 9,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  star: {
    marginTop: 5,
    marginLeft: 7,
    flex: 1,
    flexDirection: 'row',
  },
  genre: {
    position: 'absolute',
    top: '65%',
    marginLeft: 4,
    marginRight: 7,
  },
  rating: {
    position: 'absolute',
    backgroundColor: 'black',
    top: '3%',
    left: '5%',
    padding: 4,
    borderRadius: 4,
  },
  favorite: {position: 'absolute', top: '3%', right: '5%', padding: 4},
  user: {color: 'white', fontWeight: 'bold'},
  pCover: {alignItems: 'center', justifyContent: 'center'},
  cover: {
    width: 166,
    height: 225,
    borderTopLeftRadius: 7.9,
    borderTopRightRadius: 7.9,
    flex: 1,
  },
});
