var app = new Vue({
	el :'#app',
	data: {
		message: 'Hello Vue!'
	}
});

var activelist = new Vue({
	el: '#active-list',
	data: {
		todos: [
			{ text: 'Do a thing', id: `id0` },
			{ text: 'Do another thing', id: `id1`  },
			{ text: 'Do yet another thing', id: `id2`  }
		]
	},
	methods: {
		removeItem: function (event) {
			console.log(event.target.id);
			this.$data.todos = this.$data.todos.filter(element => element.id != event.target.id);
		}
	}
});
