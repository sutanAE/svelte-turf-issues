import * as turf from '@turf/turf'


export function load(){
    
    const point = turf.helpers.point([-75.343, 39.984])
    const buffer = turf.buffer(point, 1000, {
        units: 'meters'
    })

    buffer
    return{buffer}
}