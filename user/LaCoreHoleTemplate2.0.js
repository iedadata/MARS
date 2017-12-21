/*
Revised mapping file for LaCore by Tia Curry
15 November 2017
*/

//creates a date from a string in the form YYYYDDMM
const ISO8601Date = (dateValue) => {
    const y = dateValue.substr(0, 4)
    const d = dateValue.substr(6, 2)
    const m = dateValue.substr(4, 2)
    return y + '-' + m + '-' + d + 'T00:00:00Z'
}

//translates LaCore Position value
const laCorePosition = (laCoreValue) => {
	if (laCoreValue == 'exact (read from GPS)') {
	 	return 'GPS'
	}
	else {
		return typeValue
	}
}

//returns the expected country name
const laCoreCountry = (laCoreValue) => {
	if (laCoreValue == 'USA') {
		return 'United States'
	}
	else {
		return laCoreValue
	}
}

// creates a delimited list of values
const delimit = (valueArray) => {
  return valueArray.join(';')
}

let map = {
    name: "Hole ID",
    sample_comment: ["Comment", "Metadata Source"],
    latitude: "Lat",
    longitude: "Long",
    elevation: "Elevation",
    navigation_type: "Position",
    primary_location_type: "Location Type",
    locality: "Location",
    locality_description: "Location ID",
    country: "Country",
    province: "State_Province",
    county: "County_Region",
    cruise_field_prgrm: "Expedition",
    platform_name: "Platform",
    collector: "PI",
    collection_start_date: "Date",
    collection_end_date: "Date"
}

let logic = {
    collection_start_date: ISO8601Date,
    collection_end_date: ISO8601Date,
    navigation_type: laCorePosition,
    country: laCoreCountry
}

let combinations = {
  sample_comment: delimit
}

return {map, logic, combinations}