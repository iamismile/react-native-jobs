import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { SIZES } from '../../../constants';
import styles from './Tabs.style';

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
