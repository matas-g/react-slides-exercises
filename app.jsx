var PropTypes = window.React.PropTypes;
var React = window.React;

var styles = {
    thumbnail: {
        maxWidth: '242px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    image: { width: '100%', height: '200px', display: 'block' }
};

var ProductCardComponent = React.createClass( {
    render: function() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail" style={styles.thumbnail}>
                    <img src={this.props.image} style={styles.image} alt="..." />
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.price} Eur</p>
                        <p><button className="btn btn-primary" role="button">Details</button></p>
                    </div>
                </div>
            </div>
        );
    }
});

ProductCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

var ProductListComponent = function( props ) {
    var productCards = props.products.map( function( product, index ) {
        return (
            <ProductCardComponent
                key={index}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                />
        );
    });
    return ( <div className="row">{productCards}</div> );
};

ProductListComponent.propTypes = {
    products: React.PropTypes.array.isRequired,
};

var testProducts = [
    {
        id: 1,
        image: 'samsung.jpg',
        title: 'Telephons',
        description: 'Fainas',
        price: 2.5
    },
    {
        id: 2,
        image: 'samsung.jpg',
        title: 'Telephons 2',
        description: 'Fainas',
        price: 2.7
    },
    {
        id: 3,
        image: 'samsung.jpg',
        title: 'Telephons 3',
        description: 'Fainas',
        price: 2.8
    }
];

ReactDOM.render(
    <div>
        <ProductListComponent products={testProducts} />
        {/*<IncreasingButtonComponent />*/}
    </div>,
    document.getElementById( 'root' ) );


//{/* TODO - Mygtukas skaiciuojantis paspaudimus (pries tai veike) */ }
//var IncreasingButtonComponent = React.createClass( {
//    getInitialState: function() {
//        return { count: 0 };
//    },
//
//    handleClick: function() {
//        this.setState( {
//            count: this.state.count + 1
//        });
//    },
//
//    render: function() {
//        return (
//            <div>
//                {this.state.count} &nbsp;
//                <button className="btn btn­default"
//                    onClick={this.handleClick}>Increase</button>
//            </div>
//        );
//    }
//});


// TODO - uzd2 - SelfDestructTimer bandymas - paziuret foto
// neveikia ... nebaigta
//var SelfDestructTimerComponent = React.createClass( {
//    getInitialState: function() {
//        return {
//            count: 3,
//        };
//    },
//
//    componentWillMount: function() {
//        // load data from server
//        setInterval( this.decreaseDestructCounter, 1000 );
//    },
//
//    decreaseDestructCounter: function() {
//        if ( this.state.count > 0 ) {
//            this.setState( { count: this.state.count - 1 });
//        }
//    },
//
//    // Other lifecycle methods if needed
//    // Other methods for click handling and stuff
//    render: function() {
//        var backgroundStyle = undefined;
//        var isDestroyed = this.state.count <= 0;
//        if ( isDestroyed ) {
//            backgroundStyle = { background: 'red' };
//        }
//    }
//
//});



// TODO - uzd3 - ProductAdministrationComponent
//var ProductAdministrationComponent = React.createClass( {
//    render: function() {
//        return { title: 'Pradine reiksme'
//        };
//        
//    }
//});
