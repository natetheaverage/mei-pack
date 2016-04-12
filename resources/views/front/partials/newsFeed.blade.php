@extends('nest')

@section('title')
 @parent
 Home
 @stop

 @section('container')
 @parent
<div v-for="post in $root.truth.posts | orderBy 'id' -1 ">
            <post
                :accepted-terms="post.accepted_terms"
                :open-disqus="openDisqus "
                :delete-post="deletePost"
                :approval="post.approval"
                :edit-mode="editMode"
                :edit-post="editPost"
                :title="post.title"
                :photo="post.photo"
                :reply="post.reply"
                :body="post.body"
                :likes="likes"
                :id="post.id"
                :user="user"
                >
            </post>
    </div>
@stop