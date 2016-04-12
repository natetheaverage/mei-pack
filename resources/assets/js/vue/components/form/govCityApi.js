module.exports = function()
    {
        var xhr; 
        var that = this;
        var select_state, $select_state;
        var select_city, $select_city;
        console.log(this.tagOptions[0].id);
        $select_state = $('#select-state').selectize({
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            //value: 'value',
            options: that.tagOptions.slice(0,51), 
            onChange: function(id) {
                var chosen_state = this.options[id];
                that.post.tags.push({ name: chosen_state.name, type: 'location' })
                if (!id.length) return;
                select_city.disable();
                select_city.clearOptions();
                select_city.load(function(callback) {
                    xhr && xhr.abort();
                    xhr = $.ajax({
                        url: 'http://crossorigin.me/http://api.sba.gov/geodata/primary_city_links_for_state_of/'+chosen_state.value+'.json',
                        success: function(results) {
                            select_city.enable();
                            callback(results);
                        },
                        error: function() {
                            callback();
                        }
                    })
                });
            }
        });

        $select_city = $('#select-city').selectize({
            valueField: 'feature_id',
            labelField: 'name',
            searchField: ['name'],

            onChange: function(id)
            {
                console.log('city list');
                console.log(this.options[id].name)
                that.post.tags.push({ name: this.options[id].name, type: 'location' })
            }
        });

        select_city  = $select_city[0].selectize;
        select_state = $select_state[0].selectize;

        select_city.disable();
}