import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      // Fetch data from Google Books API with 'Barbie' as the search term
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=barbie'
      );
      const json = await response.json();
      // Set the data to the 'items' field
      setData(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
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
            <Text>
              {/* Display book title, author(s), and the year of publication */}
              {item.volumeInfo.title} by{' '}
              {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}{' '}
              {item.volumeInfo.publishedDate ? `(${item.volumeInfo.publishedDate.split('-')[0]})` : ''}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;
