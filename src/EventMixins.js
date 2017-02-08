module.exports = {
	data: function(){
		return {
			eventID: "",
		};
	},
	methods: {
		_eventName: function(e){
            return this.eventID+"."+e;
        },
	}
};