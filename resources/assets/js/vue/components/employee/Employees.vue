<template>
  <pre>@{{ $data | json }}</pre>
</template>

<script>
export default {

  data: function() {
    return { 
      employeeResource: this.$resource('api/employee/:options'),
      employees: {},
    }
  },
  methods: {
    
  },
  components: {
    //'navpagebutton': require('./navpagebutton.js')
  },
  created: function() {
    console.log('<< employees.js >> Component Created');
  },
  ready: function(){
    console.log('<< employees.js >> Component Ready');
    this.employeeResource.get(//{options: ""},
        function (employeeData, status, request) {
          this.$set('employees', employeeData);
      }).error(function (data, status, request) {
        console.log( "<< employees.js >> Errrr@ready->this.eployee.get()");
      })
  }
}
</script>

<style>
</style>