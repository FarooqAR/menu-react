var Item = React.createClass({
    displayName: "Item",

    render: function () {
        return React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: this.props.url },
                this.props.children
            )
        );
    }
});

var Menu = React.createClass({
    displayName: "Menu",

    render: function () {
        return React.createElement(
            "ul",
            null,
            this.props.items.map(function (item) {
                return React.createElement(
                    Item,
                    { key: item.title, url: item.url },
                    item.title
                );
            })
        );
    }
});

var App = React.createClass({
    displayName: "App",

    "items": [{ "title": "Home", url: "#home" }, { "title": "About", url: "#about" }, { "title": "Services", url: "#services" }, { "title": "Portfolio", url: "#portfolio" }, { "title": "Contact Us", url: "#contact" }],
    render: function () {
        return React.createElement(Menu, { items: this.items });
    }
});

ReactDOM.render(React.createElement(App, null), document.querySelector('.root'));
