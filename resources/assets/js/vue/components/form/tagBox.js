module.exports = function() 
{
    var that = this;
    var $select = $('.input-tags').selectize({
        plugins: ['restore_on_backspace'],
        valueField: 'id',
        searchField: 'name',
   
        options: that.tagOptions,//.slice(52,that.tagOptions.length),

        onItemRemove: function(id, data) 
        {
            var removeByAttr = function(arr, attr, value){
                var i = arr.length;
                while(i--){
                   if( arr[i] 
                       && arr[i].hasOwnProperty(attr) 
                       && (arguments.length > 2 && arr[i][attr] == value ) ){ 
                       arr.splice(i,1);
                   }
                }
                return arr;
            }
            removeByAttr(that.post.tags, 'id', id);
        },
        onOptionAdd: function(id, data)
        {
            console.log( that.tagOptions.push({ name: data.name, type: data.type }) )
        },

        render: {
            item: function(data, escape) 
            {
                that.post.tags.push({ id: data.id, name: data.name, type: data.type })
                return '<div>' + that.findCategoryIcon(data.type) +' '+ escape(data.name) + '</div>';
            },
            option: function(data, escape) 
            { 
                var label = data.name;
                var category = that.findCategoryIcon(data.type);
                return '<div class="option"><span class="category">' + category + '</span><span class="label">' + escape(label) + '</span></div>';
            }
        },
        create: function(input) {
                return {
                    id: that.tagOptions.length + 1,
                    name: input,
                    type: 'undecided'
                };
            }
    });
    
    var tagBox = $select[0].selectize;
    for(var tag in this.post.tags)
    {
        tagBox.addItem(this.post.tags[tag].id, true)
    }
}