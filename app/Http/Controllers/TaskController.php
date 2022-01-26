<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getAll(Request $request)
    {
        $tasks = Task::where('user_id', $request->user()->id)->get();
        return response()->json([
            "status"    => 200,
            "tasks"     => $tasks
        ]);
    }

    public function get($taskId)
    {
        return response()->json([
            "status"    => 200,
            "task"      => Task::find($taskId)
        ]);
    }

    public function store(Request $request)
    {
        $task               = new Task();
        $task->title        = $request->title;
        $task->due_date     = date("Y-m-d H:i:s", strtotime($request->due_date));
        $task->status_id    = 1;
        $task->user_id      = $request->user()->id;
        $task->save();

        return response()->json([
            "status"   => 200,
            "task"          => $task
        ]);
    }

    public function update(Request $request, $taskId)
    {
        $task               = Task::find($taskId);
        $task->title        = $request->title;
        $task->due_date     = $request->due_date;
        $task->status_id    = $request->status_id;
        $task->save();

        return response()->json([
            "status"   => 200,
            "task"          => $task
        ]);
    }
}
