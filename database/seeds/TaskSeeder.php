<?php

use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Task::create(['title' => 'Agregar subtareas al kanban', 'due_date' => date("Y-m-d"), 'status_id' => 1, 'user_id' => 1]);
        \App\Models\Task::create(['title' => 'Testing Kanban', 'due_date' => date("Y-m-d"), 'status_id' => 2, 'user_id' => 1]);
    }
}
