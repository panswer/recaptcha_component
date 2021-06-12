function handletChange(e, state, setState) {
    e.preventDefault();
    setState({
        ...state,
        [e.target.name.split('_').pop()]: e.target.value
    });
}

module.exports = {
    handletChange
}