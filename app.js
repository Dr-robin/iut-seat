var app = new Vue({
	el: '#vue-root',
	data: {ds: [0, 0, 0, 0, 0, 0]},
	methods: {
		refresh() {
			this.ds = [0, 0, 0, 0, 0, 0];
			jQuery.getJSON('/seats', (data) => {
				this.ds = data;
			});
		}
	},
	computed: {
		defaultText() {
			return this.ds[0] ? (this.ds[1] + ' / ' + this.ds[0]) : '로딩중';
		},
		studentText() {
			return this.ds[2] ? (this.ds[3] + ' / ' + this.ds[2]) : '로딩중';
		},
		notebookText() {
			return this.ds[4] ? (this.ds[5] + ' / ' + this.ds[4]) : '로딩중';
		},
	}
});
app.refresh();