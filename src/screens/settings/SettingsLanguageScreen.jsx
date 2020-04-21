import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, List, ListItem, Text, Left, Right
} from 'native-base';
import i18next from 'i18next';
import { languages } from 'countries-list';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsLanguageScreen({ navigation }) {
  return (
    <Container>
      <List>
        {i18next.languages.map((lng) => (
          <ListItem
            noIndent
            key={lng}
            style={styles.listItem}
            onPress={() => {
              i18next.changeLanguage(lng);
              navigation.goBack();
            }}
          >
            <Left>
              <Text>{languages[lng].name}</Text>
            </Left>
            <Right>
              {i18next.language === lng && (
                <Icon name="ios-checkmark" size={24} />
              )}
            </Right>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
  listItem: {
    minHeight: 48,
  },
});
