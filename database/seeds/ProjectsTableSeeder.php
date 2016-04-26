<?php

use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('projects')->delete();
        
        \DB::table('projects')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Architecto voluptatibus laboriosam alias facere.',
                'description' => 'Quidem vel dolore culpa quae. Officia libero blanditiis doloribus praesentium repellat. A veniam quia et. Modi eos neque in.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 3,
                'task_id' => 9,
                'delegated_id' => 9,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Dolor voluptatum ullam repellendus facilis sint rerum officiis.',
                'description' => 'Deleniti quod nemo sunt et mollitia impedit. Aspernatur porro aut amet esse quidem. Quasi optio nihil ut et aliquam. Voluptatem aut sunt voluptatibus et.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 6,
                'task_id' => 4,
                'delegated_id' => 5,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Ipsa soluta sit placeat.',
                'description' => 'Quaerat iure ad vero saepe at cumque qui. Nobis et a facilis totam quis officia ducimus. Et odit et repellat deleniti vel suscipit autem. Veritatis velit ipsum inventore dolor dolor autem ad labore.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 1,
                'task_id' => 10,
                'delegated_id' => 3,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'Tenetur beatae ullam repudiandae.',
                'description' => 'Iure saepe sed officia est et. Deleniti necessitatibus voluptatem in hic. Veniam impedit architecto sed ratione doloribus dolorem molestias. Sunt aut ut doloribus enim.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 8,
                'task_id' => 7,
                'delegated_id' => 7,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'Impedit aut blanditiis distinctio aut qui.',
                'description' => 'Distinctio exercitationem qui eum consequatur ex aliquid. Hic qui eius ut asperiores. Inventore laboriosam sed et earum iste consequuntur.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 9,
                'task_id' => 5,
                'delegated_id' => 3,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Qui enim voluptate quibusdam saepe.',
                'description' => 'Excepturi explicabo explicabo dolor pariatur qui itaque. Rerum non deleniti natus sit. Pariatur aliquam qui reiciendis autem consequatur eaque deserunt.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 1,
                'task_id' => 4,
                'delegated_id' => 4,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            6 => 
            array (
                'id' => 7,
                'title' => 'Quae atque consequuntur quod eligendi incidunt.',
                'description' => 'Illo iusto aut delectus earum. Fugiat repellat voluptatum aut voluptas optio eaque. Reiciendis inventore aut quibusdam mollitia nostrum reprehenderit repellendus.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 7,
                'task_id' => 7,
                'delegated_id' => 6,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            7 => 
            array (
                'id' => 8,
                'title' => 'Soluta enim occaecati provident quidem.',
                'description' => 'Et qui nostrum eum accusamus. Aliquid voluptatem atque quidem ea. Dolorem voluptatem nam voluptatem voluptatem velit doloremque. Ea error ut voluptatibus porro sequi eius vel.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 6,
                'task_id' => 4,
                'delegated_id' => 7,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            8 => 
            array (
                'id' => 9,
                'title' => 'Fugit consequuntur explicabo rem blanditiis aut ut suscipit sed.',
                'description' => 'Ab ut assumenda voluptatum ut dolorum. Iure omnis facilis atque libero et voluptates nulla. Facere vitae placeat qui fugiat quia eum.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 10,
                'task_id' => 10,
                'delegated_id' => 4,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
            9 => 
            array (
                'id' => 10,
                'title' => 'Qui est ab veniam id expedita eligendi voluptatibus.',
                'description' => 'Reprehenderit libero facere aliquam iure nobis illo aliquam. Illo at qui aut. Voluptas sit consequatur maxime laudantium provident.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '02:32:44',
                'due_date' => '2016-05-08',
                'conversation_id' => 5,
                'task_id' => 2,
                'delegated_id' => 2,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:44',
                'updated_at' => '2016-04-17 19:32:44',
            ),
        ));
        
        
    }
}
