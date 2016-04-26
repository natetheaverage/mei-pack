<?php

use Illuminate\Database\Seeder;

class TicketitSettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('ticketit_settings')->delete();
        
        \DB::table('ticketit_settings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'lang' => NULL,
                'slug' => 'main_route',
                'value' => 'tickets',
                'default' => 'tickets',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            1 => 
            array (
                'id' => 2,
                'lang' => NULL,
                'slug' => 'main_route_path',
                'value' => 'tickets',
                'default' => 'tickets',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            2 => 
            array (
                'id' => 3,
                'lang' => NULL,
                'slug' => 'admin_route',
                'value' => 'tickets-admin',
                'default' => 'tickets-admin',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            3 => 
            array (
                'id' => 4,
                'lang' => NULL,
                'slug' => 'admin_route_path',
                'value' => 'tickets-admin',
                'default' => 'tickets-admin',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            4 => 
            array (
                'id' => 5,
                'lang' => NULL,
                'slug' => 'master_template',
                'value' => 'master',
                'default' => 'master',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            5 => 
            array (
                'id' => 6,
                'lang' => NULL,
                'slug' => 'email.template',
                'value' => 'ticketit::emails.templates.ticketit',
                'default' => 'ticketit::emails.templates.ticketit',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            6 => 
            array (
                'id' => 7,
                'lang' => NULL,
                'slug' => 'email.header',
                'value' => 'Ticket Update',
                'default' => 'Ticket Update',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            7 => 
            array (
                'id' => 8,
                'lang' => NULL,
                'slug' => 'email.signoff',
                'value' => 'Thank you for your patience!',
                'default' => 'Thank you for your patience!',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            8 => 
            array (
                'id' => 9,
                'lang' => NULL,
                'slug' => 'email.signature',
                'value' => 'Your friends',
                'default' => 'Your friends',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            9 => 
            array (
                'id' => 10,
                'lang' => NULL,
                'slug' => 'email.dashboard',
                'value' => 'My Dashboard',
                'default' => 'My Dashboard',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            10 => 
            array (
                'id' => 11,
                'lang' => NULL,
                'slug' => 'email.google_plus_link',
                'value' => '#',
                'default' => '#',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            11 => 
            array (
                'id' => 12,
                'lang' => NULL,
                'slug' => 'email.facebook_link',
                'value' => '#',
                'default' => '#',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            12 => 
            array (
                'id' => 13,
                'lang' => NULL,
                'slug' => 'email.twitter_link',
                'value' => '#',
                'default' => '#',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            13 => 
            array (
                'id' => 14,
                'lang' => NULL,
                'slug' => 'email.footer',
                'value' => 'Powered by Ticketit',
                'default' => 'Powered by Ticketit',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            14 => 
            array (
                'id' => 15,
                'lang' => NULL,
                'slug' => 'email.footer_link',
                'value' => 'https://github.com/thekordy/ticketit',
                'default' => 'https://github.com/thekordy/ticketit',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            15 => 
            array (
                'id' => 16,
                'lang' => NULL,
                'slug' => 'email.color_body_bg',
                'value' => '#FFFFFF',
                'default' => '#FFFFFF',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            16 => 
            array (
                'id' => 17,
                'lang' => NULL,
                'slug' => 'email.color_header_bg',
                'value' => '#44B7B7',
                'default' => '#44B7B7',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            17 => 
            array (
                'id' => 18,
                'lang' => NULL,
                'slug' => 'email.color_content_bg',
                'value' => '#F46B45',
                'default' => '#F46B45',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            18 => 
            array (
                'id' => 19,
                'lang' => NULL,
                'slug' => 'email.color_footer_bg',
                'value' => '#414141',
                'default' => '#414141',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            19 => 
            array (
                'id' => 20,
                'lang' => NULL,
                'slug' => 'email.color_button_bg',
                'value' => '#AC4D2F',
                'default' => '#AC4D2F',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            20 => 
            array (
                'id' => 21,
                'lang' => NULL,
                'slug' => 'default_status_id',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            21 => 
            array (
                'id' => 22,
                'lang' => NULL,
                'slug' => 'default_close_status_id',
                'value' => '0',
                'default' => '0',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            22 => 
            array (
                'id' => 23,
                'lang' => NULL,
                'slug' => 'default_reopen_status_id',
                'value' => '0',
                'default' => '0',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            23 => 
            array (
                'id' => 24,
                'lang' => NULL,
                'slug' => 'paginate_items',
                'value' => '10',
                'default' => '10',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            24 => 
            array (
                'id' => 25,
                'lang' => NULL,
                'slug' => 'length_menu',
                'value' => 'a:2:{i:0;a:3:{i:0;i:10;i:1;i:50;i:2;i:100;}i:1;a:3:{i:0;i:10;i:1;i:50;i:2;i:100;}}',
                'default' => 'a:2:{i:0;a:3:{i:0;i:10;i:1;i:50;i:2;i:100;}i:1;a:3:{i:0;i:10;i:1;i:50;i:2;i:100;}}',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            25 => 
            array (
                'id' => 26,
                'lang' => NULL,
                'slug' => 'status_notification',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            26 => 
            array (
                'id' => 27,
                'lang' => NULL,
                'slug' => 'comment_notification',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            27 => 
            array (
                'id' => 28,
                'lang' => NULL,
                'slug' => 'queue_emails',
                'value' => '0',
                'default' => '0',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            28 => 
            array (
                'id' => 29,
                'lang' => NULL,
                'slug' => 'assigned_notification',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            29 => 
            array (
                'id' => 30,
                'lang' => NULL,
                'slug' => 'agent_restrict',
                'value' => '0',
                'default' => '0',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            30 => 
            array (
                'id' => 31,
                'lang' => NULL,
                'slug' => 'close_ticket_perm',
                'value' => 'a:3:{s:5:"owner";b:1;s:5:"agent";b:1;s:5:"admin";b:1;}',
                'default' => 'a:3:{s:5:"owner";b:1;s:5:"agent";b:1;s:5:"admin";b:1;}',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            31 => 
            array (
                'id' => 32,
                'lang' => NULL,
                'slug' => 'reopen_ticket_perm',
                'value' => 'a:3:{s:5:"owner";b:1;s:5:"agent";b:1;s:5:"admin";b:1;}',
                'default' => 'a:3:{s:5:"owner";b:1;s:5:"agent";b:1;s:5:"admin";b:1;}',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            32 => 
            array (
                'id' => 33,
                'lang' => NULL,
                'slug' => 'delete_modal_type',
                'value' => 'builtin',
                'default' => 'builtin',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            33 => 
            array (
                'id' => 34,
                'lang' => NULL,
                'slug' => 'editor_enabled',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            34 => 
            array (
                'id' => 35,
                'lang' => NULL,
                'slug' => 'include_font_awesome',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            35 => 
            array (
                'id' => 36,
                'lang' => NULL,
                'slug' => 'summernote_locale',
                'value' => 'en',
                'default' => 'en',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            36 => 
            array (
                'id' => 37,
                'lang' => NULL,
                'slug' => 'editor_html_highlighter',
                'value' => '1',
                'default' => '1',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            37 => 
            array (
                'id' => 38,
                'lang' => NULL,
                'slug' => 'codemirror_theme',
                'value' => 'monokai',
                'default' => 'monokai',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            38 => 
            array (
                'id' => 39,
                'lang' => NULL,
                'slug' => 'summernote_options_json_file',
                'value' => 'vendor/kordy/ticketit/src/JSON/summernote_init.json',
                'default' => 'vendor/kordy/ticketit/src/JSON/summernote_init.json',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
            39 => 
            array (
                'id' => 40,
                'lang' => NULL,
                'slug' => 'purifier_config',
            'value' => 'a:3:{s:15:"HTML.SafeIframe";s:4:"true";s:20:"URI.SafeIframeRegexp";s:72:"%^(http://|https://|//)(www.youtube.com/embed/|player.vimeo.com/video/)%";s:18:"URI.AllowedSchemes";a:5:{s:4:"data";b:1;s:4:"http";b:1;s:5:"https";b:1;s:6:"mailto";b:1;s:3:"ftp";b:1;}}',
            'default' => 'a:3:{s:15:"HTML.SafeIframe";s:4:"true";s:20:"URI.SafeIframeRegexp";s:72:"%^(http://|https://|//)(www.youtube.com/embed/|player.vimeo.com/video/)%";s:18:"URI.AllowedSchemes";a:5:{s:4:"data";b:1;s:4:"http";b:1;s:5:"https";b:1;s:6:"mailto";b:1;s:3:"ftp";b:1;}}',
                'created_at' => '2016-04-20 08:30:06',
                'updated_at' => '2016-04-20 08:30:06',
            ),
        ));
        
        
    }
}
