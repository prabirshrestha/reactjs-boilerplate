let HoverboardListenerMixin = {

    componentWillMount() {
        this._hoverboardSubscriptions = [];
    },

    subscribe(subscription) {
        this._hoverboardSubscriptions.push(subscription);
    },

    componentWillUnmount() {
        this._hoverboardSubscriptions.forEach(unsubscribe => unsubscribe());
        this._hoverboardSubscriptions = [];
    }

};

export default HoverboardListenerMixin;
