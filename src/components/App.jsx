import React, {useState} from 'react';
import Header from './page/Header';
import Footer from './page/Footer';
import Card from './Card';
import properties from '../data/properties';

function App() {

    const [filteredProperties, setFilteredProperties] = useState(properties);

    function createCard(card) {
        return <Card 
            key={card.id}
            streetInfo={card.address.streetInfo}
            mainImgSrc={card.imgs[0].src}
            mainImgAlt={card.imgs[0].alt}
            price={card.price}
            HOA={card.HOA}
            bedrooms={card.bedrooms}
            bathrooms={card.bathrooms}
            description={card.description}
            sqft={card.sqft}
        />
    }

    function showHomes(formObj) {
        let filterCheck = function(item, priceMin, priceMax) {
            if (item.price < priceMin) return false;
            if (item.price > priceMax) return false;
            return true;
        }
        let newFilteredProperties = properties.filter(home => {
            return filterCheck(home, formObj.priceMin, formObj.priceMax);
        });
        setFilteredProperties(newFilteredProperties);
    }

    return <div>
        <Header passToApp={showHomes} />
        <main>
            {filteredProperties.map(createCard)}
        </main>
        <Footer />
    </div>
}

export default App;