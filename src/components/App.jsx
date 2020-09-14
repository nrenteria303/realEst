import React from 'react';
import Header from './page/Header';
import Footer from './page/Footer';
import Card from './Card';
import properties from '../data/properties';

function App() {
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

    return <div>
        <Header />
        <main>
            {properties.map(createCard)}
            {properties.map(createCard)}
            {properties.map(createCard)}
            {properties.map(createCard)}
        </main>
        <Footer />
    </div>
}

export default App;