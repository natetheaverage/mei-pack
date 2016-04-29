<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'NateTheAverage',
                'email' => 'iam@natetheaverage.com',
                'password' => '$2y$10$zdPaYbeE3qotGQlqGtxV1.mWxKlz9GjD030slZcYsuqxzGIR3V/tK',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => '3CYnaaq6X6x80Q5U2RJsEFy2WhkV7gWGojdaLxGfnBtlQTsd1yXosaH42qap',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-26 01:52:39',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Doug.T',
                'email' => 'dougmt_98@yahoo.com',
                'password' => '$2y$10$D8TjzFiHmVdykIqY.RW3VujnxxhAFvMeDIH45VPzLDZ/CPhUME6uO',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'r92t2vbrVTUyhN61Y4RMPvBXxORHM8qF3HG9oURtaN617MaW14ON31VtTs8r',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-23 20:15:24',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Brian.T',
                'email' => 'bryanthompson@itwiseus.com',
                'password' => '$2y$10$SRqp7d3aFrNIyUsFDWPs3.plsCfYLYpIvhEUk4pUzW8GPDqeGP4Y.',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => NULL,
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Jett.Jones',
                'email' => 'demo3@natetheaverage.com',
                'password' => '$2y$10$LdEsXLsCwrtTW30RjR9ufuj50QXqakK0CLVVfr/cOG999ZpeL5lXO',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => NULL,
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'SirJude',
                'email' => 'demo4@natetheaverage.com',
                'password' => '$2y$10$/9C0QSwT6Hc0BoWR/cyYPe/c1fqZGv1jrxz67r3JVAefegrhIhSN2',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => NULL,
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Dr. Jalen Kuhic I',
                'email' => 'Turner.Jada@Herman.net',
                'password' => '$2y$10$BqJaPuwl9EQK/jfP5ujACOXhojxfCO60o0l89tumImTP16qdw.F4K',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'jOjyBwQUJi',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Renee Kohler IV',
                'email' => 'Krajcik.Maxwell@Harris.com',
                'password' => '$2y$10$Y.plExf/6C20ckwK10At3OcwyVScvL10KQ3WoRirHiEl.IEFLgEai',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'miOkzS4Kei',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Jett Goodwin',
                'email' => 'Will.Edison@Murray.com',
                'password' => '$2y$10$S0n2I2jzCszf3FjjFiji8O1nrv2YmNVWZLBu.WZiDgCG5shi.1vsq',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'zw1Yq6iXq7',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Shayne Nader',
                'email' => 'Bogan.Isaiah@hotmail.com',
                'password' => '$2y$10$RpVnTHhcrPDQgnqFm6vjHOZVi15QfZWXsSAH5K69Uw0o/hsdzqkSm',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'n3CgQOhLnB',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'Dr. Earlene Wolff III',
                'email' => 'OReilly.Maye@gmail.com',
                'password' => '$2y$10$lxt0N2t1v0rBnsto1m.Cf.aeNblLtKkrcY2Y/ncREIWdv0uFj51/a',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'C29b2uk7Zk',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'Frida Balistreri',
                'email' => 'Altenwerth.Zelma@gmail.com',
                'password' => '$2y$10$j977Ifoo4GQbM.qYfeXf7OmAvb2Bijxa3T5.8rN.CZELGDpo.JX1e',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'FDcid9yxw5',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'Magnolia Shields',
                'email' => 'iSwift@Russel.com',
                'password' => '$2y$10$9Foo/6ajrERiVqSdCeUPk.8hs.OIhXagbYsAwZWB3NcMUetIZcml6',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => '72KOBI8HM8',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'Dianna Stokes',
                'email' => 'Ritchie.Raquel@gmail.com',
                'password' => '$2y$10$QNDMo6NVzMGL82X7.JNeE.HgnSudLZXJDKiYb11teXlVx6Ulgg.iu',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'l5MHJ2N4zU',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'Ezra Ryan',
                'email' => 'Neha39@Vandervort.info',
                'password' => '$2y$10$h7o77Trs76usd.xnAX/26eV0ODyjSX7JVKYWFJFujb49Z9IcD7is.',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => '1ExSoF1Llt',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'Shakira Kunde',
                'email' => 'Macejkovic.Forest@yahoo.com',
                'password' => '$2y$10$BYzzPEAHVl5RiIOoMXH65epIpHEO9oEvrJqlW4akZRQ8td8lMDfHa',
                'stripe_id' => NULL,
                'card_brand' => NULL,
                'card_last_four' => NULL,
                'trial_ends_at' => NULL,
                'ticketit_admin' => 0,
                'ticketit_agent' => 0,
                'preferences_id' => 0,
                'facility_id' => 0,
                'profile_id' => 0,
                'customer_id' => 0,
                'employee_id' => 0,
                'taggable_id' => 0,
                'taggable_type' => '',
                'deleted_at' => NULL,
                'remember_token' => 'oKLjj8iPIb',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
        ));
        
        
    }
}