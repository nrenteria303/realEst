let properties = [
    {
        id: 1,
        address: {
            streetInfo: "123 Fake St.",
            city: "Atlanta",
            state: "GA",
            zip: "30306"
        },
        imgs: [
            {
                src: "./imgs/blue_house-123.jpg",
                alt: "Blue House at 123 Fake St."
            }
        ],
        price: 250000,
        bedrooms: 4,
        bathrooms: 3,
        HOA: false,
        sqft: 1050,
        description: "This is a beautiful colonial home with both carpet and hardwood floors (hardwood under the carpet, genius). Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 2,
        address: {
            streetInfo: "4598 Peachtree Pl.",
            city: "Atlanta",
            state: "GA",
            zip: "30321"
        },
        imgs: [
            {
                src: "./imgs/large_beige_house-4598.jpg",
                alt: "Beige house at 4598 Peachtree"
            }
        ],
        price: 750000,
        bedrooms: 4,
        bathrooms: 3.5,
        HOA: false,
        sqft: 1490,
        description: "This is a big ol' shack of a home with both carpet and hardwood floors (hardwood under the carpet, genius). Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 3,
        address: {
            streetInfo: "1400 Briarcliff Ave.",
            city: "Decatur",
            state: "GA",
            zip: "30310"
        },
        imgs: [
            {
                src: "./imgs/beige_brick_house-1400.jpg",
                alt: "Brick house at 1400 Briarcliff"
            }
        ],
        price: 299000,
        bedrooms: 3,
        bathrooms: 2.5,
        HOA: true,
        sqft: 1210,
        description: "This home has two pools and three gardens, with both carpet and hardwood floors (hardwood under the carpet, genius). Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 4,
        address: {
            streetInfo: "910 Manhattan Ave.",
            city: "Atlanta",
            state: "GA",
            zip: "30326"
        },
        imgs: [
            {
                src: "./imgs/large_white_house-911.jpg",
                alt: "White house at 910 Manhattan"
            }
        ],
        price: 1275000,
        bedrooms: 10,
        bathrooms: 8.5,
        HOA: false,
        sqft: 4100,
        description: "This is a really, really enormous home with both carpet and hardwood floors (hardwood under the carpet, genius). Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 5,
        address: {
            streetInfo: "5526 Liverpool Ln.",
            city: "Decatur",
            state: "GA",
            zip: "30316"
        },
        imgs: [
            {
                src: "./imgs/shack.jpg",
                alt: "Cozy shack at 5526 Liverpool Ln."
            }
        ],
        price: 150000,
        bedrooms: 1,
        bathrooms: 1,
        HOA: true,
        sqft: 450,
        description: "While some might call this house more of a \"shack\", we prefer to think of it as a cozy little cottage for a busy young professional or childless couple. We think you'll love it, so call us now!"
    },
    {
        id: 6,
        address: {
            streetInfo: "1300 Chesapeake Dr.",
            city: "Atlanta",
            state: "GA",
            zip: "30325"
        },
        imgs: [
            {
                src: "./imgs/white_house-1300-chesapeake.jpg",
                alt: "White house at 1300 Chesapeake"
            }
        ],
        price: 650000,
        bedrooms: 5,
        bathrooms: 4,
        HOA: false,
        sqft: 1680,
        description: "This guy is a squatter's paradise, so be careful who you invite over! The owners welcome walk in tours any time of day or night. Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 7,
        address: {
            streetInfo: "250 Asheville Pl.",
            city: "Kennesaw",
            state: "GA",
            zip: "30385"
        },
        imgs: [
            {
                src: "./imgs/sunset_home-250_asheville.jpg",
                alt: "Large home with acreage at 250 Asheville Pl."
            }
        ],
        price: 475000,
        bedrooms: 6,
        bathrooms: 4,
        HOA: true,
        sqft: 2200,
        description: "If you like large plots of land with no avocado trees, this place is for you! We even believe it's free of horses. Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 8,
        address: {
            streetInfo: "420 Escher Ct.",
            city: "Atlanta",
            state: "GA",
            zip: "30326"
        },
        imgs: [
            {
                src: "./imgs/geo_home-420-escher.jpg",
                alt: "Weird geometric home at 420 Escher Ct."
            }
        ],
        price: 865000,
        bedrooms: 5.7,
        bathrooms: 6,
        HOA: true,
        sqft: 1991,
        description: "This house is great to look at, but admittedly hard to sleep in. We don't recommend anyone buy this house unless they have a degree in mathematics. Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 9,
        address: {
            streetInfo: "345 Excalibur Way",
            city: "Sandy Springs",
            state: "GA",
            zip: "30379"
        },
        imgs: [
            {
                src: "./imgs/large_pool_house-345_excalibur.jpg",
                alt: "The back of a parge house and its pool area at 345 Excalibur Way"
            }
        ],
        price: 950000,
        bedrooms: 6,
        bathrooms: 5,
        HOA: true,
        sqft: 2450,
        description: "This place has a pool. Not sold? Why not? You too good for a pool? Okay fine, it's also really big. Does that help? No? Are you serious? Get outta here! We think you'll love it, so call us now!"
    },
    {
        id: 10,
        address: {
            streetInfo: "300 Lakeview Terr.",
            city: "Atlanta",
            state: "GA",
            zip: "30335"
        },
        imgs: [
            {
                src: "./imgs/lake_house-300_lakeview.jpg",
                alt: "Lake house at 300 Lakeview Terr."
            }
        ],
        price: 99500,
        bedrooms: 2,
        bathrooms: 1,
        HOA: false,
        sqft: 900,
        description: "Canoe included! Enjoy the view of the lake from your front (and only) windows in this beautiful and newly remodeled cabin. Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 11,
        address: {
            streetInfo: "4125 Canyon Dr.",
            city: "Atlanta",
            state: "GA",
            zip: "30305"
        },
        imgs: [
            {
                src: "./imgs/emoji_house-4125_canyon.jpg",
                alt: "Pink emoji house at 4125 Canyon Dr."
            }
        ],
        price: 525000,
        bedrooms: 3,
        bathrooms: 2,
        HOA: false,
        sqft: 1800,
        description: "The curb appeal here speaks for itself! If you want a home where the neighbors already hate you, look no further than this stylish home. Two car garage and cage in backyard for pets or children. Call now for a tour!"
    },
    {
        id: 12,
        address: {
            streetInfo: "742 Evergreen Terr.",
            city: "Springfield",
            state: "GA",
            zip: "30306"
        },
        imgs: [
            {
                src: "./imgs/crime-scene-house.jpg",
                alt: "White house at 742 Evergreen"
            }
        ],
        price: 555000,
        bedrooms: 4,
        bathrooms: 3.5,
        HOA: false,
        sqft: 1680,
        description: "Don't mind the crime scene tape. This place is move-in ready, as long as you don't mind living in a construction zone. Two car garage and cage in backyard for pets or children. Call now for a tour!"
    }
];

export default properties;