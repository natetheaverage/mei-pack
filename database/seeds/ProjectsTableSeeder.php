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
                'title' => 'Reiciendis qui voluptas ipsa dolor est dignissimos ducimus.',
                'description' => 'Vel quos dolore autem et earum incidunt dolores. Recusandae inventore minima autem omnis voluptate autem eaque. Animi ex voluptatibus rerum quis. Eligendi eum et qui molestiae. Corrupti nobis placeat rerum aliquam reprehenderit.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 4,
                'task_id' => 5,
                'delegated_id' => 8,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Aut pariatur tempore quaerat minus voluptas.',
                'description' => 'Modi eum veniam eos id ut tempore expedita. Qui illo tenetur sed est dignissimos temporibus. Voluptatem iste dolores id nemo temporibus id alias id.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 5,
                'task_id' => 5,
                'delegated_id' => 6,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Tempore quisquam nisi ipsum at quis tempore quam cum.',
                'description' => 'Ea voluptas culpa non ipsa molestiae quia velit occaecati. Non impedit et perferendis blanditiis sapiente deserunt. Consequatur repudiandae sed molestias ipsam aut qui non.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 6,
                'task_id' => 5,
                'delegated_id' => 2,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'Error praesentium cum iure facilis officiis nemo sit fugiat.',
                'description' => 'Nostrum quo hic consequuntur neque. Pariatur pariatur dignissimos omnis minima nemo omnis id. Facilis nesciunt officiis itaque et et qui nostrum libero. Culpa laboriosam placeat assumenda quaerat expedita accusamus sint neque.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 1,
                'task_id' => 1,
                'delegated_id' => 4,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'Deleniti commodi alias occaecati molestiae et.',
                'description' => 'Distinctio laborum quod quaerat quo. Ex est at et dolorem id tempora quidem laboriosam. Blanditiis debitis itaque quasi commodi. Quis magnam facilis laudantium quidem necessitatibus aspernatur facilis.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 9,
                'task_id' => 1,
                'delegated_id' => 2,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Illo placeat vel omnis.',
                'description' => 'Non delectus necessitatibus praesentium fugit et distinctio inventore. Facere consequuntur et non ad et sit. Ea sit quis facilis quidem ipsam. Accusantium nemo esse voluptates quam.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 5,
                'task_id' => 9,
                'delegated_id' => 6,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            6 => 
            array (
                'id' => 7,
                'title' => 'Laudantium sint dolor sed deleniti qui cumque et.',
                'description' => 'Quis exercitationem rerum qui dolorem accusamus corrupti nemo. Omnis qui velit beatae est excepturi quas non. Dolore excepturi molestias temporibus odit doloribus. Temporibus expedita et ut.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 5,
                'task_id' => 5,
                'delegated_id' => 5,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            7 => 
            array (
                'id' => 8,
                'title' => 'Aut tempora quisquam nobis.',
                'description' => 'Doloremque veniam repellendus et ratione minima. Vel quaerat autem vitae. Voluptas itaque soluta expedita voluptatem. Reprehenderit aliquid quas expedita.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 4,
                'task_id' => 2,
                'delegated_id' => 8,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            8 => 
            array (
                'id' => 9,
                'title' => 'Ut eius dolores quaerat maxime est nulla nihil.',
                'description' => 'Tenetur voluptatum sapiente accusamus eos reprehenderit sed tempora earum. Impedit rerum tempora aspernatur aut laborum. Debitis qui vero maiores dicta sunt at ducimus.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 10,
                'task_id' => 3,
                'delegated_id' => 3,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            9 => 
            array (
                'id' => 10,
                'title' => 'Adipisci ipsam quo aut sed.',
                'description' => 'Cum eos quisquam id expedita eos fugit vero. Cumque et praesentium ullam libero. Et aut esse id dolore et quibusdam. Reprehenderit quidem itaque fugit sint at nulla autem.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-05-10',
                'conversation_id' => 5,
                'task_id' => 9,
                'delegated_id' => 7,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
        ));
        
        
    }
}
