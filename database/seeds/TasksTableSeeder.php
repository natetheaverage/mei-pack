<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tasks')->delete();
        
        \DB::table('tasks')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Ullam voluptas beatae ut modi illum saepe reprehenderit dicta.',
                'description' => 'Maxime est aut non molestiae eveniet ea vel. Placeat perferendis minima esse omnis ea repellendus reprehenderit. Praesentium vero eos illum nihil voluptate id.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 3,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Dolorem aperiam cupiditate sed laudantium ipsum sit quia.',
                'description' => 'Voluptas rem id possimus soluta voluptatem perferendis. Laborum et quod quibusdam dolorum aperiam. Inventore ea est tempore officiis quo illo magni quos.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 6,
                'project_id' => 1,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Dignissimos officiis sed numquam est soluta.',
                'description' => 'Exercitationem et vel dolorem accusantium. Illum deserunt qui sed necessitatibus nostrum quam repellat. Ut et in qui illo autem.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 5,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'Nobis et debitis distinctio sed consequatur amet.',
                'description' => 'Rerum sequi asperiores laborum minima quae quibusdam. Natus delectus facilis velit ratione voluptatum sunt et. Enim quas quisquam eaque.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 4,
                'project_id' => 1,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'Itaque laboriosam adipisci mollitia sint omnis.',
                'description' => 'Blanditiis ut sit ipsum et soluta. Quas incidunt nisi et dolore magni error in. Dolorum deserunt dolor facere nihil eveniet.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 3,
                'project_id' => 10,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Velit saepe in ut temporibus.',
                'description' => 'Exercitationem aut ipsa perferendis quo blanditiis dignissimos. Facere ea numquam est voluptates vero provident quia. Libero voluptatem illo odit.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 10,
                'project_id' => 4,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            6 => 
            array (
                'id' => 7,
                'title' => 'Porro et sit magni aspernatur nobis.',
                'description' => 'Unde molestiae atque accusantium tempora culpa ratione laborum. Consequatur blanditiis in ut illo ea in. Veniam autem qui cupiditate nihil fugiat modi.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 3,
                'project_id' => 6,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            7 => 
            array (
                'id' => 8,
                'title' => 'Aliquam molestias quo architecto sint dolorem ipsa sapiente.',
                'description' => 'Dolor est beatae velit sed et. Quia dicta totam aliquid. Eos et rerum tenetur.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 8,
                'project_id' => 10,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            8 => 
            array (
                'id' => 9,
                'title' => 'Fuga voluptatem eos magnam nihil aut labore.',
                'description' => 'Corporis suscipit dolores quasi velit libero et illo. Corporis suscipit cupiditate quasi et facilis saepe est. Numquam dolorem dolore nam non perferendis itaque.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 8,
                'project_id' => 7,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            9 => 
            array (
                'id' => 10,
                'title' => 'Similique nam velit ut tempore aut ut.',
                'description' => 'Quae alias dolores voluptatibus est. Omnis qui amet et sit nobis velit quia. Aut dolorem et ab ipsum.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 1,
                'project_id' => 3,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            10 => 
            array (
                'id' => 11,
                'title' => 'Perspiciatis impedit sed fugit esse adipisci.',
                'description' => 'Et et autem reprehenderit et. In maxime omnis iusto magnam natus ea eligendi. Rem iste nisi tempora nihil maiores quae ipsa. Et excepturi et voluptatibus atque ut.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 7,
                'project_id' => 3,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            11 => 
            array (
                'id' => 12,
                'title' => 'Sit in repellat et quis.',
                'description' => 'Asperiores velit nisi tempore reiciendis explicabo. Consequuntur ut fugiat omnis et omnis natus. Nemo eveniet omnis fuga dignissimos eius accusamus commodi rem. Reprehenderit qui vero tempore minima facere velit.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 5,
                'project_id' => 4,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            12 => 
            array (
                'id' => 13,
                'title' => 'Rem magnam laboriosam cupiditate.',
                'description' => 'Vero autem veritatis rerum. Aut ad id quos quis et consequuntur.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 4,
                'project_id' => 5,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            13 => 
            array (
                'id' => 14,
                'title' => 'Eius neque et delectus voluptatem et.',
                'description' => 'Expedita eius impedit ipsam dolor qui unde amet iste. Hic eum dolor quis. Quia est totam voluptas non perspiciatis. Quis consequuntur deleniti voluptas soluta qui qui modi. Non id voluptas laborum neque.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 8,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            14 => 
            array (
                'id' => 15,
                'title' => 'Quos eos perspiciatis sapiente expedita eligendi nemo.',
                'description' => 'Labore iure dolores eos hic neque. Suscipit harum eveniet quos molestias assumenda. Dolorem provident quasi aut facere. Dolore assumenda neque aspernatur sed culpa fugiat.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 6,
                'project_id' => 9,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            15 => 
            array (
                'id' => 16,
                'title' => 'Quasi dolor repellendus rerum sit eaque.',
                'description' => 'Ratione autem mollitia odio iure consequuntur esse quas hic. Deleniti earum deserunt ut similique sed dicta ratione. Rerum sunt autem nihil quod iusto voluptas voluptates. Ullam qui molestias laboriosam quo impedit quia.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 6,
                'project_id' => 4,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            16 => 
            array (
                'id' => 17,
                'title' => 'Architecto officiis dolores est debitis cum architecto.',
                'description' => 'Culpa non dolores natus aut magni ut. Aut vitae non distinctio quod. Harum dolores maiores natus culpa ea quo. Sunt rerum et excepturi.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 5,
                'project_id' => 9,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            17 => 
            array (
                'id' => 18,
                'title' => 'Est ut rerum blanditiis animi amet.',
                'description' => 'Provident et animi quibusdam et corrupti ea. Non consectetur aliquid quaerat fuga sequi modi et magnam.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 7,
                'project_id' => 2,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            18 => 
            array (
                'id' => 19,
                'title' => 'Voluptas fuga hic sunt aut placeat dolor.',
                'description' => 'Similique corporis ut in veniam harum ipsum. Eaque facere consectetur fugit aut unde quis. Nemo enim consequatur a earum est vero minima et. Voluptatem facere amet praesentium quibusdam.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 3,
                'project_id' => 10,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            19 => 
            array (
                'id' => 20,
                'title' => 'Facilis eius rerum qui ut quae.',
                'description' => 'Incidunt ratione a debitis ratione. Voluptas sequi magnam totam inventore.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 9,
                'project_id' => 10,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            20 => 
            array (
                'id' => 21,
                'title' => 'Et accusantium optio dolore sit nihil sed.',
                'description' => 'Minus et dolore est veniam voluptatem magnam commodi. Minus iure eum nulla libero. Odit voluptate perferendis et. Voluptatem et consectetur aut voluptatem.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 3,
                'project_id' => 5,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            21 => 
            array (
                'id' => 22,
                'title' => 'Iste est nobis quibusdam quaerat et qui.',
                'description' => 'Ipsa eaque aspernatur alias ipsam nihil officia est. A nesciunt eum asperiores voluptatem maxime beatae. Aut maiores eos beatae corrupti rerum. Aperiam perferendis ex rem.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 10,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            22 => 
            array (
                'id' => 23,
                'title' => 'Reprehenderit ipsum repudiandae beatae unde consectetur.',
                'description' => 'Tempora ratione esse dolores necessitatibus. Quas dolores blanditiis unde dolorem enim. Sunt ad omnis nam quasi temporibus nihil eligendi.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 7,
                'project_id' => 6,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            23 => 
            array (
                'id' => 24,
                'title' => 'Aut ut ab rerum sunt.',
                'description' => 'Vitae tenetur quia rerum labore repudiandae consequatur. Perspiciatis tenetur ipsam et voluptates saepe voluptatem. Vero est ratione laborum voluptas quasi inventore omnis.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 2,
                'project_id' => 7,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            24 => 
            array (
                'id' => 25,
                'title' => 'Repudiandae vel qui dignissimos nihil.',
                'description' => 'Et soluta molestiae hic voluptas. Ex optio modi qui aut et. Voluptas iusto iusto maiores.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 10,
                'project_id' => 5,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            25 => 
            array (
                'id' => 26,
                'title' => 'Delectus vitae velit reiciendis sed quisquam.',
                'description' => 'Hic expedita non est quae. Quis et in autem. Sint sed est suscipit illum. Mollitia placeat iste aut quos.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 8,
                'project_id' => 3,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            26 => 
            array (
                'id' => 27,
                'title' => 'Voluptatem voluptates esse ad possimus qui quas non.',
                'description' => 'Et ipsa dolorem sapiente illum voluptate enim ipsa. Laboriosam perferendis vitae sit non perspiciatis alias quas incidunt. Repellat eum excepturi ea omnis eveniet in.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 7,
                'project_id' => 6,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            27 => 
            array (
                'id' => 28,
                'title' => 'Nesciunt dicta et eveniet error.',
                'description' => 'Laborum quas ut ut molestiae. Omnis velit ducimus numquam maiores a. Perspiciatis tempora sint numquam explicabo. Eligendi id dicta rerum molestiae consequatur rerum ut.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 1,
                'project_id' => 2,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            28 => 
            array (
                'id' => 29,
                'title' => 'Voluptate ipsa nam ut aperiam.',
                'description' => 'Magnam eos sint mollitia animi animi ipsum. Eveniet error et non esse corporis et. Et similique quibusdam id iste. Aut nemo perspiciatis ullam alias.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 9,
                'project_id' => 10,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            29 => 
            array (
                'id' => 30,
                'title' => 'Maiores ut omnis dolores sed quia qui voluptatem.',
                'description' => 'Aliquid et fugiat facilis natus perferendis sed cumque. Dolorem saepe nulla totam. Non molestiae consequatur esse earum. Eum doloremque dolores incidunt.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 9,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            30 => 
            array (
                'id' => 31,
                'title' => 'Quia voluptatum a quaerat non aut accusantium consequatur.',
                'description' => 'Voluptatem sed illo ex voluptas sit assumenda. Perferendis voluptatem deserunt quia aut et nam.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 2,
                'project_id' => 5,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            31 => 
            array (
                'id' => 32,
                'title' => 'Itaque et quas ipsum perspiciatis recusandae.',
                'description' => 'Non sunt cupiditate ab. Eaque fugiat et dolores. Totam ex aut sunt quis excepturi et. Minus quis sunt deserunt nihil eum et consequatur.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 4,
                'project_id' => 5,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            32 => 
            array (
                'id' => 33,
                'title' => 'Dolores molestiae in dolores est optio nesciunt quis.',
                'description' => 'Vel iusto dolore voluptatum repellat. Eum quasi consequatur amet. Beatae cumque sint quos. Quo provident eius earum in nam expedita tempore.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 6,
                'project_id' => 6,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            33 => 
            array (
                'id' => 34,
                'title' => 'Vel aliquam qui ipsam ut laudantium dolorem vitae velit.',
                'description' => 'Omnis atque consequatur et itaque veritatis. Quas vel corporis ut deleniti sit deserunt ullam. Quia nisi aut nihil eos.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 5,
                'project_id' => 10,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            34 => 
            array (
                'id' => 35,
                'title' => 'Quis autem qui perspiciatis a amet voluptatem quia.',
                'description' => 'Culpa ipsa itaque qui numquam et libero architecto. Et enim numquam illo placeat recusandae nostrum.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 9,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            35 => 
            array (
                'id' => 36,
                'title' => 'Qui voluptas rem quos sit expedita ut.',
                'description' => 'Velit voluptas minima maxime qui. Esse et earum voluptatem provident ex dicta. Et dolorum voluptas consequatur et perferendis ex incidunt.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 2,
                'project_id' => 4,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            36 => 
            array (
                'id' => 37,
                'title' => 'Laboriosam corporis natus mollitia dolore ut dignissimos.',
                'description' => 'Amet odio corporis vel quam qui. Et accusantium blanditiis dolorum. Saepe qui aut ad et.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 1,
                'project_id' => 1,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            37 => 
            array (
                'id' => 38,
                'title' => 'Ut velit mollitia velit veniam.',
                'description' => 'Qui saepe perferendis molestias officiis expedita enim. Velit reprehenderit fugit et repudiandae tempore ipsam.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 7,
                'project_id' => 2,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            38 => 
            array (
                'id' => 39,
                'title' => 'Laborum doloremque cupiditate sed fuga atque.',
                'description' => 'Totam et rerum et ipsum quos voluptatem. Minima molestiae illo aspernatur quasi velit eveniet optio. Et incidunt tempora eligendi ut voluptatem. Modi necessitatibus non atque vel aperiam porro quae.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 9,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
            39 => 
            array (
                'id' => 40,
                'title' => 'Autem ut ipsa illo sit iure eveniet.',
                'description' => 'Quia nobis necessitatibus et ipsam ut quia exercitationem. Beatae sunt ipsum itaque consequuntur. Aperiam sit perferendis natus sit vel.',
                'description_height' => 40,
                'class' => 'info',
                'due_time' => '15:09:38',
                'due_date' => '2016-04-22',
                'owner_id' => 1,
                'conversation_id' => 3,
                'project_id' => 8,
                'facility_id' => 1,
                'creator_id' => 1,
                'deleted' => 0,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:38',
                'updated_at' => '2016-04-19 08:09:38',
            ),
        ));
        
        
    }
}
