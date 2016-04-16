<?php

use Illuminate\Database\Seeder;

class ImageGalleryTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('image_gallery')->delete();
        
        \DB::table('image_gallery')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Diversify',
                'img' => 'mb7LOorCZqpeOB5IS2GjQTrZ1RoiQdzr.jpg',
                'description' => 'The most modern form of transportation and entertainment! Fun for the entire family. ',
                'tags' => 'gadgets',
                'created_at' => '2016-03-01 22:33:11',
                'updated_at' => '2016-03-16 23:56:57',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'LeafGaurd',
                'img' => 'gJnn2L0r0ezpTgnC45lVwikpcTKLmbSU.jpg',
                'description' => 'Get LeafGuard® Brand Gutters - Say goodbye to cleaning gutters clogged by leaves and debris, forever with LeafGuard Brand Gutters. LeafGuard is the best rain gutter protection system available.',
                'tags' => 'gadgets outdoor',
                'created_at' => '2016-03-01 22:33:37',
                'updated_at' => '2016-03-02 18:07:17',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Cutco',
                'img' => 'K72vIdKXzvyGTE71UR5RxcIbewJ1eqcy.JPG',
                'description' => 'Since 1949, Cutco has proudly made high-quality kitchen knives and products in Olean, New York, and we are committed to keeping it that way.',
                'tags' => 'gadgets',
                'created_at' => '2016-03-01 22:34:05',
                'updated_at' => '2016-03-02 18:06:13',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'C\'s Landscape & Design',
                'img' => 'tzzvnOo7jddFystTJxsIKF0zEHmEISoX.JPG',
                'description' => 'I have been designing landscapes as a licensed Iowa contractor since 1991. I take pride in my work and have built my company on quality and honesty. ',
                'tags' => 'outdoor',
                'created_at' => '2016-03-01 22:35:09',
                'updated_at' => '2016-03-02 18:01:59',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'Baxter Comfort Solutions',
                'img' => 'ceMH6eGL0R4SgiJMIfFCyjCVWheKrDBo.jpg',
                'description' => 'Save up to 80% on heating and cooling operating costs or get a quality repair to your existing system NOW from the experts ... We’re dedicated to ensuring you’re comfortable in your own home, and that can start today.',
                'tags' => 'indoor',
                'created_at' => '2016-03-01 22:36:29',
                'updated_at' => '2016-03-02 18:00:16',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Bath Fitter',
                'img' => 'BjNEuhpLH5HeGtMyAjxhOO7iQcD5nvJL.png',
                'description' => 'We’re the perfect solution to remodeling your bathtub! Our acrylic bathtub liners and seamless walls are custom made and installed right over your existing bathtub and wall, which guarantees a watertight fit and are backed by a lifetime warranty.',
                'tags' => 'indoor',
                'created_at' => '2016-03-01 22:37:02',
                'updated_at' => '2016-03-02 15:53:54',
            ),
            6 => 
            array (
                'id' => 7,
                'title' => 'American Exteriors',
                'img' => 'aWEnvGPnCaIGdOyNIbiJEFy62fDTeUW0.jpg',
                'description' => 'Since 1980 we have been specializing in restoration services on the exterior and interior of commercial structures.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-01 22:37:49',
                'updated_at' => '2016-03-02 15:51:08',
            ),
            7 => 
            array (
                'id' => 8,
                'title' => 'Pocket Pets',
                'img' => '5lCQ3hyMKsBcK4CV2NZxpaljEzkjQeJt.png',
                'description' => 'WELCOME TO POCKET PETS™, THE NATION\'S LEADING RESOURCE FOR SUGAR GLIDER CARE AND INFORMATION.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-01 22:38:28',
                'updated_at' => '2016-03-02 15:46:31',
            ),
            8 => 
            array (
                'id' => 9,
                'title' => 'NB Golf Cars',
                'img' => 'sZBAHsozOIDTk1j4Fyu4udkUhJFpwtJ1.JPG',
                'description' => 'NB Golf Cars has been an acclaimed source for Club Car golf cars since 1972. Since expanding from our original location in Hendricks, Minnesota, into Des Moines, IA, and Sioux Falls, SD, we are now the Upper Midwest’s leading distributer of the premier Cl',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 18:37:53',
                'updated_at' => '2016-03-02 18:37:53',
            ),
            9 => 
            array (
                'id' => 10,
                'title' => 'Norwex',
                'img' => 'hbpv37o35fvaIwD1acxyNEISaj0cIlZm.JPG',
                'description' => 'Our Global Mission: Improving quality of life by radically reducing chemicals in our home.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 18:45:49',
                'updated_at' => '2016-03-02 18:45:49',
            ),
            10 => 
            array (
                'id' => 11,
                'title' => 'Shelf Genie',
                'img' => 'tavy9uwsZlALRoDnmpbfxDOHTDSTQB92.jpg',
                'description' => 'ShelfGenie is your source for custom designed, built and installed Glide-Out shelving solutions for any existing cabinet in the home. Our affordable, high impact shelves are designed to provide homeowners with easy access to their belongings in the kitche',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 18:47:33',
                'updated_at' => '2016-03-02 18:47:33',
            ),
            11 => 
            array (
                'id' => 12,
                'title' => 'Vitamix',
                'img' => 'tLX6rCYtDGUsDZtI9NqRQXuvtqWylT8V.jpg',
                'description' => 'Vitamix is one of the most trusted brands in high performance blending technology for your home and business. Experience a Vitamix machine today!',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 18:49:04',
                'updated_at' => '2016-03-02 18:49:04',
            ),
            12 => 
            array (
                'id' => 13,
                'title' => 'WeatherMax Windows',
                'img' => 'HHMAvQtnsNzTGd74fUSBRdlip1uFzfd1.jpg',
                'description' => 'Quickly and Easily Compare Window Prices Window Companies Compete For Your Business Competing Quotes Help You Get The Best Deal Possible Completely Free Service, No Obligation',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 18:50:58',
                'updated_at' => '2016-03-02 18:50:58',
            ),
            13 => 
            array (
                'id' => 14,
                'title' => 'Renewal By Anderson',
                'img' => '6p9mt02ku0hudFr5S6jMpBtyG4U3qpQh.JPG',
                'description' => 'Renewal by Andersen’s start-to-finish window replacement process gives you custom-crafted, energy efficient windows and doors, with professional installation.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 18:52:59',
                'updated_at' => '2016-03-02 18:52:59',
            ),
            14 => 
            array (
                'id' => 15,
                'title' => 'Affordable Foam Insulation',
                'img' => '8uOp25abp8Xr7HNFLATYd5PXMhA1Lm7E.JPG',
                'description' => 'Affordable Foam lives up to it\'s name. Non-expanding foam doesn\'t have to be expensive. We have found a way to bring the costs down while delivering top-notch installation and savings that last as long as you own your home.',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-02 18:54:51',
                'updated_at' => '2016-03-02 18:54:51',
            ),
            15 => 
            array (
                'id' => 16,
                'title' => '1-800 Solar',
                'img' => 'cQYea3ETTzFH8JP8jthp2T7g9jTj4xkc.JPG',
                'description' => '1-800-MY-SOLAR   STOP PAYING FOR YOUR POWER! PRODUCE YOUR OWN! CALL THE SOLAR EXPERTS.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 18:56:30',
                'updated_at' => '2016-03-02 18:59:13',
            ),
            16 => 
            array (
                'id' => 17,
                'title' => 'Ameritech Construction',
                'img' => 'QYqc7xQPgETOzBcGl7QtQ5a9rXL6mxVm.JPG',
                'description' => 'We have been providing energy efficient windows and doors to the Colorado Front Range for decades. Our products offer unmatched craftsmanship, beauty, durability, security and value. No other company in the area offers the same quality products from our h',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:03:13',
                'updated_at' => '2016-03-02 19:03:13',
            ),
            17 => 
            array (
                'id' => 18,
                'title' => 'Bordner Installation Group',
                'img' => 'eU5ScztG2KVqZenvBJJkCXutETdJD1Vy.JPG',
                'description' => 'We Have Earned The Highest Possible Certification Levels With The Best Roofing Manufacturers!',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-02 19:06:45',
                'updated_at' => '2016-03-02 19:06:45',
            ),
            18 => 
            array (
                'id' => 19,
                'title' => 'Carpet Planet LLC',
                'img' => 'Ynl3lYHbrmk0lDamg5W6TR4Mhu36bQ9P.jpg',
                'description' => 'Carpet Planet of Colorado Springs, CO is locally owned and operated. We have experienced professional staff who are here to help you with every flooring need...',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:10:03',
                'updated_at' => '2016-03-02 19:10:03',
            ),
            19 => 
            array (
                'id' => 20,
                'title' => 'Champion Windows',
                'img' => 'hQfAjKC2ZnU9apljL1rQZchPYtMtmwzp.jpg',
                'description' => 'Make your home a comfortable place to enjoy these natural features by working with Champion on custom-manufactured replacement windows, siding, sunrooms, roofing, and doors. They’re made in the USA, and they’re sold, installed, and serviced by professiona',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:13:37',
                'updated_at' => '2016-03-02 19:13:37',
            ),
            20 => 
            array (
                'id' => 21,
                'title' => 'Colorado Living',
                'img' => 'EjZgVbFHqZDCSkhM7aJzSiEKtkvf092P.jpg',
                'description' => 'Turn Your Inaccessible Tub Into An Easy-Step,  Slip-Resistant Shower… In Just One Day.  Tub-To-Shower Conversions From Colorado Living Are Beautiful,  Masterfully Installed, And Guaranteed To Last You For Life.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:15:57',
                'updated_at' => '2016-03-02 19:15:57',
            ),
            21 => 
            array (
                'id' => 22,
                'title' => 'EcoMark Solar',
                'img' => 'hZKigeTPjevpgJrLHWt89tMAJFYGAXaC.jpg',
                'description' => 'We are a local, Colorado-based solar panel company, and our passion is helping our neighbors become energy independent. We envision a future where all Coloradans own the energy they need to live. It’s no secret that energy bills are sky-high across the Ro',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:17:33',
                'updated_at' => '2016-03-02 19:17:33',
            ),
            22 => 
            array (
                'id' => 23,
                'title' => 'Farmers Insurance',
                'img' => '5yOfPw2zISBgxOowlfghgYrY4GiqW74G.jpg',
                'description' => '',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:19:29',
                'updated_at' => '2016-03-02 19:19:29',
            ),
            23 => 
            array (
                'id' => 24,
                'title' => 'Global Travel Network',
                'img' => 'EPqoRg6gJ3LziREBlXNtv1XvvWaXaKzJ.jpg',
                'description' => 'Membership travel benefits include your condominium packages plus our advice on the best savings for airline-reservation, car rental, cruises and  tour packages.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:25:08',
                'updated_at' => '2016-03-02 19:25:08',
            ),
            24 => 
            array (
                'id' => 25,
                'title' => 'Granite Transformations',
                'img' => '0iGoXV4qeg78XDtZPBGolxzSGS0aFn8f.JPG',
                'description' => 'Chain retailer offering granite & quartz countertops & cabinetry refacing for kitchens & bathrooms.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:26:32',
                'updated_at' => '2016-03-02 19:26:32',
            ),
            25 => 
            array (
                'id' => 26,
                'title' => 'Healthmate International',
                'img' => 'BlvPYME6FOcfIuguY7mN5xJvMueI8fLk.JPG',
                'description' => 'Drug free nerve and muscle stimulators. ',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:29:09',
                'updated_at' => '2016-03-02 19:29:09',
            ),
            26 => 
            array (
                'id' => 27,
                'title' => 'Heat Depot LLC',
                'img' => 'sRGSBkuJWQgHgg4e26YgbYgFFmmlIUXH.jpg',
                'description' => 'At The Heat Depot, we make sure that our customers get the most out of what they spend from their pocket. With years of experience we cater to all your air conditioning and heating needs.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:30:56',
                'updated_at' => '2016-03-02 19:30:56',
            ),
            27 => 
            array (
                'id' => 28,
                'title' => 'Interstate Roofing',
                'img' => 'HfktzyJDypeg9dJivrlZj7m9KCKaKx0s.jpg',
                'description' => 'Interstate Roofing is pleased to be the #1 residential roofing contractor in Colorado and 13th in the nation. Through hard work and determination we continue to grow and achieve our goal of 100% customer satisfaction.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:32:50',
                'updated_at' => '2016-03-02 19:32:50',
            ),
            28 => 
            array (
                'id' => 29,
                'title' => 'K&H Home Solutions',
                'img' => 'hWg8oDIpLD1mE7AVbPEJSYWxqdUNIzUn.JPG',
                'description' => '60 years of Colorado home improvement.',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-02 19:36:51',
                'updated_at' => '2016-03-02 19:36:51',
            ),
            29 => 
            array (
                'id' => 30,
                'title' => 'Linen\'s Wholesale',
                'img' => 'b0VZd9YUwDxdns2ucwRQuolSHN3XIdED.jpg',
                'description' => '1000+ Wholesale Linen Tablecloths. Save Up To 60% Off Linens. Buy Now! Categories: Tablecloths, Table Runner, Overlays, Linen Napkins, Dresses…',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:38:15',
                'updated_at' => '2016-03-02 19:38:15',
            ),
            30 => 
            array (
                'id' => 31,
                'title' => 'Lustre Craft',
                'img' => 'XtmPJEV1egcnsO7rCRAYutbhgzc842td.png',
                'description' => 'Lustre Craft has been manufacturing 100% American made waterless cookware for over 100 years. Invest in quality American made vs foreign made.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:40:23',
                'updated_at' => '2016-03-02 19:40:23',
            ),
            31 => 
            array (
                'id' => 32,
                'title' => 'Mattress Firm',
                'img' => 'BWTB0MLjIu7SlCAJCQfc4jMk2Ww1mNYv.jpg',
                'description' => 'Mattress buying made easy with lowest price and comfort guarantee. Compare brands, costs & reviews. ',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:42:21',
                'updated_at' => '2016-03-02 19:42:21',
            ),
            32 => 
            array (
                'id' => 33,
                'title' => 'Old Dominion Turf',
                'img' => 'NPkoYO5YwfbKqwh2yti4ewNqFZrfpTyO.JPG',
                'description' => 'Are you ready to stop wasting your time and money on your dead lawn? Sick of paying the water bill? Does your lawn rule you or do you rule it? It\'s time to take back your yard with Dominion Turf. Make the switch to a beautiful, realistic, hassle free synt',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:46:29',
                'updated_at' => '2016-03-02 19:46:29',
            ),
            33 => 
            array (
                'id' => 34,
                'title' => 'Peak Structural',
                'img' => 'XdNkQiejpvQ5PlbqTbthqHqzM7apmSQk.JPG',
                'description' => 'Peak Structural is your trusted Residential and Commercial Foundation Repair contractor in Colorado. Call us Today for an estimate!',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:48:51',
                'updated_at' => '2016-03-02 19:48:51',
            ),
            34 => 
            array (
                'id' => 35,
                'title' => 'Petrali Roofing',
                'img' => 'Qt2bvIN52BTniHwMJ1FCLblylewxnC8w.JPG',
                'description' => 'When in search of a reliable commercial or residential roofing contractor in Colorado Springs or surrounding areas such as Castle Rock and Pueblo, finding an experienced company can make all the difference to ultimate success of a project. That’s why so m',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 19:50:37',
                'updated_at' => '2016-03-02 19:50:37',
            ),
            35 => 
            array (
                'id' => 36,
                'title' => 'Pure Water Solutions',
                'img' => 'oEY931uPvS5Z4lAR9uURrQjUSlTLshgD.jpg',
                'description' => 'Pure Water Solutions Inc. is an independently owned and operated commercial and industrial water treatment company. We have custom designed water treatment applications for many industries...',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:54:47',
                'updated_at' => '2016-03-02 19:54:47',
            ),
            36 => 
            array (
                'id' => 37,
                'title' => 'Quick\'n Brite',
                'img' => 'dvzueeh3vEqzhtooI8EeN5RAf7OlkzPm.gif',
                'description' => 'Quick \'n Brite has been pioneering the way in environmentally safe cleaners for over 56 years. The unique blends of non-toxic and biodegradable ingredients are eco-friendly, yet strong enough for the worst stains and messes. They make cleaning a breeze wh',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:56:23',
                'updated_at' => '2016-03-02 19:56:23',
            ),
            37 => 
            array (
                'id' => 38,
                'title' => 'Salad Masters',
                'img' => '3RywmHOEqPzv18emXIe6M6aLVMorkACb.jpg',
                'description' => 'Saladmaster offers a cooking system that has inspired generations of culinary enthusiasts. Whether you’re new to the kitchen – or a seasoned expert – you’ll appreciate products engineered for superior performance and strength.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 19:57:54',
                'updated_at' => '2016-03-02 19:57:54',
            ),
            38 => 
            array (
                'id' => 39,
                'title' => 'Seamless Choice Siding',
                'img' => 'f6LwDc2mtONuJ8lnCRU9vjAg7sQVeOg2.jpg',
                'description' => 'Are you ready to fall in love with your home all over again? Seamless Choice offers a variety of siding options that will increase your home’s beauty and value.',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-02 19:59:58',
                'updated_at' => '2016-03-02 19:59:58',
            ),
            39 => 
            array (
                'id' => 40,
                'title' => 'Serenity Falls',
                'img' => '07jzxz8itLjqEc2UL7QyK7z5kRYhz9pw.jpg',
                'description' => 'We feel the most important things you should know about our company, is  that we offer the best customer service in our industry with the highest quality of service. We think that after you get to know us just a little, you\'ll say, "Serenity Falls in Colo',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 20:01:07',
                'updated_at' => '2016-03-02 20:01:07',
            ),
            40 => 
            array (
                'id' => 41,
                'title' => 'Sogno Toscano',
                'img' => 'WQbKOYpviS8yPf77mCDWpuvBR1HZmXyb.jpg',
                'description' => 'Olive oil is Sogno Toscano.  Sogno Toscano is olive oil.  The tradition where everything has started.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 20:05:01',
                'updated_at' => '2016-03-02 20:05:01',
            ),
            41 => 
            array (
                'id' => 42,
                'title' => 'Steel Structures America',
                'img' => 'cHsSGiDsQ2pjedVhH84opH4viQ0foz8F.jpg',
                'description' => 'The foundation of our company was built on a solid reputation.  We are the largest, most experienced post frame steel building contractor in the northwest.  ',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 20:07:05',
                'updated_at' => '2016-03-02 20:07:05',
            ),
            42 => 
            array (
                'id' => 43,
                'title' => 'Sun Fun Pool Outlet',
                'img' => 'JqCTqREZyV8a2uo6SOsJTd8buGcQU9Yp.jpg',
                'description' => 'Make a splash this summer with your new toy from Sun Fun Pool Outlet!',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 20:10:00',
                'updated_at' => '2016-03-02 20:10:00',
            ),
            43 => 
            array (
                'id' => 44,
                'title' => 'Technifi Me',
                'img' => '9JCi6IRgPhh2sRuFfbxRzu64CfRf4aZN.jpg',
                'description' => 'Listen to your music with the most modern technology.',
                'tags' => 'gadgets',
                'created_at' => '2016-03-02 20:11:39',
                'updated_at' => '2016-03-02 20:11:39',
            ),
            44 => 
            array (
                'id' => 45,
                'title' => 'Time Share Exit Team',
                'img' => 'wG20Mk2FCfOFYxfHmjjpjLzWzDaIXiu7.jpg',
                'description' => 'We help timeshare owners get rid of their timeshares. We are NOT a resale or donation company. We work with timeshare companies to dissolve your contract. Done. Over with. Forever.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 20:13:28',
                'updated_at' => '2016-03-02 20:13:28',
            ),
            45 => 
            array (
                'id' => 46,
            'title' => 'Vivax Pro Painters (Scott Bondy)',
                'img' => '8P8nqSErP79bqMKXIjBBcUbjCPSqC6dq.jpg',
                'description' => 'Vivax Pros sought to raise the bar in the home service industry over a decade ago. There was a need in the industry to do a few things with a higher level of integrity: do what you promise, be on time, estimate honestly and fairly and treat the clients ho',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 20:15:15',
                'updated_at' => '2016-03-02 20:15:15',
            ),
            46 => 
            array (
                'id' => 47,
                'title' => 'Waterworks',
                'img' => 'uzXmj76vkvUmeaHW9iTqY8xjSxlb9z0K.jpg',
                'description' => 'Sculptural forms that defy the ordinary. Unexpected geometry and the transition of the planes create a subtle but warm expression.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 20:17:21',
                'updated_at' => '2016-03-02 20:17:21',
            ),
            47 => 
            array (
                'id' => 48,
                'title' => 'Webster Enterprises',
                'img' => 'IJa4V4rGaS03Hb6Xr905B44WKsTtDlMS.jpg',
                'description' => 'WEBSTER ENTERPRISES provides strategic planning, investment analysis, as well as marketing, sales, and advisory services to its clients, customers and portfolio of diverse companies that focus on lifestyle and life enrichment',
                'tags' => 'gadgets',
                'created_at' => '2016-03-02 20:19:59',
                'updated_at' => '2016-03-02 20:19:59',
            ),
            48 => 
            array (
                'id' => 49,
                'title' => '5280 Gourmet',
                'img' => 'YbIXBryzFMhdG3W4crsNoTzEnn7wLgCA.jpg',
                'description' => 'Welcome to 5280Gourmet . We specialize in Colorado gourmet gift baskets , as well as American and European gourmet gifts . We offer Same day delivery in Metro Denver for most items , and Ship Nationwide. ',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 20:44:04',
                'updated_at' => '2016-03-02 20:44:04',
            ),
            49 => 
            array (
                'id' => 50,
                'title' => 'Althoff Family Chiropractic',
                'img' => 'e6M3WdXl30kTnXFlWvSnHx4pvY6FSm3D.jpg',
                'description' => 'Windsor Colorado Chiropractor Dr. Jill Althoff and her team are committed to bringing the world better health and a better way of life by teaching and practicing the true principles of chiropractic care.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 20:45:38',
                'updated_at' => '2016-03-02 20:45:38',
            ),
            50 => 
            array (
                'id' => 51,
                'title' => 'Bigfoot Turf',
                'img' => 'VMTKdeF9runja938AdbhXsHm28ITZPsm.jpg',
                'description' => 'Since 1980 Bigfoot Turf has been Northern Colorado’s premier turf grass producer. We are a family owned and operated business with “roots” that go deep into the local community. ',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 20:46:57',
                'updated_at' => '2016-03-02 20:46:57',
            ),
            51 => 
            array (
                'id' => 52,
                'title' => 'Budget Blinds',
                'img' => 'ImuoKiPdfpgYHOzmFnherN7YvloF6jRE.jpg',
                'description' => 'Budget Blinds provides the best custom window treatments for your home including blinds, shutters, shades and drapes',
                'tags' => '',
                'created_at' => '2016-03-02 20:48:01',
                'updated_at' => '2016-03-02 20:48:01',
            ),
            52 => 
            array (
                'id' => 53,
                'title' => 'College Pro Painters',
                'img' => 'VvhqVmTIuGXcpc1VGR29DiVI8aRmBBKq.png',
                'description' => 'connecting student entrepreneurs and homeowners since 1971',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-02 20:49:14',
                'updated_at' => '2016-03-02 20:49:14',
            ),
            53 => 
            array (
                'id' => 54,
                'title' => 'Colorado Crazy',
                'img' => 'XjrIyDNi2TdbrJpANCtKXjB7E0daJ4q7.jpg',
                'description' => 'Premium Wine and Cocktail Mixes',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-02 20:52:01',
                'updated_at' => '2016-03-02 20:52:01',
            ),
            54 => 
            array (
                'id' => 55,
                'title' => 'Denali Roofing',
                'img' => 'Xoib2AG60Kh5x3IOJBtjlYJDQmnRZHWh.JPG',
                'description' => 'Professional roofers offering residential and commercial roofing service and maintenance for clients across Fort Collins and Loveland. Free Estimates!',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 22:00:25',
                'updated_at' => '2016-03-02 22:00:25',
            ),
            55 => 
            array (
                'id' => 56,
                'title' => 'Gateway Family Chiropractic',
                'img' => 'xhsvEQbQ6HG1KxdoGoyOJdAMZmHhNuFX.JPG',
                'description' => 'Dr. Dave is philosophically chiropractic rooted in alternative, whole body care. Dr. Dave has received extensive training in several techniques....',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 22:04:47',
                'updated_at' => '2016-03-02 22:04:47',
            ),
            56 => 
            array (
                'id' => 57,
                'title' => 'Hoover Painting',
                'img' => 'NBTYpMlSmsjP8U6DVExVuSBz0BpQFb49.jpg',
                'description' => 'The Bowling family has been serving the paint needs of homeowners and contractors in Rutherford County since 1962. Our family is committed in continuing to provide true quality service.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 22:06:24',
                'updated_at' => '2016-03-02 22:06:24',
            ),
            57 => 
            array (
                'id' => 58,
                'title' => 'Intense Nutrition',
                'img' => 'k1tQO0QhC3dew2JFfZkC75QizR3Puo1U.jpg',
                'description' => 'Intense Nutrition carries an extensive line of weight training supplements, herbal remedies, weight loss products and health maintenance products for all ages.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 22:08:47',
                'updated_at' => '2016-03-02 22:08:47',
            ),
            58 => 
            array (
                'id' => 59,
                'title' => 'Mosquito Joe of the Rockies',
                'img' => 'TdjSJXpZFBHwxXcnbwmzS8wHh5sNLQDS.jpg',
                'description' => 'Welcome to Mosquito Joe of the Rockies. When it\'s mosquito season in Colorado, it\'s tempting to hide inside. Mosquitoes ruin outdoor fun and expose us to ...',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 22:11:01',
                'updated_at' => '2016-03-02 22:11:01',
            ),
            59 => 
            array (
                'id' => 60,
                'title' => 'Mountain Mist Spas',
                'img' => 'eojXYBOXkYFx4zULCT2LVSvVkrCKFgjY.JPG',
                'description' => 'Mountain Mist Spas in Fort Collins Colorado offer over 20 quality spa and hot tub models, saunas, gazebos, grills, spa parts and service spas and hot tubs.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 22:13:41',
                'updated_at' => '2016-03-02 22:13:41',
            ),
            60 => 
            array (
                'id' => 61,
                'title' => 'Select Comfort',
                'img' => 'PXwGWzNI28gXIuncUE0zub5KphjosqnW.jpg',
                'description' => 'Select Comfort is a U.S.-based manufacturer that manufactures the Sleep Number bed as well as foundations and bedding accessories.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 22:15:10',
                'updated_at' => '2016-03-02 22:15:10',
            ),
            61 => 
            array (
                'id' => 62,
                'title' => 'Star Wireless',
                'img' => '2AjjGGlOOKKzUBbCTBIKqw3Ju4x2vRyW.JPG',
                'description' => 'Getting your device repaired shouldn’t break the bank. Our low price guarantee ensures that we always offer the best price to our customers. Just bring in any local competitor’s published price for the same repair, and we will happily match and beat their',
                'tags' => 'gadgets',
                'created_at' => '2016-03-02 22:17:10',
                'updated_at' => '2016-03-02 22:17:10',
            ),
            62 => 
            array (
                'id' => 63,
                'title' => 'Team Windows',
                'img' => 'gLsAtGSaj1cOU9QbQtU99ssbDK45o3s2.jpg',
                'description' => 'Energy efficient window upgrades, replacement, and installation throughout the nation from the experts at Team Window by Beldon Home Solutions.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-02 22:18:59',
                'updated_at' => '2016-03-02 22:18:59',
            ),
            63 => 
            array (
                'id' => 64,
                'title' => 'Waddell and Reed',
                'img' => '02rCVsvsn8AFNXC0rJquvoMPiHfWmwSH.jpg',
                'description' => 'Waddell & Reed Financial, Inc. is an American asset management and financial planning company founded in 1937.',
                'tags' => 'indoor',
                'created_at' => '2016-03-02 22:20:49',
                'updated_at' => '2016-03-02 22:20:49',
            ),
            64 => 
            array (
                'id' => 65,
                'title' => 'Starr International Trading',
                'img' => 's7lOf4c3mfKZgRDCV9qhXxCc4keVTlHo.png',
                'description' => 'Starr International Trading, Inc. was started in 2003 by Malin and Francois Starr with the vision of creating a quality company to manufacture and promote innovative products.',
                'tags' => 'gadgets',
                'created_at' => '2016-03-02 22:23:32',
                'updated_at' => '2016-03-02 22:23:32',
            ),
            65 => 
            array (
                'id' => 66,
                'title' => 'Academy of Natural Therapy',
                'img' => '9xW1y7SfUbkEqOpfMY0BhKAlEZOEnt7D.PNG',
                'description' => 'When you are a Massage Therapist, every day is rewarding. The Bureau of Labor Statistics projects Massage Therapist employment growth of 24%  2014 -2024.',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 18:37:53',
                'updated_at' => '2016-03-03 18:37:53',
            ),
            66 => 
            array (
                'id' => 67,
                'title' => 'Apex Home Performance',
                'img' => 'cGrskd9rj5osF2cNZNXooGRTUPcljwuN.jpg',
                'description' => 'Let us help you with your home comfort issues!',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 18:40:04',
                'updated_at' => '2016-03-03 18:40:04',
            ),
            67 => 
            array (
                'id' => 68,
            'title' => 'Bath Planet (Accessible Systems)',
                'img' => 'LO14yacIPR2yFV3lGADDIUSJwCsDaq07.jpg',
                'description' => 'We Make Bathing Safer and Easier From walk-in tubs, to tub-to-shower conversions and more, we’ve got a bath or shower to meet any need.',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 18:42:22',
                'updated_at' => '2016-03-03 18:42:22',
            ),
            68 => 
            array (
                'id' => 69,
                'title' => 'Colorado Sunroom and Window',
                'img' => 'J5E5xMpeR8SqcQJya9WF2xeiOg79Zag8.gif',
                'description' => 'We are the Denver representative for Four Seasons Sunrooms, manufactured in Holbrook, New York. Four Seasons Solar Products are the largest manufacturer of passive solar and energy efficient glass structures on earth.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-03 18:45:39',
                'updated_at' => '2016-03-03 18:45:39',
            ),
            69 => 
            array (
                'id' => 70,
                'title' => 'Costco ',
                'img' => 'hJkwmn5ShpRgZDaYWB61udaAK2A5FkQv.jpg',
                'description' => 'Costco Wholesale Corporation is an American membership-only warehouse club that provides a wide selection of merchandise. It is currently the largest membership-only warehouse club in the United States',
                'tags' => 'indoor, outdoor',
                'created_at' => '2016-03-03 18:50:57',
                'updated_at' => '2016-03-03 18:50:57',
            ),
            70 => 
            array (
                'id' => 71,
                'title' => 'Culligan',
                'img' => 'L4R3gie0zTNkwd0Ki6JxkvbBHUPLGUVU.jpg',
                'description' => 'Culligan Of Denver Offers Variety Of Water Solutions Including Reverse Osmosis, Bottled Water, Water Delivery In Denver For Both Residential And Commercial ...',
                'tags' => 'outdoor, indoor',
                'created_at' => '2016-03-03 18:54:38',
                'updated_at' => '2016-03-03 18:54:38',
            ),
            71 => 
            array (
                'id' => 72,
                'title' => 'Cutarelli Vision',
                'img' => 'KdsJSGEVCGUqSTHzE96c3vOHXUy3olh4.png',
                'description' => 'Denver LASIK, cataract and cornea specialist Paul Cutarelli M.D. provides complete ophthalmology service & procedures to the residents of Denver. Cutarelli Vision is one of Colorado’s top vision correction centers. ',
                'tags' => 'indoor/ outdoor',
                'created_at' => '2016-03-03 18:59:01',
                'updated_at' => '2016-03-03 18:59:01',
            ),
            72 => 
            array (
                'id' => 73,
                'title' => 'Done By Donovan Photography',
                'img' => 'Iznb5i7ERJde6WSp0Z0yYUF6NOFEF447.PNG',
                'description' => 'If you are passionate about something and want to preserve and display that passion through printed photographic artwork, you have come to the right place.  You can expect to receive uniquely crafted photographic art that you will proudly hang on your wal',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 19:10:08',
                'updated_at' => '2016-03-03 19:10:08',
            ),
            73 => 
            array (
                'id' => 74,
                'title' => 'dōTERRA Essential Oils',
                'img' => 'FSt0XbZuT1fPqORaNWSuVTiensFoSR7k.PNG',
                'description' => 'The dōTERRA® collection of single essential oils represents the finest aromatic extracts available in the world today. Each oil provides the living essence of its source, gently distilled from plants that are nurtured and carefully harvested throughout th',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 19:13:31',
                'updated_at' => '2016-03-03 19:15:36',
            ),
            74 => 
            array (
                'id' => 75,
                'title' => 'EcoCabins',
                'img' => '9bYwCu1dfeIiecFE1d8oQoXmzn74bJBl.PNG',
                'description' => 'EcoCabins is a human scale building company specializing in simple, smart, and sustainable homes and structures. We offer micro dwellings, tiny houses, cabins, cottages, homes, and commercial buildings that achieve affordability without sacrificing luxury',
                'tags' => 'outdoor, indoor',
                'created_at' => '2016-03-03 19:18:57',
                'updated_at' => '2016-03-03 19:18:57',
            ),
            75 => 
            array (
                'id' => 76,
                'title' => 'Everything Hot Tubz',
                'img' => '6sCyWfUSZ5gevM3yxSUa5mYE9ekPezxz.PNG',
                'description' => 'Everything Hot Tubz is Colorado’s leader in new and pre-owned spa and hot tub sales and hot tub repair services in Denver. Our staff has refurbished over 1,000 spas and hot tubs currently in service in Colorado.',
                'tags' => 'outdoor',
                'created_at' => '2016-03-03 19:21:22',
                'updated_at' => '2016-03-03 19:21:22',
            ),
            76 => 
            array (
                'id' => 77,
                'title' => 'Globe Getaways',
                'img' => 'iJaavS9fTBhhb4eYpjzMPqnwduX0H2cE.jpg',
                'description' => '"Traveling - it leaves you speechless, then turns you into a storyteller."',
                'tags' => 'outdoor',
                'created_at' => '2016-03-03 19:23:46',
                'updated_at' => '2016-03-03 19:23:46',
            ),
            77 => 
            array (
                'id' => 78,
                'title' => 'Gravina\'s Windows',
                'img' => 'bbX2yi33gcJP22BmgBhtiYZ5Xy30yOPI.jpg',
                'description' => 'Best Replacement Windows, Doors and Siding!',
                'tags' => 'outdoor, indoor',
                'created_at' => '2016-03-03 19:25:42',
                'updated_at' => '2016-03-03 19:25:42',
            ),
            78 => 
            array (
                'id' => 79,
                'title' => 'I get it Chiropractic',
                'img' => 'wo712bDpEEr0ZWBHp19nuh4Jxx3OH6Ng.jpg',
                'description' => 'Husband and wife Westminster chiropractors, Dr. RJ Gelinas and Dr. Michelle Mathiesen know the importance of keeping your family functioning at 100%. At I Get It Chiropractic, we’ll do everything possible to help you.',
                'tags' => 'outdoor, indoor',
                'created_at' => '2016-03-03 19:31:29',
                'updated_at' => '2016-03-03 19:31:29',
            ),
            79 => 
            array (
                'id' => 80,
                'title' => 'Legacy Innovations',
                'img' => 'Pg6of5kCo1V7Y53mQtOvmM9nH4IFzbSx.PNG',
                'description' => 'Inventors of the smart Tv box that allows access to any movie and Tv show from any time/date until today. Over 10,000 channels all over the globe including sorts, life, weather, and more.',
                'tags' => 'gadget',
                'created_at' => '2016-03-03 19:49:37',
                'updated_at' => '2016-03-03 19:50:32',
            ),
            80 => 
            array (
                'id' => 81,
                'title' => 'LifeTime Windows',
                'img' => 'Yxi0MBDHIKgN0RSTxkr2lKdWoD0SHE57.jpg',
                'description' => 'Lifetime Windows and Siding offers services to improve the efficiency and appearance of your home, including:  Windows Siding All of which are backed by our own Service Guarantee.  - See more at: http://www.hailproofsiding.com/#sthash.UtfWHACf.dpuf',
                'tags' => 'outdoor, indoor',
                'created_at' => '2016-03-03 19:53:46',
                'updated_at' => '2016-03-03 19:53:46',
            ),
            81 => 
            array (
                'id' => 82,
                'title' => 'Mallory Winters Photography',
                'img' => '8pRWIves88jUDGsse2q2PFTM1J0CrhCJ.jpg',
                'description' => '',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 19:56:15',
                'updated_at' => '2016-03-03 19:56:15',
            ),
            82 => 
            array (
                'id' => 83,
                'title' => 'My Green Home',
                'img' => 'M6gObRdKwF6evmQO0fnNV7wJ5x2smMXA.jpg',
                'description' => 'My Green Home is a family owned and operated business located in Carlsbad, California and Denver, Colorado. As a whole, our Family locations have installed over 22,000 whole house fans! With over 20 years of experience, My Green Home takes great joy in se',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 19:58:18',
                'updated_at' => '2016-03-03 19:58:18',
            ),
            83 => 
            array (
                'id' => 84,
                'title' => 'Natural Living Foundation',
                'img' => 'eR1hXcVyHaMyGXcrYEATLzpE4a5RJH9r.jpg',
                'description' => 'Our on-site Chair Massage Therapy program promotes health & wellness, prevents injury and reduces stress for staff and management.',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 20:00:42',
                'updated_at' => '2016-03-03 20:00:42',
            ),
            84 => 
            array (
                'id' => 85,
                'title' => 'Profashion',
                'img' => 'TfJ9kZMDxgLOe6PZLBEpMRo7XTQGyz40.PNG',
                'description' => 'Profashion offers the ultimate line of Professional Hairstyling Tools. Our goal is to become the leading brand in the Hairstyling and Professional Salon industries. Our Mission is to provide our customers with exceptional customer service and satisfaction',
                'tags' => 'gadget',
                'created_at' => '2016-03-03 20:03:44',
                'updated_at' => '2016-03-03 20:03:44',
            ),
            85 => 
            array (
                'id' => 86,
                'title' => 'Quality Interior Solutions',
                'img' => 'pnu6kUOvoP4jDsXORAtaIYer2OEkTK9j.PNG',
            'description' => 'Quality Interior Solutions (QIS) in Denver is the answer to your flooring needs. Our mission is to bring homes and businesses in the Front Range area a more efficient interior design process to complete projects, on time and under budget, without sacrific',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 20:07:06',
                'updated_at' => '2016-03-03 20:07:06',
            ),
            86 => 
            array (
                'id' => 87,
                'title' => 'Renew Crew of Castle Rock',
                'img' => 'HeYISiJFzk9YfMJJkBmlRxsDHssRSkji.PNG',
                'description' => 'We’re your local source for gutter, siding, patio and deck cleaning in the Castle Rock area. Our effective and environmentally friendly 3-step process lifts built-up outdoor dirt and grime to the surface and washes it away, leaving your outdoor living spa',
                'tags' => 'outdoor',
                'created_at' => '2016-03-03 20:10:57',
                'updated_at' => '2016-03-03 20:10:57',
            ),
            87 => 
            array (
                'id' => 88,
                'title' => 'Schlossadler Wine',
                'img' => '4RL9J07lhjhzNCoXquvSODiS6CJFa205.jpg',
                'description' => 'Schlossadler, a US importer, provides this overview of the regions and the grape varieties.',
                'tags' => 'outdoor, indoor',
                'created_at' => '2016-03-03 20:26:38',
                'updated_at' => '2016-03-03 20:26:38',
            ),
            88 => 
            array (
                'id' => 89,
                'title' => 'Streak Free',
                'img' => 'qrJ13wUoMdxXkpYRuhN0UqhCVEQXXz5x.jpg',
                'description' => 'Got Streaks? Get a StreakFree!   StreakFree NEXT Generation Original Microfiber Streakfree Streakless Wiper   The Easiest and Best Cleaning and Polishing Cloth Ever!',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 20:30:00',
                'updated_at' => '2016-03-03 20:30:00',
            ),
            89 => 
            array (
                'id' => 90,
                'title' => 'System Pavers',
                'img' => 'yDoZ5QUIxT7fpmOa4eQm1moIjt62jQXf.PNG',
                'description' => 'Experience the enduring value and long-lasting beauty of interlocking paving stones and allow System Pavers to redefine your idea of outdoor living. Each driveway, walkway, patio, and pool deck design is uniquely customized to fit the personal style and p',
                'tags' => 'outdoor',
                'created_at' => '2016-03-03 20:33:51',
                'updated_at' => '2016-03-03 20:33:51',
            ),
            90 => 
            array (
                'id' => 91,
                'title' => 'T-Zone Vibrations',
                'img' => 'j9zwPl0Z9DqtXvD83V1EIBJW6WMPqk75.PNG',
                'description' => 'State-of-the-art Whole Body Vibration machine that brings some global firsts to vibration training including aerobic capabilities and Max Interval Training™.',
                'tags' => 'indoor',
                'created_at' => '2016-03-03 20:49:02',
                'updated_at' => '2016-03-03 20:49:02',
            ),
            91 => 
            array (
                'id' => 92,
                'title' => 'ODI TV ',
                'img' => 'dNVB0XbIUU1diofuqcKMUdlnv0ptM2UA.jpg',
                'description' => 'ODI TV Provides Legal Access to Unauthorized TV',
                'tags' => 'gadgets',
                'created_at' => '2016-03-16 23:59:05',
                'updated_at' => '2016-03-16 23:59:05',
            ),
        ));
        
        
    }
}
