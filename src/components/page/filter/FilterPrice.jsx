import React, {useState} from 'react';

function FormPrice(props) {
    const [price, setPrice] = useState({
        priceMin: "",
        priceMax: ""
    });

    function handleChange(e) {
        if (props.isCleared) {
            setPrice({
                priceMin: "",
                priceMax: ""
            });
        }
        const {name, value} = e.target;
        setPrice(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        submitPrice();
    }

    function submitPrice() {
        props.passToFilterForm(parseInt(price.priceMin, 10), parseInt(price.priceMax, 10));
    }
    
    return <fieldset onBlur={submitPrice} id="form-price" className="form-opt">
                <legend>Price</legend>
                <div className="max-min">
                    <input 
                        id="priceMin" 
                        name="priceMin" 
                        type="number" 
                        min="0" 
                        max="5000000" 
                        step="10000" 
                        placeholder="min" 
                        value={(props.isCleared) ? "" : price.priceMin}
                        onChange={handleChange}
                    />
                    &nbsp;-&nbsp;
                    <input 
                        id="priceMax" 
                        name="priceMax" 
                        type="number" 
                        min={price.priceMin !== '' ? price.priceMin : 10000} 
                        max="5000000" 
                        step="10000" 
                        placeholder="max" 
                        value={(props.isCleared) ? "" : price.priceMax}
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
}

export default FormPrice;