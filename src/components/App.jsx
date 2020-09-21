import React, {useState} from 'react';
import Header from './page/Header';
import Footer from './page/Footer';
import Card from './Card';
import NoResults from './page/NoResults';
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
        let filterCheck = function(item, priceMin, priceMax, sqftMin, sqftMax, bedsMin, bathsMin, hoa) {
            if (item.price < priceMin) return false;
            if (item.price > priceMax) return false;
            if (item.sqft < sqftMin) return false;
            if (item.sqft > sqftMax) return false;
            if (item.bedrooms < bedsMin) return false;
            if (item.bathrooms < bathsMin) return false;
            if (hoa === "true") {
                hoa = true;
            } else if (hoa === "false") {
                hoa = false;
            }
            if (item.HOA !== hoa && hoa !== '') return false;
            return true;
        }
        if (formObj.priceMin === "") formObj.priceMin = 0;
        if (formObj.priceMax === "") formObj.priceMax = 1000000000;
        if (formObj.sqftMin === "") formObj.sqftMin = 0;
        if (formObj.sqftMax === "") formObj.sqftMax = 20000;
        let newFilteredProperties = properties.filter(home => {
            return filterCheck(home, formObj.priceMin, formObj.priceMax, formObj.sqftMin, formObj.sqftMax, formObj.bedsMin, formObj.bathsMin, formObj.HOA);
        });
        setFilteredProperties(newFilteredProperties);
    }

    return <div>
        <Header passToApp={showHomes} />
        <main>
            {(filteredProperties.length === 0) ? <NoResults /> : filteredProperties.map(createCard)}
        </main>
        <Footer />
    </div>
}

export default App;