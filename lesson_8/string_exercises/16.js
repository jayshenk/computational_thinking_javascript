var name = prompt('What is your name?');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(('Hello ' + name + '. Why are we Screaming?').toUpperCase());
} else {
  console.log('Hello' + name + '.');
}