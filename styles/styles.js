import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginBottom: 12,
  },
  distanceItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 10, // Lisää väli Clear History -napin yläpuolelle
    marginBottom: 20, // Lisää hieman väliä FlatListin aloitukselle
  },
  listItem: {
    padding: 10,
    marginVertical: 4,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  placeholderText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#888',
    marginTop: 20,
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center', // Keskittää sisällön pystysuunnassa
    alignItems: 'center', // Keskittää sisällön vaakasuunnassa
  },
  // Uusi title-tyyli Settings-näkymälle
  settingsTitle: {
    fontSize: 24, // Suurempi fonttikoko
    fontWeight: 'bold',
    marginBottom: 20, // Lisää tilaa otsikon alle
  },
  settingsButtonContainer: {
    width: '100%', // Napit vievät koko leveys
    flexDirection: 'row', // Asettaa napit vierekkäin
    justifyContent: 'space-around', // Jakaa tilan napin ympärille
  },
  // Lisätään yksilöidyt tyylit napille
  settingsButton: {
    backgroundColor: '#e0e0e0', // Sininen taustaväri
    borderRadius: 5, // Pyöristetyt kulmat
    padding: 15, // Napin sisätilat
    width: '45%', // Napit vievät 45% leveydestä
  },
  settingsButtonText: {
    color: '#ffffff', // Valkoinen teksti
    textAlign: 'center', // Keskittää tekstin
  },
  selectedSettingsButton: {
    backgroundColor: '#28a745', // Tummempi sininen, kun valittu
  },
});

export default styles;

