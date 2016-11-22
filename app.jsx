console.log('Pasileido')

//Komponento struktura
var ProductCardComponent = React.createClass( {
    render: function() {
        return (
            <div>
                {/* Is bootstrap linko (skaidrese) */}
                <div class="row">
                    <div class="col-xs-6 col-md-3">
                        <a href="#" class="thumbnail">
                            <img src="smartphone.png" alt="Smartphone" height="200px" />
                        </a>
                    </div>
                    ...
                </div>
                {/* test - Mygtukas skaiciuojantis paspaudimus */}
                <IncreasingButtonComponent />
            </div>
        );
    }
});

// Komponento parametrai
ProductCardComponent.propTypes = {
    // Properties JSON

};


// Visu komponentu struktura
var ProductListComponent = React.createClass( {
    render: function() {
        // sitas bus reikalingas papildomam funkcionalumui
        // var productHtml = this.props.products.map( function( p, idx ) {
        return (
            <div>
                <p>Products List</p>
                <ProductCardComponent />
                <ProductCardComponent />
            </div>
        );
        // });
    }
});

ProductListComponent.propTypes = {
    // Properties JSON
};

{/* test - Mygtukas skaiciuojantis paspaudimus */ }
var IncreasingButtonComponent = React.createClass( {
    getInitialState: function() {
        return { count: 0 };
    },

    handleClick: function() {
        this.setState( {
            count: this.state.count + 1
        });
    },

    render: function() {
        return (
            <div>
                {this.state.count} &nbsp;
                <button className="btn btn­default"
                    onClick={this.handleClick}>Increase</button>
            </div>
        );
    }
});

// Nupiesia ProductListComponent
ReactDOM.render(
    <ProductListComponent />,
    document.getElementById( 'root' )
);


// TODO - uzd2 - SelfDestructTimer bandymas - paziuret foto
// neveikia ... nebaigta
var SelfDestructTimerComponent = React.createClass( {
    getInitialState: function() {
        return {
            count: 3,
        };
    },

    componentWillMount: function() {
        // load data from server
        setInterval( this.decreaseDestructCounter, 1000 );
    },

    decreaseDestructCounter: function() {
        if ( this.state.count > 0 ) {
            this.setState( { count: this.state.count - 1 });
        }
    },

    // Other lifecycle methods if needed
    // Other methods for click handling and stuff
    render: function() {
        var backgroundStyle = undefined;
        var isDestroyed = this.state.count <= 0;
        if ( isDestroyed ) {
            backgroundStyle = { background: 'red' };
        }
    }

});


// TODO - uzd3 - ProductAdministrationComponent
// TODO - issiaiskint kodel negaliu atsidaryt ex03 branch (daryt pull is originalo?)
//var ProductAdministrationComponent = React.createClass( {
//    render: function() {
//        return { title: 'Pradine reiksme'
//        };
//        
//    }
//});