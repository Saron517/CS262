// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function HomeScreen({ navigation }) {
//     const [reviews, setReviews] = useState([
//         { title: "Fellowship of the Ring", rating: 8.8, key: '1', description: "Some hobbits begin a quest." },
//         { title: "Two Towers", rating: 8.7, key: '2', description: 'Some dark lords try to take over the world.' },
//         { title: "Return of the King", rating: 8.9, key: '3', description: 'The dark lords are defeated, to much rejoicing.' },
//     ]);

//     return (
//         <View style={globalStyles.container}>
//             <FlatList data={reviews} renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
//                     <Text style={globalStyles.title}>{ item.title }</Text>
//                 </TouchableOpacity>
//             )} />
//         </View>
//     );
// }
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const App = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPlayers = async () => {
    try {
      // Fetch data from Google Books API with 'Barbie' as the search term
      const response = await fetch(
        'https://cs262-webservice.azurewebsites.net/players'
      );
      const json = await response.json();
      // Set the data to the 'items' field
      setData(players);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
                <Text>
                    {item.name}
                </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default App;
