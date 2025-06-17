import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import{ Theme} from '../Components/Theme'; 

const GridCard = ({ title, subtext, count, onPress, radiusStyle }) => (
  <TouchableOpacity style={[styles.card, radiusStyle]} onPress={onPress}>
    <View style={styles.cardContent}>
      <View style={{ flex: 1 }}>
        <View style={styles.sectionTitleRow}>
          <Text style={styles.cardTitle}>{title}</Text>
          {count !== undefined && (
            <Text style={styles.estateCount}>{count}</Text>
          )}
        </View>
        <Text style={styles.cardSubtext}>{subtext}</Text>
      </View>
      <MaterialIcons
        name="chevron-right"
        size={24}
        color={Theme.colors.text2}
      />
    </View>
  </TouchableOpacity>
);

const CardGrid = ({ navigation, joinedEstates }) => {
  const navigateTo = (screen, params) => () => navigation.navigate(screen, params);

  return (
    <View style={styles.grid}>
      <GridCard
        title="Created Estate Groups"
        subtext="Manage or create estate groups"
        onPress={navigateTo("CreatedEstates", { location: "Arab,Kubwa" })}
        radiusStyle={{ borderBottomRightRadius:50 }}
      />
      <GridCard
        title="Your Communities"
        subtext="Tap to view details"
        count={joinedEstates}
        onPress={navigateTo("GroupList")}
        radiusStyle={{ borderBottomLeftRadius:50 }}
      />
      <GridCard
        title="Your Communities"
        subtext="Tap to view details"
        count={joinedEstates}
        onPress={navigateTo("GroupList")}
        radiusStyle={{ borderTopRightRadius: 50 }}
      />
      <GridCard
        title="Your Communities"
        subtext="Tap to view details"
        count={joinedEstates}
        onPress={navigateTo("GroupList")}
        radiusStyle={{ borderTopLeftRadius: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Theme.colors.highlight,
    borderColor:Theme.colors.bg,
    borderWidth: 1,
    width: '48%',
    marginVertical: 8,
    padding: 16,
    borderRadius: 5,
    // minHeight: 130,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // height: '100%',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.colors.text1,
  },
  cardSubtext: {
    fontSize: 12,
    color: Theme.colors.text2,
    marginTop: 4,
  },
  estateCount: {
    backgroundColor: Theme.colors.accent,
    borderRadius: 12,
    paddingHorizontal: 8,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CardGrid;
