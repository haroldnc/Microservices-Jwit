const { Adaptador } = require('./Adapters');

const result = Adaptador({
	color: ['verde', 'azul'],
	info: { name: 'Jack', edad: 27 }
});

console.log(result);