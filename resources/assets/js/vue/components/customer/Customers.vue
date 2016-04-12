<template>
<div class="col-lg-12">
        <!--Primary Panel-->
        <!--===================================================-->
        <div class="panel panel-bordered panel-dark">
            <div class="panel-heading">
                <div class="panel-control">
                    <span class="label label-danger">?#? Customers</span>
                    <button class="btn btn-default" data-target="#demo-panel-collapse" data-toggle="collapse" aria-expanded="true"><i class="fa fa-chevron-down"></i></button>
                    <button class="btn btn-default" data-dismiss="panel"><i class="fa fa-times"></i></button>
                </div>
                <h3 class="panel-title">Customers</h3>
            </div>
            <div id="demo-panel-collapse" class="collapse in panel-body" aria-expanded="true">

                
                    <div class="col-md-4 col-lg-4">

                    <!--Profile Widget-->
                    <!--===================================================-->
                    <div class="panel widget">
                        <div class="widget-header bg-mint"></div>
                        <div class="widget-body text-center">
                           {{--  @include('partials.user.avatar')  --}}
                                <a class="users-list-name" href="/employee/{{-- $user->id --}}"><h4 class="mar-no">{{-- $user->username --}}</h4></a>
                            <p class="text-muted mar-btm">{{-- $user->employeeInfo->title --}}</p>
                            <span class="users-list-date">{{-- $user->date_joined --}}</span>
                            <div class="pad-ver">
                                <button class="btn btn-primary">Edit</button>
                                {!! Form::open(['method' => 'DELETE', 'url' => 'employee/ ' ]) !!}
                                {!! Form::submit('Delete', ['class' => 'btn btn-warning btn-active-error']) !!}
                                {!! Form::close() !!}
                                <button class="btn btn-success">Message</button>
                            </div>
                        </div>
                    </div>
                    <!--===================================================-->

                </div>

                

            </div>
        </div>
        <!--===================================================-->
        <!--End Primary Panel-->
    </div>
    </div>

<pre v-show="dataMode">@{{ $data | json }}</pre>
</template>

<script>
module.exports = {

  //template: '#customers-page-template',

  //inherit: true,

  data: function() {
    return { 
      customerResource: this.$resource('api/customer/:options'),
      customers: {},
    }
  },
  methods: {
    
  },
  components: {
    //'navpagebutton': require('./navpagebutton.js')
  },
  created: function() {
    console.log('<< customers.js >> Component Created');
  },
  ready: function(){
    console.log('<< customers.js >> Component Ready');
    this.customerResource.get(//{options: ""},
        function (customerData, status, request) {
          this.$set('customers', customerData);
      }).error(function (customerData, status, request) {
        console.log( "<< customers.js >> Errrr@ready->this.eployee.get()");
      })
  }

}
</script>

<style>
</style>