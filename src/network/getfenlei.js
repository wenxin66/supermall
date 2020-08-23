import {request} from "./request";

export function getfenlei() {
    return request({
        url:'/category'
    })
}
export function getshujushang(maitKey) {
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}