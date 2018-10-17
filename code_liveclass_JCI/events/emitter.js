function Emitter(){
    this.events = {}
}
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
Emitter.prototype.emit = function() {
	arguments.forEach(function(type, data){
		if (this.events[type]) {
			this.events[type].forEach(function(listener) {
				listener(data);
			});
		}
	})
}
module.exports = Emitter;