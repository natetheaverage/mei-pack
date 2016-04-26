<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('products')->delete();
        
        \DB::table('products')->insert(array (
            0 => 
            array (
                'id' => 1,
                'inventory_id' => 76,
                'product_id' => 7105,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            1 => 
            array (
                'id' => 2,
                'inventory_id' => 19,
                'product_id' => 9977,
                'unit_price' => 83,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            2 => 
            array (
                'id' => 3,
                'inventory_id' => 54,
                'product_id' => 8755,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            3 => 
            array (
                'id' => 4,
                'inventory_id' => 20,
                'product_id' => 4493,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            4 => 
            array (
                'id' => 5,
                'inventory_id' => 86,
                'product_id' => 4689,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            5 => 
            array (
                'id' => 6,
                'inventory_id' => 51,
                'product_id' => 6313,
                'unit_price' => 17,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            6 => 
            array (
                'id' => 7,
                'inventory_id' => 13,
                'product_id' => 8120,
                'unit_price' => 58,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            7 => 
            array (
                'id' => 8,
                'inventory_id' => 42,
                'product_id' => 5701,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            8 => 
            array (
                'id' => 9,
                'inventory_id' => 28,
                'product_id' => 3504,
                'unit_price' => 152,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            9 => 
            array (
                'id' => 10,
                'inventory_id' => 100,
                'product_id' => 4001,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            10 => 
            array (
                'id' => 11,
                'inventory_id' => 67,
                'product_id' => 7266,
                'unit_price' => 96,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            11 => 
            array (
                'id' => 12,
                'inventory_id' => 23,
                'product_id' => 438,
                'unit_price' => 57,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            12 => 
            array (
                'id' => 13,
                'inventory_id' => 64,
                'product_id' => 5214,
                'unit_price' => 18,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            13 => 
            array (
                'id' => 14,
                'inventory_id' => 70,
                'product_id' => 2219,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            14 => 
            array (
                'id' => 15,
                'inventory_id' => 66,
                'product_id' => 6517,
                'unit_price' => 29,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            15 => 
            array (
                'id' => 16,
                'inventory_id' => 92,
                'product_id' => 2985,
                'unit_price' => 159,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            16 => 
            array (
                'id' => 17,
                'inventory_id' => 96,
                'product_id' => 8833,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            17 => 
            array (
                'id' => 18,
                'inventory_id' => 28,
                'product_id' => 4251,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            18 => 
            array (
                'id' => 19,
                'inventory_id' => 27,
                'product_id' => 4230,
                'unit_price' => 55,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            19 => 
            array (
                'id' => 20,
                'inventory_id' => 46,
                'product_id' => 8801,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            20 => 
            array (
                'id' => 21,
                'inventory_id' => 53,
                'product_id' => 1610,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            21 => 
            array (
                'id' => 22,
                'inventory_id' => 45,
                'product_id' => 2027,
                'unit_price' => 142,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            22 => 
            array (
                'id' => 23,
                'inventory_id' => 28,
                'product_id' => 4624,
                'unit_price' => 99,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            23 => 
            array (
                'id' => 24,
                'inventory_id' => 97,
                'product_id' => 4534,
                'unit_price' => 159,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            24 => 
            array (
                'id' => 25,
                'inventory_id' => 52,
                'product_id' => 9401,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            25 => 
            array (
                'id' => 26,
                'inventory_id' => 15,
                'product_id' => 9253,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            26 => 
            array (
                'id' => 27,
                'inventory_id' => 76,
                'product_id' => 2654,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            27 => 
            array (
                'id' => 28,
                'inventory_id' => 62,
                'product_id' => 5734,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            28 => 
            array (
                'id' => 29,
                'inventory_id' => 37,
                'product_id' => 7911,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            29 => 
            array (
                'id' => 30,
                'inventory_id' => 84,
                'product_id' => 6616,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            30 => 
            array (
                'id' => 31,
                'inventory_id' => 72,
                'product_id' => 1431,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            31 => 
            array (
                'id' => 32,
                'inventory_id' => 14,
                'product_id' => 2758,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            32 => 
            array (
                'id' => 33,
                'inventory_id' => 88,
                'product_id' => 8681,
                'unit_price' => 30,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            33 => 
            array (
                'id' => 34,
                'inventory_id' => 40,
                'product_id' => 1480,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            34 => 
            array (
                'id' => 35,
                'inventory_id' => 40,
                'product_id' => 4290,
                'unit_price' => 121,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            35 => 
            array (
                'id' => 36,
                'inventory_id' => 99,
                'product_id' => 5763,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            36 => 
            array (
                'id' => 37,
                'inventory_id' => 71,
                'product_id' => 2841,
                'unit_price' => 165,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            37 => 
            array (
                'id' => 38,
                'inventory_id' => 82,
                'product_id' => 5817,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            38 => 
            array (
                'id' => 39,
                'inventory_id' => 54,
                'product_id' => 3737,
                'unit_price' => 19,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            39 => 
            array (
                'id' => 40,
                'inventory_id' => 38,
                'product_id' => 684,
                'unit_price' => 100,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            40 => 
            array (
                'id' => 41,
                'inventory_id' => 50,
                'product_id' => 8794,
                'unit_price' => 158,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            41 => 
            array (
                'id' => 42,
                'inventory_id' => 32,
                'product_id' => 313,
                'unit_price' => 72,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            42 => 
            array (
                'id' => 43,
                'inventory_id' => 35,
                'product_id' => 4553,
                'unit_price' => 166,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            43 => 
            array (
                'id' => 44,
                'inventory_id' => 64,
                'product_id' => 7818,
                'unit_price' => 79,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            44 => 
            array (
                'id' => 45,
                'inventory_id' => 50,
                'product_id' => 2135,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            45 => 
            array (
                'id' => 46,
                'inventory_id' => 26,
                'product_id' => 7050,
                'unit_price' => 143,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            46 => 
            array (
                'id' => 47,
                'inventory_id' => 35,
                'product_id' => 722,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            47 => 
            array (
                'id' => 48,
                'inventory_id' => 36,
                'product_id' => 1659,
                'unit_price' => 200,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            48 => 
            array (
                'id' => 49,
                'inventory_id' => 80,
                'product_id' => 7574,
                'unit_price' => 64,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            49 => 
            array (
                'id' => 50,
                'inventory_id' => 7,
                'product_id' => 3667,
                'unit_price' => 180,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            50 => 
            array (
                'id' => 51,
                'inventory_id' => 81,
                'product_id' => 9989,
                'unit_price' => 172,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            51 => 
            array (
                'id' => 52,
                'inventory_id' => 60,
                'product_id' => 4080,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            52 => 
            array (
                'id' => 53,
                'inventory_id' => 53,
                'product_id' => 785,
                'unit_price' => 127,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            53 => 
            array (
                'id' => 54,
                'inventory_id' => 81,
                'product_id' => 4879,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            54 => 
            array (
                'id' => 55,
                'inventory_id' => 93,
                'product_id' => 8145,
                'unit_price' => 180,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            55 => 
            array (
                'id' => 56,
                'inventory_id' => 89,
                'product_id' => 3021,
                'unit_price' => 93,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            56 => 
            array (
                'id' => 57,
                'inventory_id' => 29,
                'product_id' => 9860,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            57 => 
            array (
                'id' => 58,
                'inventory_id' => 91,
                'product_id' => 6171,
                'unit_price' => 120,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            58 => 
            array (
                'id' => 59,
                'inventory_id' => 96,
                'product_id' => 92,
                'unit_price' => 128,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            59 => 
            array (
                'id' => 60,
                'inventory_id' => 64,
                'product_id' => 5338,
                'unit_price' => 11,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            60 => 
            array (
                'id' => 61,
                'inventory_id' => 55,
                'product_id' => 4229,
                'unit_price' => 131,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            61 => 
            array (
                'id' => 62,
                'inventory_id' => 48,
                'product_id' => 1482,
                'unit_price' => 25,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            62 => 
            array (
                'id' => 63,
                'inventory_id' => 88,
                'product_id' => 1374,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            63 => 
            array (
                'id' => 64,
                'inventory_id' => 98,
                'product_id' => 2850,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            64 => 
            array (
                'id' => 65,
                'inventory_id' => 66,
                'product_id' => 1054,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            65 => 
            array (
                'id' => 66,
                'inventory_id' => 94,
                'product_id' => 4067,
                'unit_price' => 159,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            66 => 
            array (
                'id' => 67,
                'inventory_id' => 33,
                'product_id' => 9314,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            67 => 
            array (
                'id' => 68,
                'inventory_id' => 22,
                'product_id' => 9563,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            68 => 
            array (
                'id' => 69,
                'inventory_id' => 7,
                'product_id' => 9243,
                'unit_price' => 184,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            69 => 
            array (
                'id' => 70,
                'inventory_id' => 56,
                'product_id' => 6385,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            70 => 
            array (
                'id' => 71,
                'inventory_id' => 61,
                'product_id' => 459,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            71 => 
            array (
                'id' => 72,
                'inventory_id' => 5,
                'product_id' => 843,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            72 => 
            array (
                'id' => 73,
                'inventory_id' => 29,
                'product_id' => 9444,
                'unit_price' => 20,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            73 => 
            array (
                'id' => 74,
                'inventory_id' => 90,
                'product_id' => 2235,
                'unit_price' => 191,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            74 => 
            array (
                'id' => 75,
                'inventory_id' => 91,
                'product_id' => 5367,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            75 => 
            array (
                'id' => 76,
                'inventory_id' => 57,
                'product_id' => 1082,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            76 => 
            array (
                'id' => 77,
                'inventory_id' => 24,
                'product_id' => 5428,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            77 => 
            array (
                'id' => 78,
                'inventory_id' => 36,
                'product_id' => 7217,
                'unit_price' => 145,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            78 => 
            array (
                'id' => 79,
                'inventory_id' => 81,
                'product_id' => 8101,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            79 => 
            array (
                'id' => 80,
                'inventory_id' => 93,
                'product_id' => 731,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            80 => 
            array (
                'id' => 81,
                'inventory_id' => 38,
                'product_id' => 8640,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            81 => 
            array (
                'id' => 82,
                'inventory_id' => 90,
                'product_id' => 8371,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            82 => 
            array (
                'id' => 83,
                'inventory_id' => 51,
                'product_id' => 7853,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            83 => 
            array (
                'id' => 84,
                'inventory_id' => 95,
                'product_id' => 4038,
                'unit_price' => 79,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            84 => 
            array (
                'id' => 85,
                'inventory_id' => 66,
                'product_id' => 917,
                'unit_price' => 132,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            85 => 
            array (
                'id' => 86,
                'inventory_id' => 37,
                'product_id' => 7028,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            86 => 
            array (
                'id' => 87,
                'inventory_id' => 10,
                'product_id' => 6404,
                'unit_price' => 184,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            87 => 
            array (
                'id' => 88,
                'inventory_id' => 3,
                'product_id' => 1108,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            88 => 
            array (
                'id' => 89,
                'inventory_id' => 100,
                'product_id' => 910,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            89 => 
            array (
                'id' => 90,
                'inventory_id' => 14,
                'product_id' => 790,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            90 => 
            array (
                'id' => 91,
                'inventory_id' => 33,
                'product_id' => 8298,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            91 => 
            array (
                'id' => 92,
                'inventory_id' => 90,
                'product_id' => 5083,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            92 => 
            array (
                'id' => 93,
                'inventory_id' => 14,
                'product_id' => 702,
                'unit_price' => 158,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            93 => 
            array (
                'id' => 94,
                'inventory_id' => 35,
                'product_id' => 5716,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            94 => 
            array (
                'id' => 95,
                'inventory_id' => 44,
                'product_id' => 8669,
                'unit_price' => 43,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            95 => 
            array (
                'id' => 96,
                'inventory_id' => 17,
                'product_id' => 2866,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            96 => 
            array (
                'id' => 97,
                'inventory_id' => 42,
                'product_id' => 169,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            97 => 
            array (
                'id' => 98,
                'inventory_id' => 25,
                'product_id' => 4946,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            98 => 
            array (
                'id' => 99,
                'inventory_id' => 72,
                'product_id' => 6888,
                'unit_price' => 182,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            99 => 
            array (
                'id' => 100,
                'inventory_id' => 26,
                'product_id' => 8098,
                'unit_price' => 102,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            100 => 
            array (
                'id' => 101,
                'inventory_id' => 90,
                'product_id' => 4155,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            101 => 
            array (
                'id' => 102,
                'inventory_id' => 52,
                'product_id' => 9043,
                'unit_price' => 78,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            102 => 
            array (
                'id' => 103,
                'inventory_id' => 47,
                'product_id' => 8844,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            103 => 
            array (
                'id' => 104,
                'inventory_id' => 13,
                'product_id' => 2972,
                'unit_price' => 162,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            104 => 
            array (
                'id' => 105,
                'inventory_id' => 21,
                'product_id' => 5936,
                'unit_price' => 86,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            105 => 
            array (
                'id' => 106,
                'inventory_id' => 45,
                'product_id' => 718,
                'unit_price' => 149,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            106 => 
            array (
                'id' => 107,
                'inventory_id' => 38,
                'product_id' => 7588,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            107 => 
            array (
                'id' => 108,
                'inventory_id' => 22,
                'product_id' => 220,
                'unit_price' => 148,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            108 => 
            array (
                'id' => 109,
                'inventory_id' => 43,
                'product_id' => 9068,
                'unit_price' => 148,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            109 => 
            array (
                'id' => 110,
                'inventory_id' => 51,
                'product_id' => 5584,
                'unit_price' => 184,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            110 => 
            array (
                'id' => 111,
                'inventory_id' => 61,
                'product_id' => 1632,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            111 => 
            array (
                'id' => 112,
                'inventory_id' => 57,
                'product_id' => 2595,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            112 => 
            array (
                'id' => 113,
                'inventory_id' => 61,
                'product_id' => 7924,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            113 => 
            array (
                'id' => 114,
                'inventory_id' => 20,
                'product_id' => 1945,
                'unit_price' => 136,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            114 => 
            array (
                'id' => 115,
                'inventory_id' => 39,
                'product_id' => 8897,
                'unit_price' => 195,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            115 => 
            array (
                'id' => 116,
                'inventory_id' => 98,
                'product_id' => 9497,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            116 => 
            array (
                'id' => 117,
                'inventory_id' => 50,
                'product_id' => 8413,
                'unit_price' => 32,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            117 => 
            array (
                'id' => 118,
                'inventory_id' => 34,
                'product_id' => 6876,
                'unit_price' => 56,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            118 => 
            array (
                'id' => 119,
                'inventory_id' => 64,
                'product_id' => 6668,
                'unit_price' => 11,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            119 => 
            array (
                'id' => 120,
                'inventory_id' => 61,
                'product_id' => 6946,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            120 => 
            array (
                'id' => 121,
                'inventory_id' => 86,
                'product_id' => 4157,
                'unit_price' => 93,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            121 => 
            array (
                'id' => 122,
                'inventory_id' => 90,
                'product_id' => 2028,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            122 => 
            array (
                'id' => 123,
                'inventory_id' => 78,
                'product_id' => 4892,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            123 => 
            array (
                'id' => 124,
                'inventory_id' => 72,
                'product_id' => 3809,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            124 => 
            array (
                'id' => 125,
                'inventory_id' => 72,
                'product_id' => 1920,
                'unit_price' => 185,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            125 => 
            array (
                'id' => 126,
                'inventory_id' => 87,
                'product_id' => 3783,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            126 => 
            array (
                'id' => 127,
                'inventory_id' => 48,
                'product_id' => 2406,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            127 => 
            array (
                'id' => 128,
                'inventory_id' => 89,
                'product_id' => 6389,
                'unit_price' => 185,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            128 => 
            array (
                'id' => 129,
                'inventory_id' => 10,
                'product_id' => 9319,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            129 => 
            array (
                'id' => 130,
                'inventory_id' => 74,
                'product_id' => 3408,
                'unit_price' => 77,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            130 => 
            array (
                'id' => 131,
                'inventory_id' => 31,
                'product_id' => 5715,
                'unit_price' => 13,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            131 => 
            array (
                'id' => 132,
                'inventory_id' => 55,
                'product_id' => 8046,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            132 => 
            array (
                'id' => 133,
                'inventory_id' => 47,
                'product_id' => 2641,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            133 => 
            array (
                'id' => 134,
                'inventory_id' => 33,
                'product_id' => 6361,
                'unit_price' => 133,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            134 => 
            array (
                'id' => 135,
                'inventory_id' => 70,
                'product_id' => 7330,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            135 => 
            array (
                'id' => 136,
                'inventory_id' => 12,
                'product_id' => 4020,
                'unit_price' => 26,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            136 => 
            array (
                'id' => 137,
                'inventory_id' => 66,
                'product_id' => 2033,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            137 => 
            array (
                'id' => 138,
                'inventory_id' => 67,
                'product_id' => 8367,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            138 => 
            array (
                'id' => 139,
                'inventory_id' => 45,
                'product_id' => 8821,
                'unit_price' => 37,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            139 => 
            array (
                'id' => 140,
                'inventory_id' => 92,
                'product_id' => 183,
                'unit_price' => 142,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            140 => 
            array (
                'id' => 141,
                'inventory_id' => 63,
                'product_id' => 1511,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            141 => 
            array (
                'id' => 142,
                'inventory_id' => 83,
                'product_id' => 9571,
                'unit_price' => 99,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            142 => 
            array (
                'id' => 143,
                'inventory_id' => 27,
                'product_id' => 9223,
                'unit_price' => 174,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            143 => 
            array (
                'id' => 144,
                'inventory_id' => 42,
                'product_id' => 8737,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            144 => 
            array (
                'id' => 145,
                'inventory_id' => 32,
                'product_id' => 6128,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            145 => 
            array (
                'id' => 146,
                'inventory_id' => 12,
                'product_id' => 7501,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            146 => 
            array (
                'id' => 147,
                'inventory_id' => 51,
                'product_id' => 7829,
                'unit_price' => 102,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            147 => 
            array (
                'id' => 148,
                'inventory_id' => 51,
                'product_id' => 5887,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            148 => 
            array (
                'id' => 149,
                'inventory_id' => 36,
                'product_id' => 2687,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            149 => 
            array (
                'id' => 150,
                'inventory_id' => 65,
                'product_id' => 5711,
                'unit_price' => 144,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            150 => 
            array (
                'id' => 151,
                'inventory_id' => 3,
                'product_id' => 1021,
                'unit_price' => 66,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            151 => 
            array (
                'id' => 152,
                'inventory_id' => 60,
                'product_id' => 4258,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            152 => 
            array (
                'id' => 153,
                'inventory_id' => 48,
                'product_id' => 4826,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            153 => 
            array (
                'id' => 154,
                'inventory_id' => 64,
                'product_id' => 6611,
                'unit_price' => 18,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            154 => 
            array (
                'id' => 155,
                'inventory_id' => 56,
                'product_id' => 3582,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            155 => 
            array (
                'id' => 156,
                'inventory_id' => 35,
                'product_id' => 9037,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            156 => 
            array (
                'id' => 157,
                'inventory_id' => 35,
                'product_id' => 3234,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            157 => 
            array (
                'id' => 158,
                'inventory_id' => 56,
                'product_id' => 3087,
                'unit_price' => 99,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            158 => 
            array (
                'id' => 159,
                'inventory_id' => 21,
                'product_id' => 1838,
                'unit_price' => 74,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            159 => 
            array (
                'id' => 160,
                'inventory_id' => 1,
                'product_id' => 1372,
                'unit_price' => 64,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            160 => 
            array (
                'id' => 161,
                'inventory_id' => 38,
                'product_id' => 540,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            161 => 
            array (
                'id' => 162,
                'inventory_id' => 19,
                'product_id' => 7498,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            162 => 
            array (
                'id' => 163,
                'inventory_id' => 3,
                'product_id' => 5960,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            163 => 
            array (
                'id' => 164,
                'inventory_id' => 33,
                'product_id' => 1725,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            164 => 
            array (
                'id' => 165,
                'inventory_id' => 36,
                'product_id' => 6355,
                'unit_price' => 93,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            165 => 
            array (
                'id' => 166,
                'inventory_id' => 7,
                'product_id' => 6604,
                'unit_price' => 199,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            166 => 
            array (
                'id' => 167,
                'inventory_id' => 47,
                'product_id' => 5005,
                'unit_price' => 149,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            167 => 
            array (
                'id' => 168,
                'inventory_id' => 88,
                'product_id' => 2377,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            168 => 
            array (
                'id' => 169,
                'inventory_id' => 73,
                'product_id' => 8133,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            169 => 
            array (
                'id' => 170,
                'inventory_id' => 14,
                'product_id' => 4258,
                'unit_price' => 97,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            170 => 
            array (
                'id' => 171,
                'inventory_id' => 50,
                'product_id' => 3610,
                'unit_price' => 98,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            171 => 
            array (
                'id' => 172,
                'inventory_id' => 96,
                'product_id' => 6961,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            172 => 
            array (
                'id' => 173,
                'inventory_id' => 35,
                'product_id' => 9438,
                'unit_price' => 35,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            173 => 
            array (
                'id' => 174,
                'inventory_id' => 21,
                'product_id' => 9015,
                'unit_price' => 115,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            174 => 
            array (
                'id' => 175,
                'inventory_id' => 42,
                'product_id' => 3559,
                'unit_price' => 177,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            175 => 
            array (
                'id' => 176,
                'inventory_id' => 58,
                'product_id' => 8260,
                'unit_price' => 80,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            176 => 
            array (
                'id' => 177,
                'inventory_id' => 46,
                'product_id' => 4354,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            177 => 
            array (
                'id' => 178,
                'inventory_id' => 14,
                'product_id' => 7116,
                'unit_price' => 141,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            178 => 
            array (
                'id' => 179,
                'inventory_id' => 95,
                'product_id' => 818,
                'unit_price' => 60,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            179 => 
            array (
                'id' => 180,
                'inventory_id' => 16,
                'product_id' => 6984,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            180 => 
            array (
                'id' => 181,
                'inventory_id' => 5,
                'product_id' => 98,
                'unit_price' => 67,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            181 => 
            array (
                'id' => 182,
                'inventory_id' => 83,
                'product_id' => 77,
                'unit_price' => 68,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            182 => 
            array (
                'id' => 183,
                'inventory_id' => 34,
                'product_id' => 926,
                'unit_price' => 129,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            183 => 
            array (
                'id' => 184,
                'inventory_id' => 62,
                'product_id' => 4728,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            184 => 
            array (
                'id' => 185,
                'inventory_id' => 70,
                'product_id' => 5119,
                'unit_price' => 56,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            185 => 
            array (
                'id' => 186,
                'inventory_id' => 97,
                'product_id' => 4602,
                'unit_price' => 153,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            186 => 
            array (
                'id' => 187,
                'inventory_id' => 19,
                'product_id' => 8814,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            187 => 
            array (
                'id' => 188,
                'inventory_id' => 15,
                'product_id' => 2771,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            188 => 
            array (
                'id' => 189,
                'inventory_id' => 93,
                'product_id' => 3435,
                'unit_price' => 78,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            189 => 
            array (
                'id' => 190,
                'inventory_id' => 38,
                'product_id' => 2132,
                'unit_price' => 35,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            190 => 
            array (
                'id' => 191,
                'inventory_id' => 15,
                'product_id' => 8677,
                'unit_price' => 172,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            191 => 
            array (
                'id' => 192,
                'inventory_id' => 73,
                'product_id' => 9943,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            192 => 
            array (
                'id' => 193,
                'inventory_id' => 3,
                'product_id' => 3721,
                'unit_price' => 116,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            193 => 
            array (
                'id' => 194,
                'inventory_id' => 58,
                'product_id' => 9898,
                'unit_price' => 65,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            194 => 
            array (
                'id' => 195,
                'inventory_id' => 88,
                'product_id' => 6764,
                'unit_price' => 76,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            195 => 
            array (
                'id' => 196,
                'inventory_id' => 30,
                'product_id' => 2641,
                'unit_price' => 179,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            196 => 
            array (
                'id' => 197,
                'inventory_id' => 53,
                'product_id' => 8970,
                'unit_price' => 104,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            197 => 
            array (
                'id' => 198,
                'inventory_id' => 99,
                'product_id' => 8726,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            198 => 
            array (
                'id' => 199,
                'inventory_id' => 7,
                'product_id' => 4968,
                'unit_price' => 193,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            199 => 
            array (
                'id' => 200,
                'inventory_id' => 72,
                'product_id' => 5441,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            200 => 
            array (
                'id' => 201,
                'inventory_id' => 7,
                'product_id' => 3386,
                'unit_price' => 38,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            201 => 
            array (
                'id' => 202,
                'inventory_id' => 51,
                'product_id' => 1213,
                'unit_price' => 18,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            202 => 
            array (
                'id' => 203,
                'inventory_id' => 86,
                'product_id' => 6691,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            203 => 
            array (
                'id' => 204,
                'inventory_id' => 34,
                'product_id' => 5736,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            204 => 
            array (
                'id' => 205,
                'inventory_id' => 93,
                'product_id' => 6344,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            205 => 
            array (
                'id' => 206,
                'inventory_id' => 21,
                'product_id' => 4512,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            206 => 
            array (
                'id' => 207,
                'inventory_id' => 57,
                'product_id' => 760,
                'unit_price' => 75,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            207 => 
            array (
                'id' => 208,
                'inventory_id' => 92,
                'product_id' => 1469,
                'unit_price' => 68,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            208 => 
            array (
                'id' => 209,
                'inventory_id' => 84,
                'product_id' => 1668,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            209 => 
            array (
                'id' => 210,
                'inventory_id' => 78,
                'product_id' => 4839,
                'unit_price' => 143,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            210 => 
            array (
                'id' => 211,
                'inventory_id' => 51,
                'product_id' => 4647,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            211 => 
            array (
                'id' => 212,
                'inventory_id' => 29,
                'product_id' => 9483,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            212 => 
            array (
                'id' => 213,
                'inventory_id' => 82,
                'product_id' => 876,
                'unit_price' => 90,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            213 => 
            array (
                'id' => 214,
                'inventory_id' => 6,
                'product_id' => 6015,
                'unit_price' => 165,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            214 => 
            array (
                'id' => 215,
                'inventory_id' => 3,
                'product_id' => 6085,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            215 => 
            array (
                'id' => 216,
                'inventory_id' => 62,
                'product_id' => 5580,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            216 => 
            array (
                'id' => 217,
                'inventory_id' => 61,
                'product_id' => 9969,
                'unit_price' => 23,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            217 => 
            array (
                'id' => 218,
                'inventory_id' => 34,
                'product_id' => 4303,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            218 => 
            array (
                'id' => 219,
                'inventory_id' => 12,
                'product_id' => 1918,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            219 => 
            array (
                'id' => 220,
                'inventory_id' => 88,
                'product_id' => 9561,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            220 => 
            array (
                'id' => 221,
                'inventory_id' => 3,
                'product_id' => 3154,
                'unit_price' => 17,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            221 => 
            array (
                'id' => 222,
                'inventory_id' => 40,
                'product_id' => 3304,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            222 => 
            array (
                'id' => 223,
                'inventory_id' => 80,
                'product_id' => 2718,
                'unit_price' => 19,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            223 => 
            array (
                'id' => 224,
                'inventory_id' => 27,
                'product_id' => 9401,
                'unit_price' => 129,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            224 => 
            array (
                'id' => 225,
                'inventory_id' => 42,
                'product_id' => 3575,
                'unit_price' => 20,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            225 => 
            array (
                'id' => 226,
                'inventory_id' => 99,
                'product_id' => 5290,
                'unit_price' => 32,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            226 => 
            array (
                'id' => 227,
                'inventory_id' => 63,
                'product_id' => 8092,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            227 => 
            array (
                'id' => 228,
                'inventory_id' => 55,
                'product_id' => 9981,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            228 => 
            array (
                'id' => 229,
                'inventory_id' => 84,
                'product_id' => 739,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            229 => 
            array (
                'id' => 230,
                'inventory_id' => 11,
                'product_id' => 839,
                'unit_price' => 100,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            230 => 
            array (
                'id' => 231,
                'inventory_id' => 48,
                'product_id' => 278,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            231 => 
            array (
                'id' => 232,
                'inventory_id' => 92,
                'product_id' => 4454,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            232 => 
            array (
                'id' => 233,
                'inventory_id' => 39,
                'product_id' => 2889,
                'unit_price' => 98,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            233 => 
            array (
                'id' => 234,
                'inventory_id' => 80,
                'product_id' => 3754,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            234 => 
            array (
                'id' => 235,
                'inventory_id' => 8,
                'product_id' => 6886,
                'unit_price' => 131,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            235 => 
            array (
                'id' => 236,
                'inventory_id' => 56,
                'product_id' => 8929,
                'unit_price' => 188,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            236 => 
            array (
                'id' => 237,
                'inventory_id' => 79,
                'product_id' => 1736,
                'unit_price' => 82,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            237 => 
            array (
                'id' => 238,
                'inventory_id' => 83,
                'product_id' => 2149,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            238 => 
            array (
                'id' => 239,
                'inventory_id' => 5,
                'product_id' => 8452,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            239 => 
            array (
                'id' => 240,
                'inventory_id' => 26,
                'product_id' => 220,
                'unit_price' => 62,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            240 => 
            array (
                'id' => 241,
                'inventory_id' => 26,
                'product_id' => 4209,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            241 => 
            array (
                'id' => 242,
                'inventory_id' => 6,
                'product_id' => 8413,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            242 => 
            array (
                'id' => 243,
                'inventory_id' => 65,
                'product_id' => 4000,
                'unit_price' => 166,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            243 => 
            array (
                'id' => 244,
                'inventory_id' => 78,
                'product_id' => 4989,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            244 => 
            array (
                'id' => 245,
                'inventory_id' => 44,
                'product_id' => 2397,
                'unit_price' => 148,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            245 => 
            array (
                'id' => 246,
                'inventory_id' => 26,
                'product_id' => 7352,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            246 => 
            array (
                'id' => 247,
                'inventory_id' => 64,
                'product_id' => 9245,
                'unit_price' => 196,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            247 => 
            array (
                'id' => 248,
                'inventory_id' => 57,
                'product_id' => 2484,
                'unit_price' => 82,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            248 => 
            array (
                'id' => 249,
                'inventory_id' => 27,
                'product_id' => 725,
                'unit_price' => 85,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            249 => 
            array (
                'id' => 250,
                'inventory_id' => 98,
                'product_id' => 6390,
                'unit_price' => 113,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            250 => 
            array (
                'id' => 251,
                'inventory_id' => 96,
                'product_id' => 5456,
                'unit_price' => 174,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            251 => 
            array (
                'id' => 252,
                'inventory_id' => 80,
                'product_id' => 1528,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            252 => 
            array (
                'id' => 253,
                'inventory_id' => 15,
                'product_id' => 9152,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            253 => 
            array (
                'id' => 254,
                'inventory_id' => 31,
                'product_id' => 6246,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            254 => 
            array (
                'id' => 255,
                'inventory_id' => 64,
                'product_id' => 6756,
                'unit_price' => 42,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            255 => 
            array (
                'id' => 256,
                'inventory_id' => 70,
                'product_id' => 2125,
                'unit_price' => 172,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            256 => 
            array (
                'id' => 257,
                'inventory_id' => 77,
                'product_id' => 5091,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            257 => 
            array (
                'id' => 258,
                'inventory_id' => 42,
                'product_id' => 9620,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            258 => 
            array (
                'id' => 259,
                'inventory_id' => 86,
                'product_id' => 6016,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            259 => 
            array (
                'id' => 260,
                'inventory_id' => 50,
                'product_id' => 3081,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            260 => 
            array (
                'id' => 261,
                'inventory_id' => 89,
                'product_id' => 1611,
                'unit_price' => 118,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            261 => 
            array (
                'id' => 262,
                'inventory_id' => 10,
                'product_id' => 7506,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            262 => 
            array (
                'id' => 263,
                'inventory_id' => 30,
                'product_id' => 3217,
                'unit_price' => 131,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            263 => 
            array (
                'id' => 264,
                'inventory_id' => 21,
                'product_id' => 2204,
                'unit_price' => 179,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            264 => 
            array (
                'id' => 265,
                'inventory_id' => 5,
                'product_id' => 2521,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            265 => 
            array (
                'id' => 266,
                'inventory_id' => 9,
                'product_id' => 1864,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            266 => 
            array (
                'id' => 267,
                'inventory_id' => 65,
                'product_id' => 4091,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            267 => 
            array (
                'id' => 268,
                'inventory_id' => 66,
                'product_id' => 7989,
                'unit_price' => 115,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            268 => 
            array (
                'id' => 269,
                'inventory_id' => 55,
                'product_id' => 4194,
                'unit_price' => 111,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            269 => 
            array (
                'id' => 270,
                'inventory_id' => 9,
                'product_id' => 1032,
                'unit_price' => 76,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            270 => 
            array (
                'id' => 271,
                'inventory_id' => 23,
                'product_id' => 3323,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            271 => 
            array (
                'id' => 272,
                'inventory_id' => 48,
                'product_id' => 434,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            272 => 
            array (
                'id' => 273,
                'inventory_id' => 87,
                'product_id' => 1154,
                'unit_price' => 11,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            273 => 
            array (
                'id' => 274,
                'inventory_id' => 21,
                'product_id' => 9896,
                'unit_price' => 97,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            274 => 
            array (
                'id' => 275,
                'inventory_id' => 39,
                'product_id' => 9376,
                'unit_price' => 102,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            275 => 
            array (
                'id' => 276,
                'inventory_id' => 2,
                'product_id' => 7737,
                'unit_price' => 126,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            276 => 
            array (
                'id' => 277,
                'inventory_id' => 66,
                'product_id' => 8984,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            277 => 
            array (
                'id' => 278,
                'inventory_id' => 55,
                'product_id' => 1082,
                'unit_price' => 18,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            278 => 
            array (
                'id' => 279,
                'inventory_id' => 20,
                'product_id' => 1397,
                'unit_price' => 44,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            279 => 
            array (
                'id' => 280,
                'inventory_id' => 35,
                'product_id' => 1515,
                'unit_price' => 170,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            280 => 
            array (
                'id' => 281,
                'inventory_id' => 75,
                'product_id' => 2161,
                'unit_price' => 186,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            281 => 
            array (
                'id' => 282,
                'inventory_id' => 13,
                'product_id' => 1731,
                'unit_price' => 92,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            282 => 
            array (
                'id' => 283,
                'inventory_id' => 38,
                'product_id' => 2721,
                'unit_price' => 37,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            283 => 
            array (
                'id' => 284,
                'inventory_id' => 49,
                'product_id' => 2990,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            284 => 
            array (
                'id' => 285,
                'inventory_id' => 38,
                'product_id' => 9743,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            285 => 
            array (
                'id' => 286,
                'inventory_id' => 31,
                'product_id' => 5354,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            286 => 
            array (
                'id' => 287,
                'inventory_id' => 99,
                'product_id' => 922,
                'unit_price' => 189,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            287 => 
            array (
                'id' => 288,
                'inventory_id' => 78,
                'product_id' => 81,
                'unit_price' => 29,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            288 => 
            array (
                'id' => 289,
                'inventory_id' => 76,
                'product_id' => 4028,
                'unit_price' => 58,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            289 => 
            array (
                'id' => 290,
                'inventory_id' => 57,
                'product_id' => 8260,
                'unit_price' => 68,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            290 => 
            array (
                'id' => 291,
                'inventory_id' => 8,
                'product_id' => 5161,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            291 => 
            array (
                'id' => 292,
                'inventory_id' => 98,
                'product_id' => 9827,
                'unit_price' => 12,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            292 => 
            array (
                'id' => 293,
                'inventory_id' => 30,
                'product_id' => 8589,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            293 => 
            array (
                'id' => 294,
                'inventory_id' => 64,
                'product_id' => 7501,
                'unit_price' => 25,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            294 => 
            array (
                'id' => 295,
                'inventory_id' => 94,
                'product_id' => 4325,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            295 => 
            array (
                'id' => 296,
                'inventory_id' => 56,
                'product_id' => 7631,
                'unit_price' => 63,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            296 => 
            array (
                'id' => 297,
                'inventory_id' => 74,
                'product_id' => 3153,
                'unit_price' => 27,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            297 => 
            array (
                'id' => 298,
                'inventory_id' => 44,
                'product_id' => 8248,
                'unit_price' => 63,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            298 => 
            array (
                'id' => 299,
                'inventory_id' => 16,
                'product_id' => 9383,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            299 => 
            array (
                'id' => 300,
                'inventory_id' => 32,
                'product_id' => 5495,
                'unit_price' => 87,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            300 => 
            array (
                'id' => 301,
                'inventory_id' => 6,
                'product_id' => 5257,
                'unit_price' => 168,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            301 => 
            array (
                'id' => 302,
                'inventory_id' => 2,
                'product_id' => 3881,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            302 => 
            array (
                'id' => 303,
                'inventory_id' => 79,
                'product_id' => 9251,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            303 => 
            array (
                'id' => 304,
                'inventory_id' => 24,
                'product_id' => 9160,
                'unit_price' => 92,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            304 => 
            array (
                'id' => 305,
                'inventory_id' => 78,
                'product_id' => 9499,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            305 => 
            array (
                'id' => 306,
                'inventory_id' => 32,
                'product_id' => 4986,
                'unit_price' => 159,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            306 => 
            array (
                'id' => 307,
                'inventory_id' => 10,
                'product_id' => 5859,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            307 => 
            array (
                'id' => 308,
                'inventory_id' => 38,
                'product_id' => 2879,
                'unit_price' => 41,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            308 => 
            array (
                'id' => 309,
                'inventory_id' => 67,
                'product_id' => 2687,
                'unit_price' => 64,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            309 => 
            array (
                'id' => 310,
                'inventory_id' => 70,
                'product_id' => 9493,
                'unit_price' => 75,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            310 => 
            array (
                'id' => 311,
                'inventory_id' => 34,
                'product_id' => 7630,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            311 => 
            array (
                'id' => 312,
                'inventory_id' => 87,
                'product_id' => 5565,
                'unit_price' => 171,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            312 => 
            array (
                'id' => 313,
                'inventory_id' => 5,
                'product_id' => 9833,
                'unit_price' => 41,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            313 => 
            array (
                'id' => 314,
                'inventory_id' => 48,
                'product_id' => 271,
                'unit_price' => 43,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            314 => 
            array (
                'id' => 315,
                'inventory_id' => 43,
                'product_id' => 7464,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            315 => 
            array (
                'id' => 316,
                'inventory_id' => 86,
                'product_id' => 853,
                'unit_price' => 192,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            316 => 
            array (
                'id' => 317,
                'inventory_id' => 49,
                'product_id' => 6676,
                'unit_price' => 58,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            317 => 
            array (
                'id' => 318,
                'inventory_id' => 91,
                'product_id' => 4014,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            318 => 
            array (
                'id' => 319,
                'inventory_id' => 41,
                'product_id' => 2368,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            319 => 
            array (
                'id' => 320,
                'inventory_id' => 50,
                'product_id' => 8831,
                'unit_price' => 23,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            320 => 
            array (
                'id' => 321,
                'inventory_id' => 62,
                'product_id' => 9607,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            321 => 
            array (
                'id' => 322,
                'inventory_id' => 28,
                'product_id' => 6236,
                'unit_price' => 116,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            322 => 
            array (
                'id' => 323,
                'inventory_id' => 46,
                'product_id' => 1740,
                'unit_price' => 141,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            323 => 
            array (
                'id' => 324,
                'inventory_id' => 40,
                'product_id' => 466,
                'unit_price' => 55,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            324 => 
            array (
                'id' => 325,
                'inventory_id' => 90,
                'product_id' => 3550,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            325 => 
            array (
                'id' => 326,
                'inventory_id' => 95,
                'product_id' => 1534,
                'unit_price' => 87,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            326 => 
            array (
                'id' => 327,
                'inventory_id' => 81,
                'product_id' => 4271,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            327 => 
            array (
                'id' => 328,
                'inventory_id' => 2,
                'product_id' => 8688,
                'unit_price' => 66,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            328 => 
            array (
                'id' => 329,
                'inventory_id' => 85,
                'product_id' => 1381,
                'unit_price' => 58,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            329 => 
            array (
                'id' => 330,
                'inventory_id' => 81,
                'product_id' => 1737,
                'unit_price' => 196,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            330 => 
            array (
                'id' => 331,
                'inventory_id' => 11,
                'product_id' => 2183,
                'unit_price' => 41,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            331 => 
            array (
                'id' => 332,
                'inventory_id' => 25,
                'product_id' => 4026,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            332 => 
            array (
                'id' => 333,
                'inventory_id' => 19,
                'product_id' => 1607,
                'unit_price' => 158,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            333 => 
            array (
                'id' => 334,
                'inventory_id' => 80,
                'product_id' => 3318,
                'unit_price' => 77,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            334 => 
            array (
                'id' => 335,
                'inventory_id' => 84,
                'product_id' => 9815,
                'unit_price' => 171,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            335 => 
            array (
                'id' => 336,
                'inventory_id' => 85,
                'product_id' => 580,
                'unit_price' => 77,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            336 => 
            array (
                'id' => 337,
                'inventory_id' => 74,
                'product_id' => 3644,
                'unit_price' => 191,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            337 => 
            array (
                'id' => 338,
                'inventory_id' => 83,
                'product_id' => 4659,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            338 => 
            array (
                'id' => 339,
                'inventory_id' => 31,
                'product_id' => 6412,
                'unit_price' => 23,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            339 => 
            array (
                'id' => 340,
                'inventory_id' => 83,
                'product_id' => 6152,
                'unit_price' => 155,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            340 => 
            array (
                'id' => 341,
                'inventory_id' => 14,
                'product_id' => 2059,
                'unit_price' => 160,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            341 => 
            array (
                'id' => 342,
                'inventory_id' => 10,
                'product_id' => 1028,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            342 => 
            array (
                'id' => 343,
                'inventory_id' => 37,
                'product_id' => 2193,
                'unit_price' => 163,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            343 => 
            array (
                'id' => 344,
                'inventory_id' => 49,
                'product_id' => 2272,
                'unit_price' => 196,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            344 => 
            array (
                'id' => 345,
                'inventory_id' => 52,
                'product_id' => 7178,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            345 => 
            array (
                'id' => 346,
                'inventory_id' => 50,
                'product_id' => 9733,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            346 => 
            array (
                'id' => 347,
                'inventory_id' => 65,
                'product_id' => 5026,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            347 => 
            array (
                'id' => 348,
                'inventory_id' => 59,
                'product_id' => 1251,
                'unit_price' => 80,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            348 => 
            array (
                'id' => 349,
                'inventory_id' => 20,
                'product_id' => 1624,
                'unit_price' => 78,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            349 => 
            array (
                'id' => 350,
                'inventory_id' => 81,
                'product_id' => 9250,
                'unit_price' => 179,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            350 => 
            array (
                'id' => 351,
                'inventory_id' => 98,
                'product_id' => 2172,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            351 => 
            array (
                'id' => 352,
                'inventory_id' => 45,
                'product_id' => 2451,
                'unit_price' => 27,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            352 => 
            array (
                'id' => 353,
                'inventory_id' => 73,
                'product_id' => 1679,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            353 => 
            array (
                'id' => 354,
                'inventory_id' => 22,
                'product_id' => 8863,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            354 => 
            array (
                'id' => 355,
                'inventory_id' => 71,
                'product_id' => 451,
                'unit_price' => 68,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            355 => 
            array (
                'id' => 356,
                'inventory_id' => 99,
                'product_id' => 462,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            356 => 
            array (
                'id' => 357,
                'inventory_id' => 67,
                'product_id' => 496,
                'unit_price' => 67,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            357 => 
            array (
                'id' => 358,
                'inventory_id' => 55,
                'product_id' => 8063,
                'unit_price' => 157,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            358 => 
            array (
                'id' => 359,
                'inventory_id' => 51,
                'product_id' => 7870,
                'unit_price' => 181,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            359 => 
            array (
                'id' => 360,
                'inventory_id' => 10,
                'product_id' => 8911,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            360 => 
            array (
                'id' => 361,
                'inventory_id' => 23,
                'product_id' => 3870,
                'unit_price' => 62,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            361 => 
            array (
                'id' => 362,
                'inventory_id' => 66,
                'product_id' => 4863,
                'unit_price' => 193,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            362 => 
            array (
                'id' => 363,
                'inventory_id' => 99,
                'product_id' => 4291,
                'unit_price' => 144,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            363 => 
            array (
                'id' => 364,
                'inventory_id' => 5,
                'product_id' => 1129,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            364 => 
            array (
                'id' => 365,
                'inventory_id' => 95,
                'product_id' => 9435,
                'unit_price' => 21,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            365 => 
            array (
                'id' => 366,
                'inventory_id' => 77,
                'product_id' => 1554,
                'unit_price' => 129,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            366 => 
            array (
                'id' => 367,
                'inventory_id' => 94,
                'product_id' => 4222,
                'unit_price' => 88,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            367 => 
            array (
                'id' => 368,
                'inventory_id' => 7,
                'product_id' => 1437,
                'unit_price' => 59,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            368 => 
            array (
                'id' => 369,
                'inventory_id' => 27,
                'product_id' => 5207,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            369 => 
            array (
                'id' => 370,
                'inventory_id' => 80,
                'product_id' => 8666,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            370 => 
            array (
                'id' => 371,
                'inventory_id' => 67,
                'product_id' => 6836,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            371 => 
            array (
                'id' => 372,
                'inventory_id' => 96,
                'product_id' => 5144,
                'unit_price' => 36,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            372 => 
            array (
                'id' => 373,
                'inventory_id' => 92,
                'product_id' => 7570,
                'unit_price' => 82,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            373 => 
            array (
                'id' => 374,
                'inventory_id' => 75,
                'product_id' => 756,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            374 => 
            array (
                'id' => 375,
                'inventory_id' => 97,
                'product_id' => 9549,
                'unit_price' => 53,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            375 => 
            array (
                'id' => 376,
                'inventory_id' => 75,
                'product_id' => 8851,
                'unit_price' => 148,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            376 => 
            array (
                'id' => 377,
                'inventory_id' => 6,
                'product_id' => 7147,
                'unit_price' => 38,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            377 => 
            array (
                'id' => 378,
                'inventory_id' => 75,
                'product_id' => 1447,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            378 => 
            array (
                'id' => 379,
                'inventory_id' => 17,
                'product_id' => 4629,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            379 => 
            array (
                'id' => 380,
                'inventory_id' => 6,
                'product_id' => 9030,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            380 => 
            array (
                'id' => 381,
                'inventory_id' => 19,
                'product_id' => 4010,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            381 => 
            array (
                'id' => 382,
                'inventory_id' => 59,
                'product_id' => 3639,
                'unit_price' => 168,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            382 => 
            array (
                'id' => 383,
                'inventory_id' => 73,
                'product_id' => 1714,
                'unit_price' => 13,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            383 => 
            array (
                'id' => 384,
                'inventory_id' => 6,
                'product_id' => 1973,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            384 => 
            array (
                'id' => 385,
                'inventory_id' => 89,
                'product_id' => 4848,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            385 => 
            array (
                'id' => 386,
                'inventory_id' => 1,
                'product_id' => 7384,
                'unit_price' => 186,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            386 => 
            array (
                'id' => 387,
                'inventory_id' => 62,
                'product_id' => 7996,
                'unit_price' => 54,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            387 => 
            array (
                'id' => 388,
                'inventory_id' => 61,
                'product_id' => 5984,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            388 => 
            array (
                'id' => 389,
                'inventory_id' => 90,
                'product_id' => 7834,
                'unit_price' => 174,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            389 => 
            array (
                'id' => 390,
                'inventory_id' => 16,
                'product_id' => 7305,
                'unit_price' => 152,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            390 => 
            array (
                'id' => 391,
                'inventory_id' => 58,
                'product_id' => 6277,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            391 => 
            array (
                'id' => 392,
                'inventory_id' => 40,
                'product_id' => 387,
                'unit_price' => 136,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            392 => 
            array (
                'id' => 393,
                'inventory_id' => 44,
                'product_id' => 327,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            393 => 
            array (
                'id' => 394,
                'inventory_id' => 9,
                'product_id' => 1942,
                'unit_price' => 85,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            394 => 
            array (
                'id' => 395,
                'inventory_id' => 40,
                'product_id' => 8775,
                'unit_price' => 38,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            395 => 
            array (
                'id' => 396,
                'inventory_id' => 94,
                'product_id' => 2366,
                'unit_price' => 74,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            396 => 
            array (
                'id' => 397,
                'inventory_id' => 92,
                'product_id' => 4319,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            397 => 
            array (
                'id' => 398,
                'inventory_id' => 29,
                'product_id' => 5317,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            398 => 
            array (
                'id' => 399,
                'inventory_id' => 66,
                'product_id' => 9174,
                'unit_price' => 11,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            399 => 
            array (
                'id' => 400,
                'inventory_id' => 31,
                'product_id' => 9484,
                'unit_price' => 117,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            400 => 
            array (
                'id' => 401,
                'inventory_id' => 47,
                'product_id' => 2529,
                'unit_price' => 147,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            401 => 
            array (
                'id' => 402,
                'inventory_id' => 15,
                'product_id' => 3233,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            402 => 
            array (
                'id' => 403,
                'inventory_id' => 59,
                'product_id' => 9417,
                'unit_price' => 62,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            403 => 
            array (
                'id' => 404,
                'inventory_id' => 66,
                'product_id' => 5361,
                'unit_price' => 45,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            404 => 
            array (
                'id' => 405,
                'inventory_id' => 67,
                'product_id' => 2707,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            405 => 
            array (
                'id' => 406,
                'inventory_id' => 21,
                'product_id' => 5482,
                'unit_price' => 160,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            406 => 
            array (
                'id' => 407,
                'inventory_id' => 73,
                'product_id' => 7942,
                'unit_price' => 113,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            407 => 
            array (
                'id' => 408,
                'inventory_id' => 60,
                'product_id' => 3822,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            408 => 
            array (
                'id' => 409,
                'inventory_id' => 41,
                'product_id' => 5453,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            409 => 
            array (
                'id' => 410,
                'inventory_id' => 34,
                'product_id' => 7941,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            410 => 
            array (
                'id' => 411,
                'inventory_id' => 22,
                'product_id' => 5410,
                'unit_price' => 57,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            411 => 
            array (
                'id' => 412,
                'inventory_id' => 8,
                'product_id' => 2631,
                'unit_price' => 184,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            412 => 
            array (
                'id' => 413,
                'inventory_id' => 57,
                'product_id' => 7064,
                'unit_price' => 17,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            413 => 
            array (
                'id' => 414,
                'inventory_id' => 7,
                'product_id' => 6543,
                'unit_price' => 192,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            414 => 
            array (
                'id' => 415,
                'inventory_id' => 80,
                'product_id' => 8747,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            415 => 
            array (
                'id' => 416,
                'inventory_id' => 76,
                'product_id' => 8360,
                'unit_price' => 103,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            416 => 
            array (
                'id' => 417,
                'inventory_id' => 75,
                'product_id' => 5865,
                'unit_price' => 62,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            417 => 
            array (
                'id' => 418,
                'inventory_id' => 55,
                'product_id' => 366,
                'unit_price' => 13,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            418 => 
            array (
                'id' => 419,
                'inventory_id' => 14,
                'product_id' => 5043,
                'unit_price' => 188,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            419 => 
            array (
                'id' => 420,
                'inventory_id' => 80,
                'product_id' => 3949,
                'unit_price' => 80,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            420 => 
            array (
                'id' => 421,
                'inventory_id' => 34,
                'product_id' => 572,
                'unit_price' => 83,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            421 => 
            array (
                'id' => 422,
                'inventory_id' => 94,
                'product_id' => 7879,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            422 => 
            array (
                'id' => 423,
                'inventory_id' => 52,
                'product_id' => 5297,
                'unit_price' => 121,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            423 => 
            array (
                'id' => 424,
                'inventory_id' => 42,
                'product_id' => 9285,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            424 => 
            array (
                'id' => 425,
                'inventory_id' => 56,
                'product_id' => 4764,
                'unit_price' => 193,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            425 => 
            array (
                'id' => 426,
                'inventory_id' => 18,
                'product_id' => 2428,
                'unit_price' => 123,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            426 => 
            array (
                'id' => 427,
                'inventory_id' => 86,
                'product_id' => 9742,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            427 => 
            array (
                'id' => 428,
                'inventory_id' => 54,
                'product_id' => 8954,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            428 => 
            array (
                'id' => 429,
                'inventory_id' => 15,
                'product_id' => 5334,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            429 => 
            array (
                'id' => 430,
                'inventory_id' => 55,
                'product_id' => 161,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            430 => 
            array (
                'id' => 431,
                'inventory_id' => 29,
                'product_id' => 8900,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            431 => 
            array (
                'id' => 432,
                'inventory_id' => 37,
                'product_id' => 9264,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            432 => 
            array (
                'id' => 433,
                'inventory_id' => 65,
                'product_id' => 2852,
                'unit_price' => 104,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            433 => 
            array (
                'id' => 434,
                'inventory_id' => 83,
                'product_id' => 9664,
                'unit_price' => 27,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            434 => 
            array (
                'id' => 435,
                'inventory_id' => 25,
                'product_id' => 5177,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            435 => 
            array (
                'id' => 436,
                'inventory_id' => 28,
                'product_id' => 4808,
                'unit_price' => 114,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            436 => 
            array (
                'id' => 437,
                'inventory_id' => 23,
                'product_id' => 8885,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            437 => 
            array (
                'id' => 438,
                'inventory_id' => 100,
                'product_id' => 3514,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            438 => 
            array (
                'id' => 439,
                'inventory_id' => 31,
                'product_id' => 8762,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            439 => 
            array (
                'id' => 440,
                'inventory_id' => 81,
                'product_id' => 5732,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            440 => 
            array (
                'id' => 441,
                'inventory_id' => 47,
                'product_id' => 6793,
                'unit_price' => 118,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            441 => 
            array (
                'id' => 442,
                'inventory_id' => 75,
                'product_id' => 856,
                'unit_price' => 115,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            442 => 
            array (
                'id' => 443,
                'inventory_id' => 76,
                'product_id' => 6472,
                'unit_price' => 124,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            443 => 
            array (
                'id' => 444,
                'inventory_id' => 92,
                'product_id' => 2472,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            444 => 
            array (
                'id' => 445,
                'inventory_id' => 88,
                'product_id' => 3672,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            445 => 
            array (
                'id' => 446,
                'inventory_id' => 62,
                'product_id' => 4318,
                'unit_price' => 27,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            446 => 
            array (
                'id' => 447,
                'inventory_id' => 96,
                'product_id' => 2278,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            447 => 
            array (
                'id' => 448,
                'inventory_id' => 40,
                'product_id' => 4257,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            448 => 
            array (
                'id' => 449,
                'inventory_id' => 50,
                'product_id' => 4590,
                'unit_price' => 144,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            449 => 
            array (
                'id' => 450,
                'inventory_id' => 88,
                'product_id' => 1022,
                'unit_price' => 171,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            450 => 
            array (
                'id' => 451,
                'inventory_id' => 6,
                'product_id' => 1514,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            451 => 
            array (
                'id' => 452,
                'inventory_id' => 26,
                'product_id' => 9705,
                'unit_price' => 195,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            452 => 
            array (
                'id' => 453,
                'inventory_id' => 7,
                'product_id' => 8813,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            453 => 
            array (
                'id' => 454,
                'inventory_id' => 17,
                'product_id' => 1669,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            454 => 
            array (
                'id' => 455,
                'inventory_id' => 81,
                'product_id' => 6883,
                'unit_price' => 174,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            455 => 
            array (
                'id' => 456,
                'inventory_id' => 22,
                'product_id' => 8821,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            456 => 
            array (
                'id' => 457,
                'inventory_id' => 25,
                'product_id' => 9045,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            457 => 
            array (
                'id' => 458,
                'inventory_id' => 13,
                'product_id' => 9313,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            458 => 
            array (
                'id' => 459,
                'inventory_id' => 37,
                'product_id' => 8104,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            459 => 
            array (
                'id' => 460,
                'inventory_id' => 34,
                'product_id' => 5345,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            460 => 
            array (
                'id' => 461,
                'inventory_id' => 27,
                'product_id' => 5234,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            461 => 
            array (
                'id' => 462,
                'inventory_id' => 22,
                'product_id' => 3522,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            462 => 
            array (
                'id' => 463,
                'inventory_id' => 39,
                'product_id' => 9739,
                'unit_price' => 185,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            463 => 
            array (
                'id' => 464,
                'inventory_id' => 29,
                'product_id' => 565,
                'unit_price' => 44,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:40',
                'updated_at' => '2016-04-17 19:32:40',
            ),
            464 => 
            array (
                'id' => 465,
                'inventory_id' => 1,
                'product_id' => 2975,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            465 => 
            array (
                'id' => 466,
                'inventory_id' => 25,
                'product_id' => 6214,
                'unit_price' => 163,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            466 => 
            array (
                'id' => 467,
                'inventory_id' => 26,
                'product_id' => 8777,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            467 => 
            array (
                'id' => 468,
                'inventory_id' => 64,
                'product_id' => 2281,
                'unit_price' => 113,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            468 => 
            array (
                'id' => 469,
                'inventory_id' => 88,
                'product_id' => 886,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            469 => 
            array (
                'id' => 470,
                'inventory_id' => 21,
                'product_id' => 3001,
                'unit_price' => 185,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            470 => 
            array (
                'id' => 471,
                'inventory_id' => 90,
                'product_id' => 9375,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            471 => 
            array (
                'id' => 472,
                'inventory_id' => 67,
                'product_id' => 5605,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            472 => 
            array (
                'id' => 473,
                'inventory_id' => 8,
                'product_id' => 7456,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            473 => 
            array (
                'id' => 474,
                'inventory_id' => 23,
                'product_id' => 4159,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            474 => 
            array (
                'id' => 475,
                'inventory_id' => 64,
                'product_id' => 5384,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            475 => 
            array (
                'id' => 476,
                'inventory_id' => 30,
                'product_id' => 6840,
                'unit_price' => 59,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            476 => 
            array (
                'id' => 477,
                'inventory_id' => 4,
                'product_id' => 1487,
                'unit_price' => 20,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            477 => 
            array (
                'id' => 478,
                'inventory_id' => 73,
                'product_id' => 7317,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            478 => 
            array (
                'id' => 479,
                'inventory_id' => 87,
                'product_id' => 8328,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            479 => 
            array (
                'id' => 480,
                'inventory_id' => 85,
                'product_id' => 5901,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            480 => 
            array (
                'id' => 481,
                'inventory_id' => 52,
                'product_id' => 8566,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            481 => 
            array (
                'id' => 482,
                'inventory_id' => 90,
                'product_id' => 895,
                'unit_price' => 120,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            482 => 
            array (
                'id' => 483,
                'inventory_id' => 97,
                'product_id' => 4862,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            483 => 
            array (
                'id' => 484,
                'inventory_id' => 70,
                'product_id' => 2800,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            484 => 
            array (
                'id' => 485,
                'inventory_id' => 15,
                'product_id' => 2873,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            485 => 
            array (
                'id' => 486,
                'inventory_id' => 15,
                'product_id' => 9738,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            486 => 
            array (
                'id' => 487,
                'inventory_id' => 89,
                'product_id' => 1920,
                'unit_price' => 141,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            487 => 
            array (
                'id' => 488,
                'inventory_id' => 100,
                'product_id' => 4246,
                'unit_price' => 53,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            488 => 
            array (
                'id' => 489,
                'inventory_id' => 58,
                'product_id' => 4793,
                'unit_price' => 83,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            489 => 
            array (
                'id' => 490,
                'inventory_id' => 92,
                'product_id' => 8063,
                'unit_price' => 30,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            490 => 
            array (
                'id' => 491,
                'inventory_id' => 85,
                'product_id' => 600,
                'unit_price' => 121,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            491 => 
            array (
                'id' => 492,
                'inventory_id' => 94,
                'product_id' => 2502,
                'unit_price' => 127,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            492 => 
            array (
                'id' => 493,
                'inventory_id' => 38,
                'product_id' => 6798,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            493 => 
            array (
                'id' => 494,
                'inventory_id' => 93,
                'product_id' => 4167,
                'unit_price' => 181,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            494 => 
            array (
                'id' => 495,
                'inventory_id' => 1,
                'product_id' => 1255,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            495 => 
            array (
                'id' => 496,
                'inventory_id' => 44,
                'product_id' => 8330,
                'unit_price' => 66,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            496 => 
            array (
                'id' => 497,
                'inventory_id' => 76,
                'product_id' => 7162,
                'unit_price' => 27,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            497 => 
            array (
                'id' => 498,
                'inventory_id' => 56,
                'product_id' => 4935,
                'unit_price' => 70,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            498 => 
            array (
                'id' => 499,
                'inventory_id' => 14,
                'product_id' => 4765,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            499 => 
            array (
                'id' => 500,
                'inventory_id' => 79,
                'product_id' => 115,
                'unit_price' => 123,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
        ));
        \DB::table('products')->insert(array (
            0 => 
            array (
                'id' => 501,
                'inventory_id' => 93,
                'product_id' => 1430,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            1 => 
            array (
                'id' => 502,
                'inventory_id' => 26,
                'product_id' => 5518,
                'unit_price' => 65,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            2 => 
            array (
                'id' => 503,
                'inventory_id' => 96,
                'product_id' => 5047,
                'unit_price' => 53,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            3 => 
            array (
                'id' => 504,
                'inventory_id' => 59,
                'product_id' => 428,
                'unit_price' => 123,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            4 => 
            array (
                'id' => 505,
                'inventory_id' => 90,
                'product_id' => 4845,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            5 => 
            array (
                'id' => 506,
                'inventory_id' => 49,
                'product_id' => 8793,
                'unit_price' => 115,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            6 => 
            array (
                'id' => 507,
                'inventory_id' => 48,
                'product_id' => 9348,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            7 => 
            array (
                'id' => 508,
                'inventory_id' => 43,
                'product_id' => 2767,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            8 => 
            array (
                'id' => 509,
                'inventory_id' => 38,
                'product_id' => 7233,
                'unit_price' => 29,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            9 => 
            array (
                'id' => 510,
                'inventory_id' => 84,
                'product_id' => 2405,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            10 => 
            array (
                'id' => 511,
                'inventory_id' => 56,
                'product_id' => 2012,
                'unit_price' => 97,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            11 => 
            array (
                'id' => 512,
                'inventory_id' => 58,
                'product_id' => 9152,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            12 => 
            array (
                'id' => 513,
                'inventory_id' => 52,
                'product_id' => 6823,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            13 => 
            array (
                'id' => 514,
                'inventory_id' => 62,
                'product_id' => 5090,
                'unit_price' => 157,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            14 => 
            array (
                'id' => 515,
                'inventory_id' => 87,
                'product_id' => 8191,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            15 => 
            array (
                'id' => 516,
                'inventory_id' => 16,
                'product_id' => 9152,
                'unit_price' => 149,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            16 => 
            array (
                'id' => 517,
                'inventory_id' => 3,
                'product_id' => 6157,
                'unit_price' => 90,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            17 => 
            array (
                'id' => 518,
                'inventory_id' => 71,
                'product_id' => 4529,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            18 => 
            array (
                'id' => 519,
                'inventory_id' => 72,
                'product_id' => 7071,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            19 => 
            array (
                'id' => 520,
                'inventory_id' => 55,
                'product_id' => 8280,
                'unit_price' => 93,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            20 => 
            array (
                'id' => 521,
                'inventory_id' => 58,
                'product_id' => 2470,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            21 => 
            array (
                'id' => 522,
                'inventory_id' => 17,
                'product_id' => 9988,
                'unit_price' => 44,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            22 => 
            array (
                'id' => 523,
                'inventory_id' => 42,
                'product_id' => 9658,
                'unit_price' => 144,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            23 => 
            array (
                'id' => 524,
                'inventory_id' => 20,
                'product_id' => 8623,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            24 => 
            array (
                'id' => 525,
                'inventory_id' => 44,
                'product_id' => 5165,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            25 => 
            array (
                'id' => 526,
                'inventory_id' => 63,
                'product_id' => 9420,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            26 => 
            array (
                'id' => 527,
                'inventory_id' => 40,
                'product_id' => 4140,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            27 => 
            array (
                'id' => 528,
                'inventory_id' => 6,
                'product_id' => 2723,
                'unit_price' => 200,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            28 => 
            array (
                'id' => 529,
                'inventory_id' => 83,
                'product_id' => 5043,
                'unit_price' => 60,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            29 => 
            array (
                'id' => 530,
                'inventory_id' => 79,
                'product_id' => 3804,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            30 => 
            array (
                'id' => 531,
                'inventory_id' => 27,
                'product_id' => 8889,
                'unit_price' => 98,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            31 => 
            array (
                'id' => 532,
                'inventory_id' => 69,
                'product_id' => 4706,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            32 => 
            array (
                'id' => 533,
                'inventory_id' => 88,
                'product_id' => 3781,
                'unit_price' => 193,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            33 => 
            array (
                'id' => 534,
                'inventory_id' => 91,
                'product_id' => 7647,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            34 => 
            array (
                'id' => 535,
                'inventory_id' => 47,
                'product_id' => 7013,
                'unit_price' => 83,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            35 => 
            array (
                'id' => 536,
                'inventory_id' => 90,
                'product_id' => 8348,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            36 => 
            array (
                'id' => 537,
                'inventory_id' => 5,
                'product_id' => 2760,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            37 => 
            array (
                'id' => 538,
                'inventory_id' => 54,
                'product_id' => 7176,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            38 => 
            array (
                'id' => 539,
                'inventory_id' => 63,
                'product_id' => 9155,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            39 => 
            array (
                'id' => 540,
                'inventory_id' => 21,
                'product_id' => 6733,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            40 => 
            array (
                'id' => 541,
                'inventory_id' => 82,
                'product_id' => 3078,
                'unit_price' => 160,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            41 => 
            array (
                'id' => 542,
                'inventory_id' => 24,
                'product_id' => 5715,
                'unit_price' => 50,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            42 => 
            array (
                'id' => 543,
                'inventory_id' => 78,
                'product_id' => 8263,
                'unit_price' => 104,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            43 => 
            array (
                'id' => 544,
                'inventory_id' => 36,
                'product_id' => 942,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            44 => 
            array (
                'id' => 545,
                'inventory_id' => 28,
                'product_id' => 5991,
                'unit_price' => 191,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            45 => 
            array (
                'id' => 546,
                'inventory_id' => 50,
                'product_id' => 6170,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            46 => 
            array (
                'id' => 547,
                'inventory_id' => 48,
                'product_id' => 1656,
                'unit_price' => 133,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            47 => 
            array (
                'id' => 548,
                'inventory_id' => 74,
                'product_id' => 6301,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            48 => 
            array (
                'id' => 549,
                'inventory_id' => 50,
                'product_id' => 9998,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            49 => 
            array (
                'id' => 550,
                'inventory_id' => 51,
                'product_id' => 9975,
                'unit_price' => 148,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            50 => 
            array (
                'id' => 551,
                'inventory_id' => 81,
                'product_id' => 7062,
                'unit_price' => 111,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            51 => 
            array (
                'id' => 552,
                'inventory_id' => 87,
                'product_id' => 79,
                'unit_price' => 141,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            52 => 
            array (
                'id' => 553,
                'inventory_id' => 37,
                'product_id' => 7870,
                'unit_price' => 128,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            53 => 
            array (
                'id' => 554,
                'inventory_id' => 39,
                'product_id' => 3411,
                'unit_price' => 179,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            54 => 
            array (
                'id' => 555,
                'inventory_id' => 96,
                'product_id' => 8367,
                'unit_price' => 17,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            55 => 
            array (
                'id' => 556,
                'inventory_id' => 42,
                'product_id' => 7916,
                'unit_price' => 177,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            56 => 
            array (
                'id' => 557,
                'inventory_id' => 44,
                'product_id' => 697,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            57 => 
            array (
                'id' => 558,
                'inventory_id' => 65,
                'product_id' => 5896,
                'unit_price' => 186,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            58 => 
            array (
                'id' => 559,
                'inventory_id' => 27,
                'product_id' => 444,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            59 => 
            array (
                'id' => 560,
                'inventory_id' => 43,
                'product_id' => 2694,
                'unit_price' => 32,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            60 => 
            array (
                'id' => 561,
                'inventory_id' => 87,
                'product_id' => 3328,
                'unit_price' => 28,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            61 => 
            array (
                'id' => 562,
                'inventory_id' => 26,
                'product_id' => 4767,
                'unit_price' => 188,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            62 => 
            array (
                'id' => 563,
                'inventory_id' => 100,
                'product_id' => 7873,
                'unit_price' => 103,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            63 => 
            array (
                'id' => 564,
                'inventory_id' => 72,
                'product_id' => 896,
                'unit_price' => 196,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            64 => 
            array (
                'id' => 565,
                'inventory_id' => 43,
                'product_id' => 727,
                'unit_price' => 120,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            65 => 
            array (
                'id' => 566,
                'inventory_id' => 81,
                'product_id' => 6485,
                'unit_price' => 195,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            66 => 
            array (
                'id' => 567,
                'inventory_id' => 20,
                'product_id' => 4635,
                'unit_price' => 97,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            67 => 
            array (
                'id' => 568,
                'inventory_id' => 9,
                'product_id' => 4214,
                'unit_price' => 188,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            68 => 
            array (
                'id' => 569,
                'inventory_id' => 88,
                'product_id' => 9028,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            69 => 
            array (
                'id' => 570,
                'inventory_id' => 39,
                'product_id' => 900,
                'unit_price' => 59,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            70 => 
            array (
                'id' => 571,
                'inventory_id' => 87,
                'product_id' => 2628,
                'unit_price' => 56,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            71 => 
            array (
                'id' => 572,
                'inventory_id' => 98,
                'product_id' => 8874,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            72 => 
            array (
                'id' => 573,
                'inventory_id' => 83,
                'product_id' => 620,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            73 => 
            array (
                'id' => 574,
                'inventory_id' => 95,
                'product_id' => 6996,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            74 => 
            array (
                'id' => 575,
                'inventory_id' => 53,
                'product_id' => 5346,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            75 => 
            array (
                'id' => 576,
                'inventory_id' => 53,
                'product_id' => 1253,
                'unit_price' => 117,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            76 => 
            array (
                'id' => 577,
                'inventory_id' => 33,
                'product_id' => 389,
                'unit_price' => 168,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            77 => 
            array (
                'id' => 578,
                'inventory_id' => 7,
                'product_id' => 9022,
                'unit_price' => 72,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            78 => 
            array (
                'id' => 579,
                'inventory_id' => 40,
                'product_id' => 705,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            79 => 
            array (
                'id' => 580,
                'inventory_id' => 41,
                'product_id' => 6013,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            80 => 
            array (
                'id' => 581,
                'inventory_id' => 74,
                'product_id' => 8449,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            81 => 
            array (
                'id' => 582,
                'inventory_id' => 99,
                'product_id' => 6106,
                'unit_price' => 20,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            82 => 
            array (
                'id' => 583,
                'inventory_id' => 12,
                'product_id' => 2147,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            83 => 
            array (
                'id' => 584,
                'inventory_id' => 90,
                'product_id' => 8298,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            84 => 
            array (
                'id' => 585,
                'inventory_id' => 16,
                'product_id' => 9514,
                'unit_price' => 193,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            85 => 
            array (
                'id' => 586,
                'inventory_id' => 69,
                'product_id' => 424,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            86 => 
            array (
                'id' => 587,
                'inventory_id' => 17,
                'product_id' => 451,
                'unit_price' => 160,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            87 => 
            array (
                'id' => 588,
                'inventory_id' => 55,
                'product_id' => 3808,
                'unit_price' => 149,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            88 => 
            array (
                'id' => 589,
                'inventory_id' => 65,
                'product_id' => 4522,
                'unit_price' => 143,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            89 => 
            array (
                'id' => 590,
                'inventory_id' => 21,
                'product_id' => 2338,
                'unit_price' => 114,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            90 => 
            array (
                'id' => 591,
                'inventory_id' => 93,
                'product_id' => 133,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            91 => 
            array (
                'id' => 592,
                'inventory_id' => 32,
                'product_id' => 1914,
                'unit_price' => 67,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            92 => 
            array (
                'id' => 593,
                'inventory_id' => 79,
                'product_id' => 3313,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            93 => 
            array (
                'id' => 594,
                'inventory_id' => 19,
                'product_id' => 5742,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            94 => 
            array (
                'id' => 595,
                'inventory_id' => 9,
                'product_id' => 3935,
                'unit_price' => 30,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            95 => 
            array (
                'id' => 596,
                'inventory_id' => 47,
                'product_id' => 1091,
                'unit_price' => 133,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            96 => 
            array (
                'id' => 597,
                'inventory_id' => 88,
                'product_id' => 278,
                'unit_price' => 25,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            97 => 
            array (
                'id' => 598,
                'inventory_id' => 15,
                'product_id' => 9522,
                'unit_price' => 147,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            98 => 
            array (
                'id' => 599,
                'inventory_id' => 34,
                'product_id' => 8038,
                'unit_price' => 92,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            99 => 
            array (
                'id' => 600,
                'inventory_id' => 61,
                'product_id' => 8744,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            100 => 
            array (
                'id' => 601,
                'inventory_id' => 29,
                'product_id' => 6773,
                'unit_price' => 165,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            101 => 
            array (
                'id' => 602,
                'inventory_id' => 7,
                'product_id' => 4227,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            102 => 
            array (
                'id' => 603,
                'inventory_id' => 91,
                'product_id' => 4267,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            103 => 
            array (
                'id' => 604,
                'inventory_id' => 43,
                'product_id' => 406,
                'unit_price' => 29,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            104 => 
            array (
                'id' => 605,
                'inventory_id' => 90,
                'product_id' => 6576,
                'unit_price' => 74,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            105 => 
            array (
                'id' => 606,
                'inventory_id' => 5,
                'product_id' => 9048,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            106 => 
            array (
                'id' => 607,
                'inventory_id' => 71,
                'product_id' => 2472,
                'unit_price' => 170,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            107 => 
            array (
                'id' => 608,
                'inventory_id' => 91,
                'product_id' => 3464,
                'unit_price' => 79,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            108 => 
            array (
                'id' => 609,
                'inventory_id' => 31,
                'product_id' => 2127,
                'unit_price' => 83,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            109 => 
            array (
                'id' => 610,
                'inventory_id' => 21,
                'product_id' => 8802,
                'unit_price' => 76,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            110 => 
            array (
                'id' => 611,
                'inventory_id' => 12,
                'product_id' => 9243,
                'unit_price' => 90,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            111 => 
            array (
                'id' => 612,
                'inventory_id' => 85,
                'product_id' => 6176,
                'unit_price' => 25,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            112 => 
            array (
                'id' => 613,
                'inventory_id' => 36,
                'product_id' => 3367,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            113 => 
            array (
                'id' => 614,
                'inventory_id' => 42,
                'product_id' => 3383,
                'unit_price' => 176,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            114 => 
            array (
                'id' => 615,
                'inventory_id' => 1,
                'product_id' => 8380,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            115 => 
            array (
                'id' => 616,
                'inventory_id' => 94,
                'product_id' => 3960,
                'unit_price' => 111,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            116 => 
            array (
                'id' => 617,
                'inventory_id' => 98,
                'product_id' => 3635,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            117 => 
            array (
                'id' => 618,
                'inventory_id' => 25,
                'product_id' => 9757,
                'unit_price' => 66,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            118 => 
            array (
                'id' => 619,
                'inventory_id' => 54,
                'product_id' => 346,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            119 => 
            array (
                'id' => 620,
                'inventory_id' => 64,
                'product_id' => 2704,
                'unit_price' => 76,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            120 => 
            array (
                'id' => 621,
                'inventory_id' => 69,
                'product_id' => 5448,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            121 => 
            array (
                'id' => 622,
                'inventory_id' => 61,
                'product_id' => 5515,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            122 => 
            array (
                'id' => 623,
                'inventory_id' => 85,
                'product_id' => 8781,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            123 => 
            array (
                'id' => 624,
                'inventory_id' => 79,
                'product_id' => 3756,
                'unit_price' => 199,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            124 => 
            array (
                'id' => 625,
                'inventory_id' => 32,
                'product_id' => 835,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            125 => 
            array (
                'id' => 626,
                'inventory_id' => 54,
                'product_id' => 7076,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            126 => 
            array (
                'id' => 627,
                'inventory_id' => 79,
                'product_id' => 4100,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            127 => 
            array (
                'id' => 628,
                'inventory_id' => 21,
                'product_id' => 3448,
                'unit_price' => 87,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            128 => 
            array (
                'id' => 629,
                'inventory_id' => 37,
                'product_id' => 6248,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            129 => 
            array (
                'id' => 630,
                'inventory_id' => 34,
                'product_id' => 9518,
                'unit_price' => 13,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            130 => 
            array (
                'id' => 631,
                'inventory_id' => 92,
                'product_id' => 5644,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            131 => 
            array (
                'id' => 632,
                'inventory_id' => 27,
                'product_id' => 9125,
                'unit_price' => 96,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            132 => 
            array (
                'id' => 633,
                'inventory_id' => 98,
                'product_id' => 7243,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            133 => 
            array (
                'id' => 634,
                'inventory_id' => 6,
                'product_id' => 9900,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            134 => 
            array (
                'id' => 635,
                'inventory_id' => 61,
                'product_id' => 9767,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            135 => 
            array (
                'id' => 636,
                'inventory_id' => 52,
                'product_id' => 8680,
                'unit_price' => 56,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            136 => 
            array (
                'id' => 637,
                'inventory_id' => 4,
                'product_id' => 1404,
                'unit_price' => 78,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            137 => 
            array (
                'id' => 638,
                'inventory_id' => 22,
                'product_id' => 8057,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            138 => 
            array (
                'id' => 639,
                'inventory_id' => 74,
                'product_id' => 979,
                'unit_price' => 174,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            139 => 
            array (
                'id' => 640,
                'inventory_id' => 62,
                'product_id' => 5336,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            140 => 
            array (
                'id' => 641,
                'inventory_id' => 19,
                'product_id' => 5341,
                'unit_price' => 55,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            141 => 
            array (
                'id' => 642,
                'inventory_id' => 54,
                'product_id' => 3969,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            142 => 
            array (
                'id' => 643,
                'inventory_id' => 100,
                'product_id' => 621,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            143 => 
            array (
                'id' => 644,
                'inventory_id' => 24,
                'product_id' => 8477,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            144 => 
            array (
                'id' => 645,
                'inventory_id' => 79,
                'product_id' => 6589,
                'unit_price' => 45,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            145 => 
            array (
                'id' => 646,
                'inventory_id' => 87,
                'product_id' => 8913,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            146 => 
            array (
                'id' => 647,
                'inventory_id' => 50,
                'product_id' => 16,
                'unit_price' => 53,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            147 => 
            array (
                'id' => 648,
                'inventory_id' => 23,
                'product_id' => 5018,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            148 => 
            array (
                'id' => 649,
                'inventory_id' => 74,
                'product_id' => 2518,
                'unit_price' => 101,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            149 => 
            array (
                'id' => 650,
                'inventory_id' => 11,
                'product_id' => 2293,
                'unit_price' => 82,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            150 => 
            array (
                'id' => 651,
                'inventory_id' => 41,
                'product_id' => 1072,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            151 => 
            array (
                'id' => 652,
                'inventory_id' => 18,
                'product_id' => 5998,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            152 => 
            array (
                'id' => 653,
                'inventory_id' => 46,
                'product_id' => 1495,
                'unit_price' => 142,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            153 => 
            array (
                'id' => 654,
                'inventory_id' => 32,
                'product_id' => 6397,
                'unit_price' => 83,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            154 => 
            array (
                'id' => 655,
                'inventory_id' => 99,
                'product_id' => 9281,
                'unit_price' => 66,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            155 => 
            array (
                'id' => 656,
                'inventory_id' => 15,
                'product_id' => 276,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            156 => 
            array (
                'id' => 657,
                'inventory_id' => 73,
                'product_id' => 2174,
                'unit_price' => 79,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            157 => 
            array (
                'id' => 658,
                'inventory_id' => 77,
                'product_id' => 1889,
                'unit_price' => 104,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            158 => 
            array (
                'id' => 659,
                'inventory_id' => 70,
                'product_id' => 749,
                'unit_price' => 26,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            159 => 
            array (
                'id' => 660,
                'inventory_id' => 4,
                'product_id' => 9533,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            160 => 
            array (
                'id' => 661,
                'inventory_id' => 61,
                'product_id' => 3741,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            161 => 
            array (
                'id' => 662,
                'inventory_id' => 96,
                'product_id' => 5152,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            162 => 
            array (
                'id' => 663,
                'inventory_id' => 54,
                'product_id' => 1739,
                'unit_price' => 185,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            163 => 
            array (
                'id' => 664,
                'inventory_id' => 26,
                'product_id' => 8368,
                'unit_price' => 100,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            164 => 
            array (
                'id' => 665,
                'inventory_id' => 78,
                'product_id' => 4605,
                'unit_price' => 147,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            165 => 
            array (
                'id' => 666,
                'inventory_id' => 43,
                'product_id' => 9681,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            166 => 
            array (
                'id' => 667,
                'inventory_id' => 19,
                'product_id' => 559,
                'unit_price' => 191,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            167 => 
            array (
                'id' => 668,
                'inventory_id' => 48,
                'product_id' => 4102,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            168 => 
            array (
                'id' => 669,
                'inventory_id' => 4,
                'product_id' => 2623,
                'unit_price' => 45,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            169 => 
            array (
                'id' => 670,
                'inventory_id' => 56,
                'product_id' => 6533,
                'unit_price' => 80,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            170 => 
            array (
                'id' => 671,
                'inventory_id' => 11,
                'product_id' => 2570,
                'unit_price' => 12,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            171 => 
            array (
                'id' => 672,
                'inventory_id' => 55,
                'product_id' => 6222,
                'unit_price' => 153,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            172 => 
            array (
                'id' => 673,
                'inventory_id' => 28,
                'product_id' => 7078,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            173 => 
            array (
                'id' => 674,
                'inventory_id' => 70,
                'product_id' => 7355,
                'unit_price' => 54,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            174 => 
            array (
                'id' => 675,
                'inventory_id' => 2,
                'product_id' => 3592,
                'unit_price' => 87,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            175 => 
            array (
                'id' => 676,
                'inventory_id' => 93,
                'product_id' => 4831,
                'unit_price' => 104,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            176 => 
            array (
                'id' => 677,
                'inventory_id' => 14,
                'product_id' => 2200,
                'unit_price' => 150,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            177 => 
            array (
                'id' => 678,
                'inventory_id' => 90,
                'product_id' => 2889,
                'unit_price' => 170,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            178 => 
            array (
                'id' => 679,
                'inventory_id' => 42,
                'product_id' => 3909,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            179 => 
            array (
                'id' => 680,
                'inventory_id' => 37,
                'product_id' => 7635,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            180 => 
            array (
                'id' => 681,
                'inventory_id' => 36,
                'product_id' => 7543,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            181 => 
            array (
                'id' => 682,
                'inventory_id' => 91,
                'product_id' => 5291,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            182 => 
            array (
                'id' => 683,
                'inventory_id' => 85,
                'product_id' => 6736,
                'unit_price' => 139,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            183 => 
            array (
                'id' => 684,
                'inventory_id' => 82,
                'product_id' => 9896,
                'unit_price' => 101,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            184 => 
            array (
                'id' => 685,
                'inventory_id' => 100,
                'product_id' => 5339,
                'unit_price' => 170,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            185 => 
            array (
                'id' => 686,
                'inventory_id' => 27,
                'product_id' => 151,
                'unit_price' => 194,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            186 => 
            array (
                'id' => 687,
                'inventory_id' => 37,
                'product_id' => 8926,
                'unit_price' => 97,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            187 => 
            array (
                'id' => 688,
                'inventory_id' => 64,
                'product_id' => 9003,
                'unit_price' => 129,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            188 => 
            array (
                'id' => 689,
                'inventory_id' => 65,
                'product_id' => 5241,
                'unit_price' => 200,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            189 => 
            array (
                'id' => 690,
                'inventory_id' => 35,
                'product_id' => 8549,
                'unit_price' => 157,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            190 => 
            array (
                'id' => 691,
                'inventory_id' => 42,
                'product_id' => 9789,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            191 => 
            array (
                'id' => 692,
                'inventory_id' => 44,
                'product_id' => 6879,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            192 => 
            array (
                'id' => 693,
                'inventory_id' => 48,
                'product_id' => 9411,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            193 => 
            array (
                'id' => 694,
                'inventory_id' => 53,
                'product_id' => 5929,
                'unit_price' => 101,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            194 => 
            array (
                'id' => 695,
                'inventory_id' => 32,
                'product_id' => 1853,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            195 => 
            array (
                'id' => 696,
                'inventory_id' => 4,
                'product_id' => 915,
                'unit_price' => 113,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            196 => 
            array (
                'id' => 697,
                'inventory_id' => 37,
                'product_id' => 5159,
                'unit_price' => 194,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            197 => 
            array (
                'id' => 698,
                'inventory_id' => 93,
                'product_id' => 4428,
                'unit_price' => 70,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            198 => 
            array (
                'id' => 699,
                'inventory_id' => 49,
                'product_id' => 909,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            199 => 
            array (
                'id' => 700,
                'inventory_id' => 45,
                'product_id' => 434,
                'unit_price' => 191,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            200 => 
            array (
                'id' => 701,
                'inventory_id' => 92,
                'product_id' => 4682,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            201 => 
            array (
                'id' => 702,
                'inventory_id' => 45,
                'product_id' => 7486,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            202 => 
            array (
                'id' => 703,
                'inventory_id' => 23,
                'product_id' => 3225,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            203 => 
            array (
                'id' => 704,
                'inventory_id' => 69,
                'product_id' => 9698,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            204 => 
            array (
                'id' => 705,
                'inventory_id' => 15,
                'product_id' => 6259,
                'unit_price' => 75,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            205 => 
            array (
                'id' => 706,
                'inventory_id' => 8,
                'product_id' => 6017,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            206 => 
            array (
                'id' => 707,
                'inventory_id' => 55,
                'product_id' => 4004,
                'unit_price' => 101,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            207 => 
            array (
                'id' => 708,
                'inventory_id' => 14,
                'product_id' => 7380,
                'unit_price' => 192,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            208 => 
            array (
                'id' => 709,
                'inventory_id' => 73,
                'product_id' => 1322,
                'unit_price' => 188,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            209 => 
            array (
                'id' => 710,
                'inventory_id' => 86,
                'product_id' => 1734,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            210 => 
            array (
                'id' => 711,
                'inventory_id' => 13,
                'product_id' => 3229,
                'unit_price' => 93,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            211 => 
            array (
                'id' => 712,
                'inventory_id' => 45,
                'product_id' => 8430,
                'unit_price' => 88,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            212 => 
            array (
                'id' => 713,
                'inventory_id' => 29,
                'product_id' => 9520,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            213 => 
            array (
                'id' => 714,
                'inventory_id' => 85,
                'product_id' => 520,
                'unit_price' => 129,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            214 => 
            array (
                'id' => 715,
                'inventory_id' => 1,
                'product_id' => 8419,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            215 => 
            array (
                'id' => 716,
                'inventory_id' => 89,
                'product_id' => 4346,
                'unit_price' => 185,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            216 => 
            array (
                'id' => 717,
                'inventory_id' => 86,
                'product_id' => 588,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            217 => 
            array (
                'id' => 718,
                'inventory_id' => 10,
                'product_id' => 6223,
                'unit_price' => 130,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            218 => 
            array (
                'id' => 719,
                'inventory_id' => 90,
                'product_id' => 9399,
                'unit_price' => 15,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            219 => 
            array (
                'id' => 720,
                'inventory_id' => 95,
                'product_id' => 7439,
                'unit_price' => 42,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            220 => 
            array (
                'id' => 721,
                'inventory_id' => 46,
                'product_id' => 1989,
                'unit_price' => 98,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            221 => 
            array (
                'id' => 722,
                'inventory_id' => 27,
                'product_id' => 1062,
                'unit_price' => 67,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            222 => 
            array (
                'id' => 723,
                'inventory_id' => 41,
                'product_id' => 5089,
                'unit_price' => 48,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            223 => 
            array (
                'id' => 724,
                'inventory_id' => 24,
                'product_id' => 5283,
                'unit_price' => 12,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            224 => 
            array (
                'id' => 725,
                'inventory_id' => 46,
                'product_id' => 1021,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            225 => 
            array (
                'id' => 726,
                'inventory_id' => 56,
                'product_id' => 6839,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            226 => 
            array (
                'id' => 727,
                'inventory_id' => 52,
                'product_id' => 9660,
                'unit_price' => 52,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            227 => 
            array (
                'id' => 728,
                'inventory_id' => 93,
                'product_id' => 6218,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            228 => 
            array (
                'id' => 729,
                'inventory_id' => 43,
                'product_id' => 7100,
                'unit_price' => 159,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            229 => 
            array (
                'id' => 730,
                'inventory_id' => 12,
                'product_id' => 7981,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            230 => 
            array (
                'id' => 731,
                'inventory_id' => 28,
                'product_id' => 9966,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            231 => 
            array (
                'id' => 732,
                'inventory_id' => 44,
                'product_id' => 6131,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            232 => 
            array (
                'id' => 733,
                'inventory_id' => 39,
                'product_id' => 253,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            233 => 
            array (
                'id' => 734,
                'inventory_id' => 55,
                'product_id' => 7221,
                'unit_price' => 73,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            234 => 
            array (
                'id' => 735,
                'inventory_id' => 1,
                'product_id' => 1557,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            235 => 
            array (
                'id' => 736,
                'inventory_id' => 12,
                'product_id' => 7084,
                'unit_price' => 184,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            236 => 
            array (
                'id' => 737,
                'inventory_id' => 56,
                'product_id' => 831,
                'unit_price' => 153,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            237 => 
            array (
                'id' => 738,
                'inventory_id' => 85,
                'product_id' => 4738,
                'unit_price' => 19,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            238 => 
            array (
                'id' => 739,
                'inventory_id' => 72,
                'product_id' => 3596,
                'unit_price' => 199,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            239 => 
            array (
                'id' => 740,
                'inventory_id' => 67,
                'product_id' => 7405,
                'unit_price' => 74,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            240 => 
            array (
                'id' => 741,
                'inventory_id' => 78,
                'product_id' => 5551,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            241 => 
            array (
                'id' => 742,
                'inventory_id' => 75,
                'product_id' => 9608,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            242 => 
            array (
                'id' => 743,
                'inventory_id' => 64,
                'product_id' => 3430,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            243 => 
            array (
                'id' => 744,
                'inventory_id' => 22,
                'product_id' => 6352,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            244 => 
            array (
                'id' => 745,
                'inventory_id' => 83,
                'product_id' => 9567,
                'unit_price' => 186,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            245 => 
            array (
                'id' => 746,
                'inventory_id' => 16,
                'product_id' => 9358,
                'unit_price' => 103,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            246 => 
            array (
                'id' => 747,
                'inventory_id' => 34,
                'product_id' => 6595,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            247 => 
            array (
                'id' => 748,
                'inventory_id' => 71,
                'product_id' => 9220,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            248 => 
            array (
                'id' => 749,
                'inventory_id' => 94,
                'product_id' => 5521,
                'unit_price' => 77,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            249 => 
            array (
                'id' => 750,
                'inventory_id' => 3,
                'product_id' => 7373,
                'unit_price' => 23,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            250 => 
            array (
                'id' => 751,
                'inventory_id' => 57,
                'product_id' => 6772,
                'unit_price' => 174,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            251 => 
            array (
                'id' => 752,
                'inventory_id' => 34,
                'product_id' => 5296,
                'unit_price' => 194,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            252 => 
            array (
                'id' => 753,
                'inventory_id' => 1,
                'product_id' => 9811,
                'unit_price' => 143,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            253 => 
            array (
                'id' => 754,
                'inventory_id' => 5,
                'product_id' => 7379,
                'unit_price' => 54,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            254 => 
            array (
                'id' => 755,
                'inventory_id' => 15,
                'product_id' => 7961,
                'unit_price' => 128,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            255 => 
            array (
                'id' => 756,
                'inventory_id' => 82,
                'product_id' => 8846,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            256 => 
            array (
                'id' => 757,
                'inventory_id' => 87,
                'product_id' => 2038,
                'unit_price' => 166,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            257 => 
            array (
                'id' => 758,
                'inventory_id' => 72,
                'product_id' => 1945,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            258 => 
            array (
                'id' => 759,
                'inventory_id' => 41,
                'product_id' => 8989,
                'unit_price' => 62,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            259 => 
            array (
                'id' => 760,
                'inventory_id' => 17,
                'product_id' => 2189,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            260 => 
            array (
                'id' => 761,
                'inventory_id' => 52,
                'product_id' => 351,
                'unit_price' => 59,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            261 => 
            array (
                'id' => 762,
                'inventory_id' => 43,
                'product_id' => 4235,
                'unit_price' => 182,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            262 => 
            array (
                'id' => 763,
                'inventory_id' => 56,
                'product_id' => 1629,
                'unit_price' => 108,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            263 => 
            array (
                'id' => 764,
                'inventory_id' => 76,
                'product_id' => 1444,
                'unit_price' => 182,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            264 => 
            array (
                'id' => 765,
                'inventory_id' => 47,
                'product_id' => 642,
                'unit_price' => 80,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            265 => 
            array (
                'id' => 766,
                'inventory_id' => 34,
                'product_id' => 8391,
                'unit_price' => 182,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            266 => 
            array (
                'id' => 767,
                'inventory_id' => 89,
                'product_id' => 2967,
                'unit_price' => 84,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            267 => 
            array (
                'id' => 768,
                'inventory_id' => 53,
                'product_id' => 3182,
                'unit_price' => 49,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            268 => 
            array (
                'id' => 769,
                'inventory_id' => 83,
                'product_id' => 3813,
                'unit_price' => 63,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            269 => 
            array (
                'id' => 770,
                'inventory_id' => 55,
                'product_id' => 4957,
                'unit_price' => 133,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            270 => 
            array (
                'id' => 771,
                'inventory_id' => 60,
                'product_id' => 9790,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            271 => 
            array (
                'id' => 772,
                'inventory_id' => 74,
                'product_id' => 8920,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            272 => 
            array (
                'id' => 773,
                'inventory_id' => 68,
                'product_id' => 9021,
                'unit_price' => 161,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            273 => 
            array (
                'id' => 774,
                'inventory_id' => 73,
                'product_id' => 9895,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            274 => 
            array (
                'id' => 775,
                'inventory_id' => 83,
                'product_id' => 9926,
                'unit_price' => 181,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            275 => 
            array (
                'id' => 776,
                'inventory_id' => 25,
                'product_id' => 7116,
                'unit_price' => 55,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            276 => 
            array (
                'id' => 777,
                'inventory_id' => 82,
                'product_id' => 3136,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            277 => 
            array (
                'id' => 778,
                'inventory_id' => 50,
                'product_id' => 3644,
                'unit_price' => 105,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            278 => 
            array (
                'id' => 779,
                'inventory_id' => 84,
                'product_id' => 5658,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            279 => 
            array (
                'id' => 780,
                'inventory_id' => 54,
                'product_id' => 8165,
                'unit_price' => 155,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            280 => 
            array (
                'id' => 781,
                'inventory_id' => 14,
                'product_id' => 8883,
                'unit_price' => 92,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            281 => 
            array (
                'id' => 782,
                'inventory_id' => 42,
                'product_id' => 2923,
                'unit_price' => 37,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            282 => 
            array (
                'id' => 783,
                'inventory_id' => 2,
                'product_id' => 448,
                'unit_price' => 107,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            283 => 
            array (
                'id' => 784,
                'inventory_id' => 17,
                'product_id' => 7708,
                'unit_price' => 101,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            284 => 
            array (
                'id' => 785,
                'inventory_id' => 12,
                'product_id' => 3425,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            285 => 
            array (
                'id' => 786,
                'inventory_id' => 44,
                'product_id' => 140,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            286 => 
            array (
                'id' => 787,
                'inventory_id' => 97,
                'product_id' => 2410,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            287 => 
            array (
                'id' => 788,
                'inventory_id' => 90,
                'product_id' => 8691,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            288 => 
            array (
                'id' => 789,
                'inventory_id' => 23,
                'product_id' => 4828,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            289 => 
            array (
                'id' => 790,
                'inventory_id' => 6,
                'product_id' => 7163,
                'unit_price' => 74,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            290 => 
            array (
                'id' => 791,
                'inventory_id' => 4,
                'product_id' => 4542,
                'unit_price' => 195,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            291 => 
            array (
                'id' => 792,
                'inventory_id' => 99,
                'product_id' => 5827,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            292 => 
            array (
                'id' => 793,
                'inventory_id' => 10,
                'product_id' => 531,
                'unit_price' => 136,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            293 => 
            array (
                'id' => 794,
                'inventory_id' => 37,
                'product_id' => 4286,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            294 => 
            array (
                'id' => 795,
                'inventory_id' => 88,
                'product_id' => 4462,
                'unit_price' => 184,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            295 => 
            array (
                'id' => 796,
                'inventory_id' => 60,
                'product_id' => 3762,
                'unit_price' => 96,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            296 => 
            array (
                'id' => 797,
                'inventory_id' => 42,
                'product_id' => 8154,
                'unit_price' => 167,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            297 => 
            array (
                'id' => 798,
                'inventory_id' => 41,
                'product_id' => 563,
                'unit_price' => 45,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            298 => 
            array (
                'id' => 799,
                'inventory_id' => 63,
                'product_id' => 7735,
                'unit_price' => 89,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            299 => 
            array (
                'id' => 800,
                'inventory_id' => 13,
                'product_id' => 6922,
                'unit_price' => 65,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            300 => 
            array (
                'id' => 801,
                'inventory_id' => 3,
                'product_id' => 8989,
                'unit_price' => 189,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            301 => 
            array (
                'id' => 802,
                'inventory_id' => 59,
                'product_id' => 2523,
                'unit_price' => 153,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            302 => 
            array (
                'id' => 803,
                'inventory_id' => 80,
                'product_id' => 9842,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            303 => 
            array (
                'id' => 804,
                'inventory_id' => 98,
                'product_id' => 3648,
                'unit_price' => 165,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            304 => 
            array (
                'id' => 805,
                'inventory_id' => 13,
                'product_id' => 8911,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            305 => 
            array (
                'id' => 806,
                'inventory_id' => 51,
                'product_id' => 5,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            306 => 
            array (
                'id' => 807,
                'inventory_id' => 57,
                'product_id' => 5422,
                'unit_price' => 158,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            307 => 
            array (
                'id' => 808,
                'inventory_id' => 29,
                'product_id' => 7930,
                'unit_price' => 78,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            308 => 
            array (
                'id' => 809,
                'inventory_id' => 22,
                'product_id' => 7301,
                'unit_price' => 104,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            309 => 
            array (
                'id' => 810,
                'inventory_id' => 42,
                'product_id' => 1353,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            310 => 
            array (
                'id' => 811,
                'inventory_id' => 39,
                'product_id' => 9113,
                'unit_price' => 68,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            311 => 
            array (
                'id' => 812,
                'inventory_id' => 99,
                'product_id' => 6726,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            312 => 
            array (
                'id' => 813,
                'inventory_id' => 63,
                'product_id' => 8466,
                'unit_price' => 44,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            313 => 
            array (
                'id' => 814,
                'inventory_id' => 20,
                'product_id' => 3402,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            314 => 
            array (
                'id' => 815,
                'inventory_id' => 62,
                'product_id' => 3730,
                'unit_price' => 191,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            315 => 
            array (
                'id' => 816,
                'inventory_id' => 74,
                'product_id' => 5140,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            316 => 
            array (
                'id' => 817,
                'inventory_id' => 66,
                'product_id' => 1328,
                'unit_price' => 31,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            317 => 
            array (
                'id' => 818,
                'inventory_id' => 56,
                'product_id' => 4541,
                'unit_price' => 79,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            318 => 
            array (
                'id' => 819,
                'inventory_id' => 27,
                'product_id' => 7226,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            319 => 
            array (
                'id' => 820,
                'inventory_id' => 39,
                'product_id' => 247,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            320 => 
            array (
                'id' => 821,
                'inventory_id' => 73,
                'product_id' => 4283,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            321 => 
            array (
                'id' => 822,
                'inventory_id' => 55,
                'product_id' => 7223,
                'unit_price' => 172,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            322 => 
            array (
                'id' => 823,
                'inventory_id' => 98,
                'product_id' => 280,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            323 => 
            array (
                'id' => 824,
                'inventory_id' => 85,
                'product_id' => 5219,
                'unit_price' => 75,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            324 => 
            array (
                'id' => 825,
                'inventory_id' => 9,
                'product_id' => 9231,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            325 => 
            array (
                'id' => 826,
                'inventory_id' => 92,
                'product_id' => 3280,
                'unit_price' => 115,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            326 => 
            array (
                'id' => 827,
                'inventory_id' => 23,
                'product_id' => 6728,
                'unit_price' => 93,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            327 => 
            array (
                'id' => 828,
                'inventory_id' => 46,
                'product_id' => 7206,
                'unit_price' => 110,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            328 => 
            array (
                'id' => 829,
                'inventory_id' => 79,
                'product_id' => 3994,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            329 => 
            array (
                'id' => 830,
                'inventory_id' => 68,
                'product_id' => 508,
                'unit_price' => 17,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            330 => 
            array (
                'id' => 831,
                'inventory_id' => 43,
                'product_id' => 3269,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            331 => 
            array (
                'id' => 832,
                'inventory_id' => 71,
                'product_id' => 6078,
                'unit_price' => 95,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            332 => 
            array (
                'id' => 833,
                'inventory_id' => 58,
                'product_id' => 4176,
                'unit_price' => 54,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            333 => 
            array (
                'id' => 834,
                'inventory_id' => 14,
                'product_id' => 8941,
                'unit_price' => 86,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            334 => 
            array (
                'id' => 835,
                'inventory_id' => 33,
                'product_id' => 5102,
                'unit_price' => 88,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            335 => 
            array (
                'id' => 836,
                'inventory_id' => 84,
                'product_id' => 220,
                'unit_price' => 141,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            336 => 
            array (
                'id' => 837,
                'inventory_id' => 96,
                'product_id' => 4102,
                'unit_price' => 179,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            337 => 
            array (
                'id' => 838,
                'inventory_id' => 65,
                'product_id' => 9578,
                'unit_price' => 124,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            338 => 
            array (
                'id' => 839,
                'inventory_id' => 80,
                'product_id' => 8388,
                'unit_price' => 177,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            339 => 
            array (
                'id' => 840,
                'inventory_id' => 19,
                'product_id' => 4710,
                'unit_price' => 117,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            340 => 
            array (
                'id' => 841,
                'inventory_id' => 13,
                'product_id' => 1047,
                'unit_price' => 126,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            341 => 
            array (
                'id' => 842,
                'inventory_id' => 35,
                'product_id' => 5045,
                'unit_price' => 157,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            342 => 
            array (
                'id' => 843,
                'inventory_id' => 32,
                'product_id' => 6697,
                'unit_price' => 54,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            343 => 
            array (
                'id' => 844,
                'inventory_id' => 86,
                'product_id' => 8122,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            344 => 
            array (
                'id' => 845,
                'inventory_id' => 78,
                'product_id' => 9387,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            345 => 
            array (
                'id' => 846,
                'inventory_id' => 56,
                'product_id' => 2688,
                'unit_price' => 179,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            346 => 
            array (
                'id' => 847,
                'inventory_id' => 24,
                'product_id' => 7160,
                'unit_price' => 136,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            347 => 
            array (
                'id' => 848,
                'inventory_id' => 90,
                'product_id' => 4069,
                'unit_price' => 162,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            348 => 
            array (
                'id' => 849,
                'inventory_id' => 51,
                'product_id' => 3913,
                'unit_price' => 44,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            349 => 
            array (
                'id' => 850,
                'inventory_id' => 38,
                'product_id' => 3695,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            350 => 
            array (
                'id' => 851,
                'inventory_id' => 42,
                'product_id' => 8405,
                'unit_price' => 47,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            351 => 
            array (
                'id' => 852,
                'inventory_id' => 95,
                'product_id' => 4213,
                'unit_price' => 122,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            352 => 
            array (
                'id' => 853,
                'inventory_id' => 5,
                'product_id' => 7538,
                'unit_price' => 168,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            353 => 
            array (
                'id' => 854,
                'inventory_id' => 48,
                'product_id' => 7391,
                'unit_price' => 159,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            354 => 
            array (
                'id' => 855,
                'inventory_id' => 75,
                'product_id' => 9149,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            355 => 
            array (
                'id' => 856,
                'inventory_id' => 32,
                'product_id' => 7243,
                'unit_price' => 27,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            356 => 
            array (
                'id' => 857,
                'inventory_id' => 98,
                'product_id' => 6173,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            357 => 
            array (
                'id' => 858,
                'inventory_id' => 52,
                'product_id' => 3132,
                'unit_price' => 170,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            358 => 
            array (
                'id' => 859,
                'inventory_id' => 17,
                'product_id' => 5734,
                'unit_price' => 22,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            359 => 
            array (
                'id' => 860,
                'inventory_id' => 25,
                'product_id' => 5744,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            360 => 
            array (
                'id' => 861,
                'inventory_id' => 45,
                'product_id' => 7424,
                'unit_price' => 94,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            361 => 
            array (
                'id' => 862,
                'inventory_id' => 74,
                'product_id' => 6472,
                'unit_price' => 55,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            362 => 
            array (
                'id' => 863,
                'inventory_id' => 2,
                'product_id' => 8208,
                'unit_price' => 25,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            363 => 
            array (
                'id' => 864,
                'inventory_id' => 89,
                'product_id' => 9379,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            364 => 
            array (
                'id' => 865,
                'inventory_id' => 82,
                'product_id' => 9018,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            365 => 
            array (
                'id' => 866,
                'inventory_id' => 1,
                'product_id' => 9771,
                'unit_price' => 197,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            366 => 
            array (
                'id' => 867,
                'inventory_id' => 59,
                'product_id' => 5397,
                'unit_price' => 157,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            367 => 
            array (
                'id' => 868,
                'inventory_id' => 76,
                'product_id' => 35,
                'unit_price' => 155,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            368 => 
            array (
                'id' => 869,
                'inventory_id' => 46,
                'product_id' => 273,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            369 => 
            array (
                'id' => 870,
                'inventory_id' => 58,
                'product_id' => 3349,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            370 => 
            array (
                'id' => 871,
                'inventory_id' => 94,
                'product_id' => 4364,
                'unit_price' => 32,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            371 => 
            array (
                'id' => 872,
                'inventory_id' => 34,
                'product_id' => 8195,
                'unit_price' => 149,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            372 => 
            array (
                'id' => 873,
                'inventory_id' => 77,
                'product_id' => 7496,
                'unit_price' => 102,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            373 => 
            array (
                'id' => 874,
                'inventory_id' => 71,
                'product_id' => 8801,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            374 => 
            array (
                'id' => 875,
                'inventory_id' => 53,
                'product_id' => 5085,
                'unit_price' => 198,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            375 => 
            array (
                'id' => 876,
                'inventory_id' => 93,
                'product_id' => 9830,
                'unit_price' => 76,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            376 => 
            array (
                'id' => 877,
                'inventory_id' => 63,
                'product_id' => 7413,
                'unit_price' => 126,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            377 => 
            array (
                'id' => 878,
                'inventory_id' => 27,
                'product_id' => 5125,
                'unit_price' => 58,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            378 => 
            array (
                'id' => 879,
                'inventory_id' => 61,
                'product_id' => 2953,
                'unit_price' => 124,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            379 => 
            array (
                'id' => 880,
                'inventory_id' => 75,
                'product_id' => 7463,
                'unit_price' => 187,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            380 => 
            array (
                'id' => 881,
                'inventory_id' => 54,
                'product_id' => 6834,
                'unit_price' => 114,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            381 => 
            array (
                'id' => 882,
                'inventory_id' => 92,
                'product_id' => 9287,
                'unit_price' => 40,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            382 => 
            array (
                'id' => 883,
                'inventory_id' => 84,
                'product_id' => 3459,
                'unit_price' => 120,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            383 => 
            array (
                'id' => 884,
                'inventory_id' => 45,
                'product_id' => 8034,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            384 => 
            array (
                'id' => 885,
                'inventory_id' => 28,
                'product_id' => 4470,
                'unit_price' => 195,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            385 => 
            array (
                'id' => 886,
                'inventory_id' => 56,
                'product_id' => 4261,
                'unit_price' => 135,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            386 => 
            array (
                'id' => 887,
                'inventory_id' => 80,
                'product_id' => 9238,
                'unit_price' => 23,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            387 => 
            array (
                'id' => 888,
                'inventory_id' => 92,
                'product_id' => 7463,
                'unit_price' => 115,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            388 => 
            array (
                'id' => 889,
                'inventory_id' => 10,
                'product_id' => 5838,
                'unit_price' => 46,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            389 => 
            array (
                'id' => 890,
                'inventory_id' => 17,
                'product_id' => 2762,
                'unit_price' => 45,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            390 => 
            array (
                'id' => 891,
                'inventory_id' => 6,
                'product_id' => 3502,
                'unit_price' => 102,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            391 => 
            array (
                'id' => 892,
                'inventory_id' => 55,
                'product_id' => 8777,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            392 => 
            array (
                'id' => 893,
                'inventory_id' => 18,
                'product_id' => 297,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            393 => 
            array (
                'id' => 894,
                'inventory_id' => 65,
                'product_id' => 9824,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            394 => 
            array (
                'id' => 895,
                'inventory_id' => 97,
                'product_id' => 6774,
                'unit_price' => 176,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            395 => 
            array (
                'id' => 896,
                'inventory_id' => 31,
                'product_id' => 2050,
                'unit_price' => 67,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            396 => 
            array (
                'id' => 897,
                'inventory_id' => 71,
                'product_id' => 1166,
                'unit_price' => 39,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            397 => 
            array (
                'id' => 898,
                'inventory_id' => 77,
                'product_id' => 2493,
                'unit_price' => 50,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            398 => 
            array (
                'id' => 899,
                'inventory_id' => 50,
                'product_id' => 6510,
                'unit_price' => 99,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            399 => 
            array (
                'id' => 900,
                'inventory_id' => 36,
                'product_id' => 9930,
                'unit_price' => 106,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            400 => 
            array (
                'id' => 901,
                'inventory_id' => 29,
                'product_id' => 6091,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            401 => 
            array (
                'id' => 902,
                'inventory_id' => 88,
                'product_id' => 3898,
                'unit_price' => 17,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            402 => 
            array (
                'id' => 903,
                'inventory_id' => 88,
                'product_id' => 4802,
                'unit_price' => 165,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            403 => 
            array (
                'id' => 904,
                'inventory_id' => 46,
                'product_id' => 4214,
                'unit_price' => 100,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            404 => 
            array (
                'id' => 905,
                'inventory_id' => 62,
                'product_id' => 3227,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            405 => 
            array (
                'id' => 906,
                'inventory_id' => 66,
                'product_id' => 6983,
                'unit_price' => 41,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            406 => 
            array (
                'id' => 907,
                'inventory_id' => 73,
                'product_id' => 6046,
                'unit_price' => 193,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            407 => 
            array (
                'id' => 908,
                'inventory_id' => 22,
                'product_id' => 4256,
                'unit_price' => 103,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            408 => 
            array (
                'id' => 909,
                'inventory_id' => 27,
                'product_id' => 6817,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            409 => 
            array (
                'id' => 910,
                'inventory_id' => 94,
                'product_id' => 7253,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            410 => 
            array (
                'id' => 911,
                'inventory_id' => 52,
                'product_id' => 1738,
                'unit_price' => 170,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            411 => 
            array (
                'id' => 912,
                'inventory_id' => 87,
                'product_id' => 9320,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            412 => 
            array (
                'id' => 913,
                'inventory_id' => 21,
                'product_id' => 6277,
                'unit_price' => 75,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            413 => 
            array (
                'id' => 914,
                'inventory_id' => 32,
                'product_id' => 1565,
                'unit_price' => 171,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            414 => 
            array (
                'id' => 915,
                'inventory_id' => 31,
                'product_id' => 1578,
                'unit_price' => 20,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            415 => 
            array (
                'id' => 916,
                'inventory_id' => 12,
                'product_id' => 7422,
                'unit_price' => 20,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            416 => 
            array (
                'id' => 917,
                'inventory_id' => 4,
                'product_id' => 2635,
                'unit_price' => 144,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            417 => 
            array (
                'id' => 918,
                'inventory_id' => 21,
                'product_id' => 2699,
                'unit_price' => 156,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            418 => 
            array (
                'id' => 919,
                'inventory_id' => 31,
                'product_id' => 9108,
                'unit_price' => 92,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            419 => 
            array (
                'id' => 920,
                'inventory_id' => 41,
                'product_id' => 8363,
                'unit_price' => 102,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            420 => 
            array (
                'id' => 921,
                'inventory_id' => 26,
                'product_id' => 753,
                'unit_price' => 109,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            421 => 
            array (
                'id' => 922,
                'inventory_id' => 24,
                'product_id' => 4037,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            422 => 
            array (
                'id' => 923,
                'inventory_id' => 11,
                'product_id' => 4224,
                'unit_price' => 14,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            423 => 
            array (
                'id' => 924,
                'inventory_id' => 41,
                'product_id' => 9017,
                'unit_price' => 69,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            424 => 
            array (
                'id' => 925,
                'inventory_id' => 32,
                'product_id' => 3255,
                'unit_price' => 173,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            425 => 
            array (
                'id' => 926,
                'inventory_id' => 74,
                'product_id' => 6825,
                'unit_price' => 86,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            426 => 
            array (
                'id' => 927,
                'inventory_id' => 76,
                'product_id' => 8719,
                'unit_price' => 61,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            427 => 
            array (
                'id' => 928,
                'inventory_id' => 63,
                'product_id' => 3794,
                'unit_price' => 168,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            428 => 
            array (
                'id' => 929,
                'inventory_id' => 2,
                'product_id' => 6882,
                'unit_price' => 183,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            429 => 
            array (
                'id' => 930,
                'inventory_id' => 42,
                'product_id' => 2785,
                'unit_price' => 33,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            430 => 
            array (
                'id' => 931,
                'inventory_id' => 5,
                'product_id' => 7401,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            431 => 
            array (
                'id' => 932,
                'inventory_id' => 91,
                'product_id' => 9295,
                'unit_price' => 117,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            432 => 
            array (
                'id' => 933,
                'inventory_id' => 60,
                'product_id' => 9732,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            433 => 
            array (
                'id' => 934,
                'inventory_id' => 68,
                'product_id' => 4842,
                'unit_price' => 56,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            434 => 
            array (
                'id' => 935,
                'inventory_id' => 73,
                'product_id' => 7508,
                'unit_price' => 120,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            435 => 
            array (
                'id' => 936,
                'inventory_id' => 11,
                'product_id' => 7661,
                'unit_price' => 113,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            436 => 
            array (
                'id' => 937,
                'inventory_id' => 1,
                'product_id' => 4093,
                'unit_price' => 49,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            437 => 
            array (
                'id' => 938,
                'inventory_id' => 5,
                'product_id' => 446,
                'unit_price' => 164,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            438 => 
            array (
                'id' => 939,
                'inventory_id' => 30,
                'product_id' => 6155,
                'unit_price' => 160,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            439 => 
            array (
                'id' => 940,
                'inventory_id' => 86,
                'product_id' => 3179,
                'unit_price' => 195,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            440 => 
            array (
                'id' => 941,
                'inventory_id' => 78,
                'product_id' => 7926,
                'unit_price' => 82,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            441 => 
            array (
                'id' => 942,
                'inventory_id' => 59,
                'product_id' => 1237,
                'unit_price' => 76,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            442 => 
            array (
                'id' => 943,
                'inventory_id' => 70,
                'product_id' => 7371,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:41',
                'updated_at' => '2016-04-17 19:32:41',
            ),
            443 => 
            array (
                'id' => 944,
                'inventory_id' => 72,
                'product_id' => 6361,
                'unit_price' => 112,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            444 => 
            array (
                'id' => 945,
                'inventory_id' => 4,
                'product_id' => 7671,
                'unit_price' => 125,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            445 => 
            array (
                'id' => 946,
                'inventory_id' => 77,
                'product_id' => 6396,
                'unit_price' => 196,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            446 => 
            array (
                'id' => 947,
                'inventory_id' => 94,
                'product_id' => 3004,
                'unit_price' => 128,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            447 => 
            array (
                'id' => 948,
                'inventory_id' => 40,
                'product_id' => 6944,
                'unit_price' => 140,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            448 => 
            array (
                'id' => 949,
                'inventory_id' => 29,
                'product_id' => 5700,
                'unit_price' => 36,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            449 => 
            array (
                'id' => 950,
                'inventory_id' => 90,
                'product_id' => 7476,
                'unit_price' => 10,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            450 => 
            array (
                'id' => 951,
                'inventory_id' => 16,
                'product_id' => 2907,
                'unit_price' => 145,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            451 => 
            array (
                'id' => 952,
                'inventory_id' => 63,
                'product_id' => 7857,
                'unit_price' => 34,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            452 => 
            array (
                'id' => 953,
                'inventory_id' => 82,
                'product_id' => 3654,
                'unit_price' => 89,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            453 => 
            array (
                'id' => 954,
                'inventory_id' => 28,
                'product_id' => 7646,
                'unit_price' => 168,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            454 => 
            array (
                'id' => 955,
                'inventory_id' => 90,
                'product_id' => 266,
                'unit_price' => 35,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            455 => 
            array (
                'id' => 956,
                'inventory_id' => 91,
                'product_id' => 1178,
                'unit_price' => 116,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            456 => 
            array (
                'id' => 957,
                'inventory_id' => 39,
                'product_id' => 1251,
                'unit_price' => 65,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            457 => 
            array (
                'id' => 958,
                'inventory_id' => 43,
                'product_id' => 5345,
                'unit_price' => 175,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            458 => 
            array (
                'id' => 959,
                'inventory_id' => 82,
                'product_id' => 5682,
                'unit_price' => 155,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            459 => 
            array (
                'id' => 960,
                'inventory_id' => 92,
                'product_id' => 3446,
                'unit_price' => 78,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            460 => 
            array (
                'id' => 961,
                'inventory_id' => 37,
                'product_id' => 9119,
                'unit_price' => 190,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            461 => 
            array (
                'id' => 962,
                'inventory_id' => 53,
                'product_id' => 968,
                'unit_price' => 134,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            462 => 
            array (
                'id' => 963,
                'inventory_id' => 94,
                'product_id' => 2084,
                'unit_price' => 96,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            463 => 
            array (
                'id' => 964,
                'inventory_id' => 38,
                'product_id' => 7489,
                'unit_price' => 29,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            464 => 
            array (
                'id' => 965,
                'inventory_id' => 56,
                'product_id' => 8480,
                'unit_price' => 138,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            465 => 
            array (
                'id' => 966,
                'inventory_id' => 80,
                'product_id' => 9752,
                'unit_price' => 63,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            466 => 
            array (
                'id' => 967,
                'inventory_id' => 71,
                'product_id' => 7925,
                'unit_price' => 81,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            467 => 
            array (
                'id' => 968,
                'inventory_id' => 78,
                'product_id' => 6705,
                'unit_price' => 92,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            468 => 
            array (
                'id' => 969,
                'inventory_id' => 52,
                'product_id' => 1541,
                'unit_price' => 199,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            469 => 
            array (
                'id' => 970,
                'inventory_id' => 77,
                'product_id' => 3770,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            470 => 
            array (
                'id' => 971,
                'inventory_id' => 43,
                'product_id' => 1305,
                'unit_price' => 155,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            471 => 
            array (
                'id' => 972,
                'inventory_id' => 93,
                'product_id' => 5462,
                'unit_price' => 172,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            472 => 
            array (
                'id' => 973,
                'inventory_id' => 64,
                'product_id' => 122,
                'unit_price' => 51,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            473 => 
            array (
                'id' => 974,
                'inventory_id' => 17,
                'product_id' => 8219,
                'unit_price' => 103,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            474 => 
            array (
                'id' => 975,
                'inventory_id' => 56,
                'product_id' => 1537,
                'unit_price' => 29,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            475 => 
            array (
                'id' => 976,
                'inventory_id' => 21,
                'product_id' => 6311,
                'unit_price' => 169,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            476 => 
            array (
                'id' => 977,
                'inventory_id' => 40,
                'product_id' => 9707,
                'unit_price' => 44,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            477 => 
            array (
                'id' => 978,
                'inventory_id' => 15,
                'product_id' => 7895,
                'unit_price' => 57,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            478 => 
            array (
                'id' => 979,
                'inventory_id' => 82,
                'product_id' => 4832,
                'unit_price' => 74,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            479 => 
            array (
                'id' => 980,
                'inventory_id' => 93,
                'product_id' => 6507,
                'unit_price' => 59,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            480 => 
            array (
                'id' => 981,
                'inventory_id' => 46,
                'product_id' => 3090,
                'unit_price' => 178,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            481 => 
            array (
                'id' => 982,
                'inventory_id' => 27,
                'product_id' => 7449,
                'unit_price' => 149,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            482 => 
            array (
                'id' => 983,
                'inventory_id' => 15,
                'product_id' => 731,
                'unit_price' => 70,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            483 => 
            array (
                'id' => 984,
                'inventory_id' => 20,
                'product_id' => 8322,
                'unit_price' => 56,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            484 => 
            array (
                'id' => 985,
                'inventory_id' => 77,
                'product_id' => 4026,
                'unit_price' => 24,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            485 => 
            array (
                'id' => 986,
                'inventory_id' => 100,
                'product_id' => 3734,
                'unit_price' => 137,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            486 => 
            array (
                'id' => 987,
                'inventory_id' => 66,
                'product_id' => 4905,
                'unit_price' => 154,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            487 => 
            array (
                'id' => 988,
                'inventory_id' => 13,
                'product_id' => 958,
                'unit_price' => 91,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            488 => 
            array (
                'id' => 989,
                'inventory_id' => 42,
                'product_id' => 8267,
                'unit_price' => 86,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            489 => 
            array (
                'id' => 990,
                'inventory_id' => 95,
                'product_id' => 7713,
                'unit_price' => 45,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            490 => 
            array (
                'id' => 991,
                'inventory_id' => 27,
                'product_id' => 4667,
                'unit_price' => 146,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            491 => 
            array (
                'id' => 992,
                'inventory_id' => 53,
                'product_id' => 6292,
                'unit_price' => 192,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            492 => 
            array (
                'id' => 993,
                'inventory_id' => 66,
                'product_id' => 2744,
                'unit_price' => 55,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            493 => 
            array (
                'id' => 994,
                'inventory_id' => 34,
                'product_id' => 2291,
                'unit_price' => 49,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            494 => 
            array (
                'id' => 995,
                'inventory_id' => 15,
                'product_id' => 5583,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            495 => 
            array (
                'id' => 996,
                'inventory_id' => 99,
                'product_id' => 4988,
                'unit_price' => 37,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            496 => 
            array (
                'id' => 997,
                'inventory_id' => 86,
                'product_id' => 544,
                'unit_price' => 119,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            497 => 
            array (
                'id' => 998,
                'inventory_id' => 44,
                'product_id' => 5360,
                'unit_price' => 16,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            498 => 
            array (
                'id' => 999,
                'inventory_id' => 77,
                'product_id' => 5701,
                'unit_price' => 71,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            499 => 
            array (
                'id' => 1000,
                'inventory_id' => 16,
                'product_id' => 8768,
                'unit_price' => 132,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
        ));
        
        
    }
}
