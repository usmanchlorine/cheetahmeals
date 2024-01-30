import { locations } from "./location.mock";
import camelize from "camelize";

export type locationCities = keyof typeof locations
export type results = typeof locations.chicago

export const locationRequest = (searchTerm: locationCities) => {
    return new Promise((resolve, reject) => {
        const location = locations[searchTerm]
        if (!location)
            reject("no location")

        resolve(location)

    })

}


export const locationTransformed = (results: results) => {
    if (results) {
        const { geometry } = results.results[0]
        const { lat, lng } = geometry.location
        return { lat, lng }
    }


}
