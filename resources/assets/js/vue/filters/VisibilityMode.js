module.exports = {
    read: function(value, input){
        //console.log('visibilty mode filter read method called');
        switch(input) {
            case 'all':
                return value;
                break;
            case 'active':
                return value.filter(function (value) {
                    return !value.deleted;
                });
                break;
            case 'completed':
                return value.filter(function (value) {
                    return value.deleted;
                });
                break;
        }
    },

    write: function(value, input){
        console.log('visModeFilter val, input = '+value+' '+input);
    }
}