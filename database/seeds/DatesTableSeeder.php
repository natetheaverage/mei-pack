<?php

use Illuminate\Database\Seeder;

class DatesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('dates')->delete();
        
        \DB::table('dates')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 9,
                'tag_line' => '',
                'date' => '2016-06-10',
                'start' => '12:00:00',
                'end' => '20:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Ym9mcjlqNzQ4N242YXFhamkycmFiMGwyM2MgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:09',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 7,
                'tag_line' => '',
                'date' => '2016-12-03',
                'start' => '12:00:00',
                'end' => '20:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cTBkOGczMW1qNGkyYXB0MTFidjRzcW9mMzAgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:57',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 10,
                'tag_line' => '',
                'date' => '2016-06-11',
                'start' => '10:00:00',
                'end' => '20:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDkyZjQyODhvcHQ1ZTBjbzdobXZiZmNpczQgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:14',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 8,
                'tag_line' => '',
                'date' => '2016-12-04',
                'start' => '10:00:00',
                'end' => '18:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Ym9mcjlqNzQ4N242YXFhamkycmFiMGwyM2MgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:30',
            ),
            4 => 
            array (
                'id' => 5,
                'order_column' => 11,
                'tag_line' => '',
                'date' => '2016-06-12',
                'start' => '10:00:00',
                'end' => '17:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHRlNnAycGFhbGw2anNqMDQzb2NuZzIxc2sgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:14',
            ),
            5 => 
            array (
                'id' => 6,
                'order_column' => 1,
                'tag_line' => '',
                'date' => '2016-06-03',
                'start' => '12:00:00',
                'end' => '20:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=amtzYzU5ZGppbWliMHEzaTlrNjNucms2ZjQgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:48',
            ),
            6 => 
            array (
                'id' => 7,
                'order_column' => 2,
                'tag_line' => '',
                'date' => '2016-05-20',
                'start' => '12:00:00',
                'end' => '18:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=aTVta2NuczRyNGJqa25uNmhkZ2gxNGJwOXMgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:49',
            ),
            7 => 
            array (
                'id' => 8,
                'order_column' => 3,
                'tag_line' => '',
                'date' => '2016-05-21',
                'start' => '10:00:00',
                'end' => '07:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=ZzU5M2c1OTl0djBsZDY4NWF0OXNlZWdkN2sgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:51',
            ),
            8 => 
            array (
                'id' => 9,
                'order_column' => 4,
                'tag_line' => '',
                'date' => '2016-05-22',
                'start' => '10:00:00',
                'end' => '07:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cWkyYTBhZzQ1cGU2ZHB1MTQ1dWczN2k5Nm8gYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:52',
            ),
            9 => 
            array (
                'id' => 10,
                'order_column' => 5,
                'tag_line' => '',
                'date' => '2016-06-05',
                'start' => '12:00:00',
                'end' => '18:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Z3VtNHM1Z2UzMWYwMXFsOGxqMXNsb2t2ODggYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:54',
            ),
            10 => 
            array (
                'id' => 11,
                'order_column' => 6,
                'tag_line' => '',
                'date' => '2016-06-04',
                'start' => '10:00:00',
                'end' => '20:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=YmthaXNwcjI4OGxldG8ybTV2M2xhOWs2czggYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:24:57',
            ),
            11 => 
            array (
                'id' => 12,
                'order_column' => 14,
                'tag_line' => '',
                'date' => '2016-05-15',
                'start' => '10:00:00',
                'end' => '07:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=bmhpdnNndGZnNXNhMWo5ZWhhbW9iN2hwcG8gYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 01:36:00',
            ),
            12 => 
            array (
                'id' => 13,
                'order_column' => 13,
                'tag_line' => '',
                'date' => '2016-05-14',
                'start' => '10:00:00',
                'end' => '17:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=bmxsdGFjaGgxY3FvZjRoM211a2U4cXEzdWMgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 01:36:08',
            ),
            13 => 
            array (
                'id' => 14,
                'order_column' => 12,
                'tag_line' => '',
                'date' => '2016-05-13',
                'start' => '12:00:00',
                'end' => '18:00:00',
                'link' => 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=ZzloMTU5Y3NvMzdscWw4cDcycTgyam4yMGsgYm40dWNsNGdhcnI1NDluYjg1MG12ZWlvdHNAZw&tmsrc=bn4ucl4garr549nb850mveiots%40group.calendar.google.com',
                'event_id' => 0,
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 01:36:08',
            ),
            14 => 
            array (
                'id' => 15,
                'order_column' => 15,
                'tag_line' => '',
                'date' => '2016-10-29',
                'start' => '10:00:00',
                'end' => '18:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:13:59',
                'updated_at' => '2016-03-23 02:25:15',
            ),
            15 => 
            array (
                'id' => 16,
                'order_column' => 16,
                'tag_line' => '',
                'date' => '2016-10-30',
                'start' => '10:00:00',
                'end' => '18:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:14:37',
                'updated_at' => '2016-03-23 02:25:17',
            ),
            16 => 
            array (
                'id' => 17,
                'order_column' => 17,
                'tag_line' => '',
                'date' => '2016-11-12',
                'start' => '10:00:00',
                'end' => '18:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:15:26',
                'updated_at' => '2016-03-23 02:25:17',
            ),
            17 => 
            array (
                'id' => 18,
                'order_column' => 18,
                'tag_line' => '',
                'date' => '2016-11-13',
                'start' => '10:00:00',
                'end' => '18:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:15:53',
                'updated_at' => '2016-03-19 01:15:53',
            ),
            18 => 
            array (
                'id' => 19,
                'order_column' => 19,
                'tag_line' => '',
                'date' => '2017-05-04',
                'start' => '12:00:00',
                'end' => '20:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:17:28',
                'updated_at' => '2016-03-19 01:18:22',
            ),
            19 => 
            array (
                'id' => 20,
                'order_column' => 20,
                'tag_line' => '',
                'date' => '2017-05-05',
                'start' => '10:00:00',
                'end' => '20:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:19:04',
                'updated_at' => '2016-03-19 01:19:04',
            ),
            20 => 
            array (
                'id' => 21,
                'order_column' => 21,
                'tag_line' => '',
                'date' => '2017-05-06',
                'start' => '10:00:00',
                'end' => '20:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:19:32',
                'updated_at' => '2016-03-19 01:19:32',
            ),
            21 => 
            array (
                'id' => 22,
                'order_column' => 22,
                'tag_line' => '',
                'date' => '2017-05-07',
                'start' => '12:00:00',
                'end' => '18:00:00',
                'link' => '',
                'event_id' => 0,
                'created_at' => '2016-03-19 01:20:01',
                'updated_at' => '2016-03-19 01:20:01',
            ),
        ));
        
        
    }
}
