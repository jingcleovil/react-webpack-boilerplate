var StyleSheet = { create: (e) => e }
var React = require('react');

var AppRoot = React.createClass({
    
    render: function() {
        
        return (
            <div style={styles.wrapper}>
                This is ReactJS Boiler Plate
            </div>
        )
    }
});

var styles = StyleSheet.create({
    wrapper: {
        margin: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 3
    }
})

module.exports = AppRoot;