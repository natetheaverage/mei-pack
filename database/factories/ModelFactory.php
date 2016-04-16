<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Models\Users\User::class, 
    function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Models\News\Post::class, 
    function (Faker\Generator $faker) {
   
    return [
        'name' => $faker->name,
        'type' => 'News Post',
        'email' => $faker->email,
        'title' => $faker->sentence,
        'body' => $faker->paragraph,
        'photo' => '/images/logo.png',
        'reply' => $faker->sentence,
        'approval' => rand(0,1),
        'accepted_terms' => false,
    ];
});

$factory->define(App\Models\Companies\Company::class, 
    function (Faker\Generator $faker) {
        return [
            'name'           => 'Strike '.rand(5,100).' Industries',
            'type'           => 'Sole LLC', 
            'ein'            => 4200420,
            'phone'          => 7204200420,
            'fax'            => 7204201420,
            'address_street' =>  $faker->streetAddress,
            'address_city'   => 'Metropolis',
            'address_state'  => 'Co.',
            'owner_id'       => 1,
        ];

});

$factory->define(App\Models\Conversations\Message::class, function ($faker) {
    return [
        'subject' => $faker->sentence,
        'body' => $faker->paragraph,
        'body_height' => 40,
        'class' => 'info',
        'conversation_id' => rand(1,10),
        'user_id' => rand(1,10),
        'tagged_id' => 1,
        'deleted' => false,
    ];
});

$factory->define(App\Models\Projects\Project::class, function ($faker) {

    return [
        'title' => $faker->sentence,
        'description' => $faker->paragraph,
        'description_height' => 40,
        'class' => 'info',
        'due_date' => $time = \Carbon\Carbon::now()->addWeeks(3)->toDateString(),
        'due_time' => $time = \Carbon\Carbon::now()->addHours(7)->toTimeString(),
        'conversation_id' => rand(1,10),
        'task_id' => rand(1,10),
        'delegated_id' => rand(1,10),
        'facility_id' => 1,
        'owner_id' => 1,
        'creator_id' => 1,
        'deleted' => false,
    ];
});

$factory->define(App\Models\Projects\Task::class, function ($faker) {

    return [
        'title' => $faker->sentence,
        'description' => $faker->paragraph,
        'description_height' => 40,
        'class' => 'info',
        'due_date' => $time = \Carbon\Carbon::now()->addDays(3)->toDateString(),
        'due_time' => $time = \Carbon\Carbon::now()->addHours(7)->toTimeString(),
        'project_id' => rand(1,10),
        'conversation_id' => rand(1,10),
        'facility_id' => 1,
        'owner_id' => 1,
        'creator_id' => 1,
        'deleted' => false,
    ];
});

$factory->define(App\Models\Conversations\Conversation::class, function ($faker) {
    return [
        'title' => $faker->sentence,
        'description' => $faker->paragraph,
        'description_height' => 40,
        'class' => 'info',
        'owner_id' => rand(1,10),
        'owner_type' => 'Project',
        'user_id' => rand(1,10),
        'facility_id' => 1,
        'tagged_id' => 1,
        'deleted' => false,
    ];
});

$factory->define(App\Models\Conversations\Message::class, function ($faker) {
    return [
        'subject' => $faker->sentence,
        'body' => $faker->paragraph,
        'body_height' => 40,
        'class' => 'info',
        'conversation_id' => rand(1,10),
        'user_id' => rand(1,10),
        'tagged_id' => 1,
        'deleted' => false,
    ];
});

$factory->define(App\Models\Facilities\Inventory::class, function ($faker) {

    return [
        'name' => $faker->safeColorName .' '. $faker->word,
        'rfid' => $faker->md5,
        'class' => 'info',
        'unit_count' => rand(1,100),
        'unit_type' => 'gr',
        'user_id' => rand(1,10),
        'facility_id' => rand(1,10),
        'conversation_id' => 0,
        'project_id' => 0,
        'history' => 0,
        'deleted' => false,
    ];
});

$factory->define(App\Models\Facilities\Product::class, function ($faker) {

    return [
        'inventory_id' => rand(1, 100),
        'product_id' => rand(0000,9999).' '.rand(0000,9999).' '.rand(0000,9999).' '.rand(0000,9999).' '.rand(0000,9999),
        'unit_price' => rand(10,200).'.00',
    ];
});


