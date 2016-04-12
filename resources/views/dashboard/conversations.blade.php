@extends('nest')

@section('title')
  @parent
  Conversations
  @stop

 @section('container')
 @parent
<div v-for="conversation in $root.truth.conversations | orderBy 'id' -1 ">
            <post
                :accepted-terms="conversation.accepted_terms"
                :open-disqus="openDisqus "
                :delete-conversation="deleteConversation"
                :approval="conversation.approval"
                :edit-mode="editMode"
                :edit-conversation="editConversation"
                :title="conversation.title"
                :photo="conversation.photo"
                :reply="conversation.reply"
                :body="conversation.body"
                :likes="likes"
                :id="conversation.id"
                :user="user"
                >
            </post>
    </div>
@stop