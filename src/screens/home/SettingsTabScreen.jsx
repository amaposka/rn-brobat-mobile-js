import React from 'react';
import {
  Container, List, ListItem, Text, Left, Right
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { languages } from 'countries-list';
import i18next from 'i18next';

export default function SettingsTabScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <Container>
      <List>
        <ListItem
          noIndent
          onPress={() => navigation.navigate('SettingsLanguageScreen')}
        >
          <Left>
            <Text>{t('settings_language')}</Text>
          </Left>
          <Right>
            <Text>{languages[i18next.language].name}</Text>
          </Right>
        </ListItem>
      </List>
    </Container>
  );
}
