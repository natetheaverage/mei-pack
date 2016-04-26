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
                'title' => 'Illum dolorem iure aut in sit autem officia.',
                'description' => 'Quas enim qui voluptas unde. Ad aut doloribus quis. Autem debitis voluptas maxime at sed inventore. Vitae omnis consequatur voluptatem non in architecto eaque.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 2,
                'task_id' => 8,
                'delegated_id' => 9,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Laudantium rem quidem omnis voluptatem sed et.',
                'description' => 'Ut delectus est in aliquam enim in. Deleniti reprehenderit debitis est repudiandae repellendus voluptas dolorem. Quia ut quia accusantium eos sapiente qui quibusdam. Id quidem sunt dolorem atque similique ea blanditiis. Sit ipsum qui beatae sed debitis su',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 10,
                'task_id' => 10,
                'delegated_id' => 5,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Ut quia enim totam qui consequatur.',
                'description' => 'Occaecati natus laborum natus ut. Impedit dolor laboriosam illum eos. Iusto maxime maiores quod labore ullam quis nobis.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 5,
                'task_id' => 5,
                'delegated_id' => 7,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'Quibusdam enim aut natus et tempora id sint.',
                'description' => 'Esse enim impedit adipisci. Iure quam dolore pariatur. Est possimus delectus iure cum.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 10,
                'task_id' => 3,
                'delegated_id' => 10,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'Rerum itaque tempora voluptates voluptatem voluptate quibusdam.',
                'description' => 'Laudantium delectus id voluptatum sunt enim. Quis et earum beatae error unde.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 4,
                'task_id' => 3,
                'delegated_id' => 7,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Eveniet fuga nulla hic alias modi.',
                'description' => 'Saepe ut in veniam ut voluptatem. Est omnis nihil nemo ut. Nisi est ad at neque iusto dolor est.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 3,
                'task_id' => 9,
                'delegated_id' => 10,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            6 => 
            array (
                'id' => 7,
                'title' => 'Numquam incidunt incidunt est.',
                'description' => 'Quis ut doloribus animi quia nemo eveniet. Nemo eaque praesentium in. Et consequatur incidunt suscipit et qui. Maiores et saepe omnis repellat.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 6,
                'task_id' => 5,
                'delegated_id' => 9,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            7 => 
            array (
                'id' => 8,
                'title' => 'Ut veritatis asperiores nulla voluptatem consequatur molestias laboriosam.',
                'description' => 'Neque omnis magni fuga rerum necessitatibus aspernatur. Sunt alias quod mollitia. Dolorem velit aut aperiam magni et maiores deserunt. Maiores omnis libero sed quia sit nobis.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 6,
                'task_id' => 8,
                'delegated_id' => 10,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            8 => 
            array (
                'id' => 9,
                'title' => 'Dolore suscipit laudantium ad aperiam aliquid sed quasi.',
                'description' => 'Deleniti consequatur quia sequi est. Nihil provident aliquid et ratione dignissimos. Sit occaecati odit numquam rerum ut amet. Est molestiae quia recusandae aut.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 4,
                'task_id' => 3,
                'delegated_id' => 1,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
            9 => 
            array (
                'id' => 10,
                'title' => 'Qui dolor ipsa maiores doloribus quo saepe vero.',
                'description' => 'Quae natus facilis nostrum est fugiat quia. Blanditiis iure officia beatae earum culpa possimus. Earum et autem cupiditate. Maxime provident quae consequatur voluptatem ab error qui.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '13:18:59',
                'due_date' => '2016-05-16',
                'conversation_id' => 2,
                'task_id' => 5,
                'delegated_id' => 9,
                'facility_id' => 1,
                'owner_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:59',
                'updated_at' => '2016-04-25 06:18:59',
            ),
        ));
        
        
    }
}
