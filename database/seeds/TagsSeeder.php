<?php

use App\Models\InterfaceObjects\Tag;
use Illuminate\Database\Seeder;

class TagsSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->tags as $key => $value) {
                Tag::create($value);
            }
    }
 
    public $tags = 
    [ 
            [ 'name' => 'ALABAMA',               'value' => 'AL',                   'type' => 'location'  ],
            [ 'name' => 'ALASKA',                'value' => 'AK',                   'type' => 'location'  ],
            [ 'name' => 'ARIZONA',               'value' => 'AZ',                   'type' => 'location'  ],
            [ 'name' => 'ARKANSAS',              'value' => 'AR',                   'type' => 'location'  ],
            [ 'name' => 'CALIFORNIA',            'value' => 'CA',                   'type' => 'location'  ],
            [ 'name' => 'COLORADO',              'value' => 'CO',                   'type' => 'location'  ],
            [ 'name' => 'CONNECTICUT',           'value' => 'CT',                   'type' => 'location'  ],
            [ 'name' => 'DELAWARE',              'value' => 'DE',                   'type' => 'location'  ],
            [ 'name' => 'DISTRICT OF COLUMBIA',  'value' => 'DC',                   'type' => 'location'  ],
            [ 'name' => 'FLORIDA',               'value' => 'FL',                   'type' => 'location'  ],
            [ 'name' => 'GEORGIA',               'value' => 'GA',                   'type' => 'location'  ],
            [ 'name' => 'HAWAII',                'value' => 'HI',                   'type' => 'location'  ],
            [ 'name' => 'IDAHO',                 'value' => 'ID',                   'type' => 'location'  ],
            [ 'name' => 'ILLINOIS',              'value' => 'IL',                   'type' => 'location'  ],
            [ 'name' => 'INDIANA',               'value' => 'IN',                   'type' => 'location'  ],
            [ 'name' => 'IOWA',                  'value' => 'IA',                   'type' => 'location'  ],
            [ 'name' => 'KANSAS',                'value' => 'KS',                   'type' => 'location'  ],
            [ 'name' => 'KENTUCKY',              'value' => 'KY',                   'type' => 'location'  ],
            [ 'name' => 'LOUISIANA',             'value' => 'LA',                   'type' => 'location'  ],
            [ 'name' => 'MAINE',                 'value' => 'ME',                   'type' => 'location'  ],
            [ 'name' => 'MARYLAND',              'value' => 'MD',                   'type' => 'location'  ],
            [ 'name' => 'MASSACHUSETTS',         'value' => 'MA',                   'type' => 'location'  ],
            [ 'name' => 'MICHIGAN',              'value' => 'MI',                   'type' => 'location'  ],
            [ 'name' => 'MINNESOTA',             'value' => 'MN',                   'type' => 'location'  ],
            [ 'name' => 'MISSISSIPPI',           'value' => 'MS',                   'type' => 'location'  ],
            [ 'name' => 'MISSOURI',              'value' => 'MO',                   'type' => 'location'  ],
            [ 'name' => 'MONTANA',               'value' => 'MT',                   'type' => 'location'  ],
            [ 'name' => 'NEBRASKA',              'value' => 'NE',                   'type' => 'location'  ],
            [ 'name' => 'NEVADA',                'value' => 'NV',                   'type' => 'location'  ],
            [ 'name' => 'NEW HAMPSHIRE',         'value' => 'NH',                   'type' => 'location'  ],
            [ 'name' => 'NEW JERSEY',            'value' => 'NJ',                   'type' => 'location'  ],
            [ 'name' => 'NEW MEXICO',            'value' => 'NM',                   'type' => 'location'  ],
            [ 'name' => 'NEW YORK',              'value' => 'NY',                   'type' => 'location'  ],
            [ 'name' => 'NORTH CAROLINA',        'value' => 'NC',                   'type' => 'location'  ],
            [ 'name' => 'NORTH DAKOTA',          'value' => 'ND',                   'type' => 'location'  ],
            [ 'name' => 'OHIO',                  'value' => 'OH',                   'type' => 'location'  ],
            [ 'name' => 'OKLAHOMA',              'value' => 'OK',                   'type' => 'location'  ],
            [ 'name' => 'OREGON',                'value' => 'OR',                   'type' => 'location'  ],
            [ 'name' => 'PENNSYLVANIA',          'value' => 'PA',                   'type' => 'location'  ],
            [ 'name' => 'PUERTO RICO',           'value' => 'PR',                   'type' => 'location'  ],
            [ 'name' => 'RHODE ISLAND',          'value' => 'RI',                   'type' => 'location'  ],
            [ 'name' => 'SOUTH CAROLINA',        'value' => 'SC',                   'type' => 'location'  ],
            [ 'name' => 'SOUTH DAKOTA',          'value' => 'SD',                   'type' => 'location'  ],
            [ 'name' => 'TENNESSEE',             'value' => 'TN',                   'type' => 'location'  ],
            [ 'name' => 'TEXAS',                 'value' => 'TX',                   'type' => 'location'  ],
            [ 'name' => 'UTAH',                  'value' => 'UT',                   'type' => 'location'  ],
            [ 'name' => 'VERMONT',               'value' => 'VT',                   'type' => 'location'  ],
            [ 'name' => 'VIRGINIA',              'value' => 'VA',                   'type' => 'location'  ],
            [ 'name' => 'WASHINGTON',            'value' => 'WA',                   'type' => 'location'  ],
            [ 'name' => 'WEST VIRGINIA',         'value' => 'WV',                   'type' => 'location'  ],
            [ 'name' => 'WISCONSIN',             'value' => 'WI',                   'type' => 'location'  ],
            [ 'name' => 'WYOMING',               'value' => 'WY',                   'type' => 'location'  ],
            [ 'name' => 'Frosted Leaf',          'value' => 'frosted_leaf',         'type' => 'company'   ],
            [ 'name' => 'Medicine Man',          'value' => 'medicine_man',         'type' => 'company'   ],
            [ 'name' => 'The Green Solution',    'value' => 'the_green_solution',   'type' => 'company'   ],
            [ 'name' => 'Manager',               'value' => 'manager',              'type' => 'position'  ],
            [ 'name' => 'Owner',                 'value' => 'owner',                'type' => 'position'  ],
            [ 'name' => 'Grower',                'value' => 'grower',               'type' => 'position'  ],
            [ 'name' => 'Budtender',             'value' => 'budtender',            'type' => 'position'  ],
            [ 'name' => 'Denver',                'value' => 'denver',               'type' => 'location'  ],
            [ 'name' => 'Boulder',               'value' => 'boulder',              'type' => 'location'  ],
            [ 'name' => 'Colorado',              'value' => 'colorado',             'type' => 'location'  ],
            [ 'name' => 'Washington',            'value' => 'washington',           'type' => 'location'  ]
    ];

    
}