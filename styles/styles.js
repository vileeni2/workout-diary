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
});

export default styles;

