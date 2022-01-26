<?php

namespace App\Observers;

class UserObserver
{
    /**
     * Handle the User "created" event.
     * @param  \App\Models\User $user
     * @return void
     */
    public function created(User $user)
    {
        if($user->id != 1)
        {
            \App\Models\Task::create(['title' => 'Agregar subtareas al kanban', 'due_date' => date("Y-m-d"), 'status_id' => 1, 'user_id' => $user->id]);
            \App\Models\Task::create(['title' => 'Testing Kanban', 'due_date' => date("Y-m-d"), 'status_id' => 2, 'user_id' => $user->id]);
        }
    }
}
