var Item = React.createClass({
    render: function(){
        return <li><a href={this.props.url}>{this.props.children}</a></li>
    }
});

var Menu = React.createClass({
    render: function(){
        return (
            <ul>
                {
                    this.props.items.map(function(item){
                        return <Item key={item.title} url={item.url}>{item.title}</Item> 
                    })
                }
            </ul>
        );
    }
});

var App = React.createClass({
    "items":[
        {"title":"Home", url:"#home"},
        {"title":"About", url:"#about"},
        {"title":"Services", url:"#services"},
        {"title":"Portfolio", url:"#portfolio"},
        {"title":"Contact Us", url:"#contact"}
    ],
    render: function(){
        return (
            <Menu items={this.items}/>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('.root'));