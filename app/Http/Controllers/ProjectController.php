<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with("images")->orderBy("updated_at","desc")->get();
        return response()->json($projects);
    }

    public function save(Request $request)
    {
        $validatedData = $request->validate([
            'category' => 'required',
            'featured' => 'required',
            'published' => 'required',
            'name' => 'required|unique:projects',
            'link' => 'required',
            'location' => 'required',
            'description' => 'required',
            'tags' => 'required',
            'images.*'=>'required|image'
        ]);
        //        Save images
        $project = new Project();
        $project->category = $validatedData["category"];
        $project->featured = $validatedData["featured"];
        $project->published = $validatedData["published"];
        $project->name = $validatedData["name"];
        $project->link = $validatedData["link"];
        $project->location = $validatedData["location"];
        $project->description = $validatedData["description"];
        $project->tags = $validatedData["tags"];
        $project->save();
        $images = $request->images;
        foreach ($images as $image) {
            $newImage = new ProjectImage();
            $imageName = rand() . '.' . $image->extension();
           $image->move(public_path('projects'), $imageName);
            $newImage->link = URL::to("/projects") . "/" . $imageName;
            $newImage->project_id = $project->id;
            $newImage->save();
        }
    }
}
