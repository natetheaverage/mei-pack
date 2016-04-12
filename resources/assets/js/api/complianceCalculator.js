// Source: http://www.bennadel.com/blog/1504-Ask-Ben-Parsing-CSV-Strings-With-Javascript-Exec-Regular-Expression-Command.htm
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.

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

function metrcCsv2Json(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    var h = array[0][156];
    var recordCount = Number(h.replace( /^\D+/g, ''));
    objArray[0] = {title: array[0][18]};
    objArray[1] = {dates: array[0][32]};
    objArray[2] = {name: array[0][115]};
    objArray[3] = {license: array[0][129]};
    objArray[4] = {type: array[0][143]};
    objArray[5] = {records: recordCount};
    array[0].splice(0, 167);
    var colCount = Math.round(array[0].length / recordCount);
    var keysArray = [];
        for (var k = 0; k < colCount; k++) {
            var key = array[0][0];
            if(key === undefined) {
                array[0].shift();
            }else{
                keysArray.push(array[0].shift());
            }
        }
    var obj = {i:{}};
    for (var i = 0; i < recordCount; i++) {
       var key = 0;
        obj[i] = {};
        for (var k = 0; k < colCount-1; k++) {
            var value = array[0].shift();
            if(value != undefined && keysArray[key] !== 'Harvest') {
                obj[i][keysArray[key]] = value;
                key++;
            } else {
                if(keysArray[key] == 'Harvest'){key++;array[0].shift();array[0].shift();}
            }
        }
    }
    console.log(obj);
    //var json = JSON.stringify(objArray, keysArray);
    //var str = json.replace(/},/g, "},\r\n");

    return obj;
}

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
console.log(metrcCsv2Json(csv));
