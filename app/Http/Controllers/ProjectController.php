<?php 

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Projects\Project;
use Illuminate\Http\Request;
use App\Http\Requests;

class ProjectController extends Controller
{
    public $project;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Project $project)
    {
        $this->middleware('auth');
        $this->project = $project;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return ['projects', $this->project->all()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $newProject = $this->request->all();
        $this->project->create($newProject);
        return $this->project->all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id, Request $request)
    {
        $project = $this->request->all();
        $this->project->where('id', $project['id'])->update($project);
        return $this->project->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $project = $this->request->all();
        $this->project->where('id', $project['id'])->delete();
        return $this->project->all();
    }
}
