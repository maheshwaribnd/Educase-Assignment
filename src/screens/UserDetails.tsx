import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UserDetails = ({ route }: any) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>User Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>
            {user.firstName} {user.lastName}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EF',
    padding: 20,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#FC500D',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FC500D',
    marginBottom: 16,
    textAlign: 'center',
  },

  row: {
    marginBottom: 14,
  },

  label: {
    fontSize: 13,
    color: '#FD7532',
    marginBottom: 4,
    fontWeight: '600',
  },

  value: {
    fontSize: 16,
    color: '#2B2B2B',
    fontWeight: '500',
  },
});