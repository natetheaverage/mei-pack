<style>
</style>

<template>
<div id="ComplianceCalculator">
                    <div class="table table-striped" class="files" id="dropzone-previews">
                <div id="template" class="file-row">
                    <!-- This is used as the file preview template -->
                    <div>

                        <strong class="error text-danger" data-dz-errormessage></strong>

                        <span class="name" data-dz-name></span>
                        <span class="size" data-dz-size></span>
                        <div class="progress progress-striped progress-sm active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                            <div class="progress-bar progress-sm progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-repeat=" workbook in workbooks ">
                <div class="col-md-6 pull-left">
                    <workbook>
                        <div v-repeat="inventory in inventories">
                            <inventory>
                            </inventory>
                        </div>
                    </workbook>
                </div>
            </div>

        </div><!-- End ComplianceCalculator -->

    <div>

</div>
</template>

<script>
import inventory from './inventory.vue';
import workbook  from './workbook.vue';
//var InventoryDropzone = require('../ui/inventoryDropzone.js');
import InventoryDropzone from "../../../api/inventoryDropzone.js";


//////////////////////////////////////////////////////////////
// VUE Project system [ START ]
export default {
    template: '#metrc-calculator-template',
    data: function() {
        return {
            //users: $(bosspos.usersBasic),
            currentUser: false,
            components: ['projects', 'tasks', 'conversations', 'comments'],// 'workbook', 'inventory', 'sheets',
            workbooks: [],
            sheets: {},
            inventories: {a: 1, b: 2, c: 3, d: 4},
            projects: {},
            tasks: {},
            conversations: {},
            comments: {},
            projectVisibility: 'active',
        }
    },

    methods: {
        /*
         * New Objects
         * each calls save method to persist
         */
        createNewInventory: function (user_id) {
            var newInventory = {
                'product_id': this.id,
                'name': 'pot',
                'rfid': '',
                'class': 'info',
                'unit_count': '',
                'user_id': this.currentUser,
                'facility_id': '',
                'conversation_id': '',
                'project_id': '',
                'history': '',
                'deleted': false
            };
            this.save(newProject, 'projects', 'new');
        },

        /*
         * Persistence Success methods
         * each handles its actions success
         */
        newPersisted: function (objectList, newObject) {
            //console.log('saved', newObject[newObject.length - 1].id,'pushing to',objectList);
            this[objectList].push(newObject[newObject.length - 1]);
        },
        updatePersisted: function (type, returned, obj) {
            //console.log('saved',type, obj.id); //
        },
        deletePersisted: function (objectType, deletedObject, obj) {
            var list = this[objectType];
            for (var i in this[objectType]) {
                if (list[i].id == obj.id) {
                    list.splice(i, 1)
                }
            } // Find deleted object and remove it from list
        },
        /*
         * Component called  methods
         * each handles its components requested action
         */
        softDelete: function (objectID, action) {
            var model = this.pullApartObjectID(objectID);
            console.log(objectID, model)
            for (var i in model.obj) {
                if (model.obj[i].id == model.id) {
                    //console.log(model.obj[i].deleted)
                    model.obj[i].deleted = !model.obj[i].deleted; //Toggle deleted Var
                    //console.log(model.obj[i].deleted)
                    this.save(model.obj[i], model.type, action); // Persist
                }
            }
        },
        permanentTrash: function (objectID) {
            var model = this.pullApartObjectID(objectID)
            for (var i in model.obj) {
                if (model.obj[i].id == model.id) {
                    this.save(model.obj[i], model.type, 'delete');
                }
            }
        },
        /*
         * Vue Object persistence
         * obj = component/object to persist
         * objType = name of object
         * action = will accept (update, new, delete)
         */
        save: function (obj, objType, action) {
            this.$http.post('/api/' + action + '/' + objType, obj, function (model, status, request) {
            }).success(function (model) {
                this.$set(objType, model);
                //this[action+'Persisted'](objType, model, obj)
            })
        },
        /*
         * fetch component objects
         */
        fetch: function (component) {
            this.$http.get('/api/' + [component], function (project) {
                this.$set(component, project);
            });
        },

        /*
         * Helper Methods
         */
        pullApartObjectID: function (objectID) {
            var modelId = objectID.id.substr((objectID.id.indexOf('_') + 1), objectID.id.length);
            var modelType = objectID.id.substr(0, objectID.id.indexOf('_'));
            var that = this[modelType];
            return {obj: that, id: modelId, type: modelType}
        }
    },

    ready: function () {
        for (var i in this.components) {
            this.fetch(this.components[i]);
        }
        InventoryDropzone.inventoryDropzoneTemplate();
        InventoryDropzone.myDropzone();

        console.log(InventoryDropzone);
        console.log(this);
    }
}
    



// VUE system [ END ]
//////////////////////////////////////////////////////////////

function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
        // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [
        []
    ];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];

        //console.log(arrMatches);

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).

        if (arrMatches[2]) {
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"), "\"");
        } else {
            // We found a non-quoted value.
            var strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
}

function metrcCsv2Json(csv, fileName) {
    var array = CSVToArray(csv);
    var obj = {};
    var g = fileName.slice(0,17);
    if( g = "PackagesInventory" ){
        obj = metricCVS(array)
    }
    console.log('finished '+obj);
    return obj;
}

function metricCVS(array){
    var h = array[11][2];
    var recordCount = Number(h.replace(/^\D+/g, ''));
    obj = {title: array[1][4]};
    obj = {dates: array[2][4]};
    obj = {name: array[8][3]};
    obj = {license: array[9][3]};
    obj = {type: array[10][3]};
    obj = {records: recordCount};
    //array[0].splice(0, 167);
    var colCount = array[0].length;
    var keysArray = [];
    for (var k = 0; k < colCount; k++) {
        var key = array[12][k];
        if (key !== undefined) {
            keysArray.push(array[12][k]);
        } else {
            keysArray.push("-");
        }
    }
    var obj = {i: {}};
    for (var i = 13; i < (recordCount + 13); i++) {
        var key = 0;
        obj[i] = {};
        for (var k = 0; k < colCount - 1; k++) {
            var value = array[i][k];
            if (value != '-' && keysArray[key] !== 'Harvest') {
                obj[i][keysArray[key]] = value;
                key++;
            } else {
                if (keysArray[key] == 'Harvest') {
                    key++;
                    k + 3;
                    //array[0].shift();
                    //array[0].shift();
                }
            }
        }
    }
    return obj;
}


/*
var csv = '' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","Packages Inventory","","","","","","","","","","" ' +
    '"","","","","From 10/1/2014 to 10/31/2014","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","Name","SOULSHINE MEDICAL CONSULTING LLC","","","","","","","","","","","" ' +
    '"","","License","402-00332","","","","","","","","","","","" ' +
    '"","","Type","MMC Type 1","","","","","","","","","","","" ' +
    '"","","Total Records: 11","","","","","","","","","","","","" ' +
    '"","","Tag","","","Harvest","Item","","Item Category","Quantity","Lab Testing","Date","","","" ' +
    '"","","1A4000500266EFD100000116","","","10/10","DURBAN POISON","","Buds","33.07 g","NotSubmitted","10/10/2014","","","" ' +
    '"","","1A4000500266EFD100000117","","","10/10","nycd","","Buds","59.25 g","NotSubmitted","10/10/2014","","","" ' +
    '"","","1A4000100265688C0000004A","","","","chocolope","","Buds","208.41 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004D","","","","lemon diesel","","Buds","289.69 g","NotSubmitted","10/23/2014","","","" ' +
    '"","","1A4000100265688C0000004E","","","","sour diesel","","Buds","108.23 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004F","","","","texas hash","","Buds","311.95 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C00000050","","","","Concentrates","","Concentrate","156 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004B","","","","critical mass","","Buds","253.03 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004C","","","","jah kush","","Buds","55.78 g","NotSubmitted","10/23/2014","","","" ' +
    '"","","1A4000100265688C00000051","","","","Edibles","","Infused (edible)","311 ea","TestPassed","10/21/2014","","","" ' +
    '"","","1A4000100265688C00000052","","","","Non-Edibles (Topicals)","","Infused (non-edible)","95 ea","NotSubmitted","10/21/2014","","",""';
*/
//console.log(metrcCsv2Json(csv));
</script>