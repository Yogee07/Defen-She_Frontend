import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: 'gray',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

const Email = ({name, email }) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon
          name="email"
          underlayColor="transparent"
          iconStyle={styles.emailIcon}
        />
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{email}</Text>
        </View>
        <View style={styles.emailNameColumn}>
          {name.length !== 0 && (
            <Text style={styles.emailNameText}>{name} </Text>
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

export default Email
