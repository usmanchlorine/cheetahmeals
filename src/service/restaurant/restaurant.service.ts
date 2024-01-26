import camelize from 'camelize';
import { mocks } from "./mock"
import { restaurantType } from './restaurant.type';
type keys = keyof typeof mocks // object ki typeof or uski keyof 

export const restaurantRequest = (location: keys) => {
    return new Promise((resolve, reject) => {
        if (mocks[location]) {

            resolve(mocks[location])


        } else {
            reject("no mock found")
        }
    })
}



export const dataTransformed = (results: restaurantType[]) => {

    const mappedData = results.map((restuarant) => {
        return {
            ...restuarant,
            isOpenNow: restuarant.opening_hours?.open_now,
            isCloseTemporarily: restuarant.business_status === "CLOSED_TEMPORARILY"
        }
    })
    const camelizeData = camelize(mappedData)
    return camelizeData
}

// export const disPatchRestaurantRequest = async () => {
//     type restaurantData = typeof sample
//     const data: any = await restaurantRequest('41.878113,-87.629799')
//     if (data) {
//         console.log(dataTransformed(data.results))
//     }
// }

