var emitter = function(){
    this.events = {};
};
emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
emitter.prototype.emit = function(type){
    if(this.events[type])
        {
            this.events[type].forEach(function(listener) {
                listener();
            });
        }
};
    module.exports = emitter;