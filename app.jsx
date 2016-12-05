/*
 * ex02 - Done
 * 
 * Reiketu pasinagrineti timer veikima.
 */
console.log( 'pasileido' );

const PropTypes = window.React.PropTypes;
const React = window.React;

// Define styles
var styles = {
    thumbnail: {
        maxWidth: '200px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: '100%',
        display: 'block',
    },
    button: {
        margin: '1px',
    },
};

// Single card
var ProductCardComponent = React.createClass( {
    render: function() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                <div className="thumbnail" style={styles.thumbnail}>
                    <img
                        src={this.props.image_src}
                        alt={this.props.image_alt}
                        style={styles.image} />
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.price}</p>
                        <p>
                            <a href={this.props.details_link} className="btn btn-default" role="button" style={styles.button}>Details</a>
                            <a href={this.props.cart_link} className="btn btn-primary" role="button" style={styles.button}>Add to Cart</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

// JSON properties. Defines compliant types of "prop" variables used in Component
ProductCardComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    image_src: PropTypes.string.isRequired,
    image_alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    details_link: PropTypes.string.isRequired,
    cart_link: PropTypes.string.isRequired,
};


// List of many cards
var ProductListComponent = function( props ) {
    var productCards = props.products.map( function( product, index ) {
        return (
            // List of collectable data about every component
            <ProductCardComponent
                key={index}
                id={product.id}
                image_src={product.image_src}
                image_alt={product.image_alt}
                title={product.title}
                description={product.description}
                price={product.price}
                details_link={product.details_link}
                cart_link={product.cart_link}
                />
        )
    });
    return (
        <div className="Row">
            <SelfDestructTimerComponent />
            {productCards}
        </div> );
};

// JSON properties. (input type for "props.products.map(...)")
ProductListComponent.PropTypes = {
    products: React.PropTypes.array.isRequired,
};


// Array of products
var testProductsArray = [
    {
        id: 1,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
    {
        id: 2,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
    {
        id: 3,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
    {
        id: 4,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
    {
        id: 5,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
    {
        id: 6,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
    },
    {
        id: 7,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
    {
        id: 8,
        image_src: 'br01.jpg',
        image_alt: 'Black paracord bracelet',
        title: 'Black bracelet',
        description: 'High quality hand-made black paracord bracelet',
        price: 10.99,
        details_link: 'https://www.google.lt',
        cart_link: 'http://www.ebay.com',
    },
];

// ex02 - SelfDestructTimer
var SelfDestructTimerComponent = React.createClass( {
    getInitialState: function() {
        return {
            // some props
            countdown: 3,
            intervalId: -1,
        }
    },

    componentWillMount: function() {
        // load data from server
        this.setState( {
            // load some props
            intervalId: setInterval( this.countdown, 1000 )
        });
        console.log( 'componentWillMount: ' + this.state.countdown )
    },

    // Other lifecycle methods if needed
    // Other methods for click handling and stuff

    componentWillUnmount: function() {
        clearInterval( this.state.intervalId );
    },

    countdown: function() {
        var currentCountdown = this.state.countdown;
        if ( this.state.countdown > 0 ) {
            console.log( 'countdown: ' + this.state.countdown )
            this.setState( {
                countdown: currentCountdown - 1
            })
        }
    },

    render: function() {
        var style = {};
        if ( this.state.countdown < 1 ) {
            style.background = 'red';
        }
        console.log( 'render: ' + this.state.countdown );
        return ( <div style={style}> {this.state.countdown}</div> );
    }
});


// Displays on screen
ReactDOM.render(
    <ProductListComponent products={testProductsArray} />, document.getElementById( 'root' )
);