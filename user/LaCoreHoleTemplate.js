//creates a date from a string in the form YYYYDDMM
const ISO8601Date = (dateValue) => {
    const y = dateValue.substr(0, 4)
    const d = dateValue.substr(6, 2)
    const m = dateValue.substr(4, 2)
    return y + '-' + m + '-' + d + 'T00:00:00Z'
}


// creates a delimited list of values
const delimit = (valueArray) => {
  return valueArray.join(';')
}

let map = {
    sample_type: "Sample Type",
    name: "Hole ID",
    sample_comment: ["Comment", "Metadata Source"],
    latitude: "Lat",
    longitude: "Long",
    elevation: "Elevation",
    vertical_datum: "Water Depth (m)",
    navigation_type: "Position",
    primary_location_type: "Location Type",
    locality: "Location",
    locality_description: "Location ID",
    country: "Country",
    privince: "State_Province",
    county: "County_Region",
    cruise_field_prgrm: "Expedition",
    platform_name: "Platform",
    collector: "PI",
    collection_start_date: "Date",
    collection_end_date: "Date",
    depth_min: "DepthTop",
    depth_max: "DepthBottom",
    sample_other_names: "Original ID" 
}

let logic = {
    collection_start_date: ISO8601Date,
    collection_end_date: ISO8601Date
}

let combinations = {
  sample_comment: delimit
}

return {map, logic, combinations}