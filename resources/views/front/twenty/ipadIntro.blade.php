<div class="container">    
  <div class="row flex pad-all">
    <div class="col-sm-9">
      <h1>
        <editable-copy
          :name-of-parent="'MEiApp_'+id"
          instance-number="0"
          use-html="true" 
          overide-text=""
        ></editable-copy>
      </h1> 
      <h2>
        <editable-copy
          :name-of-parent="'MEiApp_'+id"
          instance-number="1"
          use-html="true" 
          overide-text=""
        ></editable-copy>
      </h2>
      <p>
        <editable-copy
          :name-of-parent="'MEiApp_'+id"
          instance-number="2"
          use-html="true" 
          overide-text=""
        ></editable-copy>
      </p>
    </div>
    <div class="col-sm-3 flex-center text-center">
      <a class="mtrl-btn mtrl-raised bg-green" 
        href="/info"
      >download now<br><center><i class="fa fa-arrow-circle-o-down fa-3x"></i></center></a>
    </div>
  </div>
</div>