<?php 

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projects\Task;
use App\Http\Requests;

class TaskController extends Controller
{
     public $task;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Task $task)
    {
        $this->middleware('auth');
        $this->task = $task;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return ['tasks', $this->task->all()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $newTask = $this->request->all();
        $this->task->create($newTask);
        return $this->task->all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id, Request $request)
    {
        $task = $this->request->all();
        $this->task->where('id', $task['id'])->update($task);
        return $this->task->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $task = $this->request->all();
        $this->task->where('id', $task['id'])->delete();
        return $this->task->all();
    }
}
