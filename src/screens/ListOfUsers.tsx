import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ApiManager from '../api/Api';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/Reducers/slice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
}

const ITEMS_PER_BATCH = 5;

const ListOfUsers = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: any) => state.user.users);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    restoreUsers();
  }, []);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [searchQuery]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await ApiManager.getUsers();
      if (res?.status === 200) {
        dispatch(setUsers(res.data.users));
        await AsyncStorage.setItem(
          'users',
          JSON.stringify(res.data.users),
        );
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const restoreUsers = async () => {
    const saved = await AsyncStorage.getItem('users');
    if (saved) {
      dispatch(setUsers(JSON.parse(saved)));
    } else {
      fetchUsers();
    }
  };

  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  const visibleUsers = filteredUsers.slice(0, visibleCount);

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('userdetails', { user: item })}
    >
      <View style={styles.card}>
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>
        {item.email && <Text style={styles.email}>{item.email}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>

      <TextInput
        placeholder="Search users..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#FC500D" />
      ) : (
        <FlatList
          data={visibleUsers}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          onEndReached={() => {
            if (visibleCount < filteredUsers.length) {
              setVisibleCount(prev => prev + ITEMS_PER_BATCH);
            }
          }}
          onEndReachedThreshold={0.4}
        />
      )}
    </View>
  );
};

export default ListOfUsers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#FC500D',
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD3BE',
    marginBottom: 14,
    fontSize: 15,
    color: '#2B2B2B',
  },

  listContainer: {
    paddingBottom: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    // Android shadow
    elevation: 3,
    // iOS shadow
    shadowColor: '#FC500D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B2B2B',
  },

  email: {
    fontSize: 14,
    color: '#6B6B6B',
    marginTop: 6,
  },

  footerLoader: {
    marginVertical: 20,
  },
});
