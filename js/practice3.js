var mergedObject = {},
              i,
              keys = ['John', 'Linda', 'James', 'Susie', 'Jason', 'Sarah', 'Lincoln', 'June', 'Joseph', 'Mary'];
              values = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

for (i = 0; i < keys.length; i++) {
mergedObject[keys[i]] = values[i];
}
console.log(mergedObject);
