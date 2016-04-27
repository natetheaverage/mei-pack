<?php

use App\User;
use App\Tag;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{

    protected $toTruncate = [
        'conversations',
        'customers',
        'employees',
        'facilities',
        'interface_objects',
        'inventories',
        'lists',
        'mcs',
        'messages',
        'mips',
        'opcs',
        'products',
        'profiles',
        'projects',
        'tasks',
        'users',
        'roles',
        'permissions',
        'user_has_roles',
        'role_has_permissions',
        'user_has_permissions',
        'companies',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Model::unguard();
        
        DB::statement('SET FOREIGN_KEY_CHECKS = 0'); // disable foreign key constraints

        // Using iSeed no need to truncate this way 
        // foreach($this->toTruncate as $table){
        //     DB::table($table)->truncate();
        // }

        
        // $this->call('RolesSeeder'); // Need to go before Interface
        // $this->call('PermissionsSeeder');// Need to go before Roles
        // $this->call('UsersSeeder');
        // $this->call('ProfilesSeeder');
        // $this->call('EmployeesSeeder');
        // $this->call('CustomersSeeder');
        // $this->call('ConversationsSeeder');
        // $this->call('DashboardMenuSeeder');
        // $this->call('MainNavigationSeeder');
        // $this->call('RegistrationFieldsListSeeder');
        // $this->call('ProfileFieldsListSeeder');
        // $this->call('EmployeeFieldsListSeeder');
        // $this->call('CustomerFieldsListSeeder');
        // $this->call('MessagesSeeder');
        // $this->call('InventoriesSeeder');
        // $this->call('ProductsSeeder');
        // $this->call('CompaniesSeeder');
        // $this->call('FacilitiesSeeder');
        // $this->call('ListsSeeder');
        // $this->call('ProjectsSeeder');
        // $this->call('TasksSeeder');

// art iseed --force activity_log,companies,conversations,copy_texts,customers,dates,discounts,employees,events,events_dates,events_discounts,events_features,events_pdfs,events_prices,events_tickets,facilities,faqs,features,image_files,image_gallery,interface_objects,inventories,lists,mcs,memberships,menus,messages,mips,object_classes,opcs,pdf_files,pdfs,permissions,post_tag,post_user,posts,prices,products,profiles,projects,role_has_permissions,roles,subscriptions,tags,tasks,users,ticketit,ticketit_audits,ticketit_categories,ticketit_categories_users,ticketit_comments,ticketit_priorities,ticketit_settings,ticketit_statuses,tickets,user_activities,user_has_roles,user_has_permissions,users


        #iseed_start
		$this->call('UsersTableSeeder');
        $this->call('ActivityLogTableSeeder');
        $this->call('CompaniesTableSeeder');
        $this->call('ConversationsTableSeeder');
        $this->call('CopyTextsTableSeeder');
        $this->call('CustomersTableSeeder');
        $this->call('DatesTableSeeder');
        $this->call('DiscountsTableSeeder');
        $this->call('EmployeesTableSeeder');
        $this->call('EventsTableSeeder');
        $this->call('EventsDatesTableSeeder');
        $this->call('EventsDiscountsTableSeeder');
        $this->call('EventsFeaturesTableSeeder');
        $this->call('EventsPdfsTableSeeder');
        $this->call('EventsPricesTableSeeder');
        $this->call('EventsTicketsTableSeeder');
        $this->call('FacilitiesTableSeeder');
        $this->call('FaqsTableSeeder');
        $this->call('FeaturesTableSeeder');
        $this->call('ImageFilesTableSeeder');
        $this->call('ImageGalleryTableSeeder');
        $this->call('InterfaceObjectsTableSeeder');
        $this->call('InventoriesTableSeeder');
        $this->call('ListsTableSeeder');
        $this->call('McsTableSeeder');
        $this->call('MembershipsTableSeeder');
        $this->call('MenusTableSeeder');
        $this->call('MessagesTableSeeder');
        $this->call('MipsTableSeeder');
        $this->call('ObjectClassesTableSeeder');
        $this->call('OpcsTableSeeder');
        $this->call('PdfFilesTableSeeder');
        $this->call('PdfsTableSeeder');
        $this->call('PermissionsTableSeeder');
        $this->call('PostTagTableSeeder');
        $this->call('PostUserTableSeeder');
        $this->call('PostsTableSeeder');
        $this->call('PricesTableSeeder');
        $this->call('ProductsTableSeeder');
        $this->call('ProfilesTableSeeder');
        $this->call('ProjectsTableSeeder');
        $this->call('RoleHasPermissionsTableSeeder');
        $this->call('RolesTableSeeder');
        $this->call('SubscriptionsTableSeeder');
        $this->call('TagsTableSeeder');
        $this->call('TasksTableSeeder');
        $this->call('TicketitTableSeeder');
        $this->call('TicketitAuditsTableSeeder');
        $this->call('TicketitCategoriesTableSeeder');
        $this->call('TicketitCategoriesUsersTableSeeder');
        $this->call('TicketitCommentsTableSeeder');
        $this->call('TicketitPrioritiesTableSeeder');
        $this->call('TicketitSettingsTableSeeder');
        $this->call('TicketitStatusesTableSeeder');
        $this->call('TicketsTableSeeder');
        $this->call('UserActivitiesTableSeeder');
        $this->call('UserHasRolesTableSeeder');
        $this->call('UserHasPermissionsTableSeeder');
        #iseed_end



        DB::statement('SET FOREIGN_KEY_CHECKS = 1'); // enable foreign key constraints
        //Model::reguard();
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
