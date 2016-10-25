module.exports = {
    getInbox(state) {
        return ({query: {to}}, res) => res.json(state.inboxes[to]);
    },
    getEmail(state) {
        return ({query: {id}}, res) => res.json(state.emails[id]);
    }
};