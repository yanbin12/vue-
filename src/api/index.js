'use strict'
import { Request } from './request'


export function FileImageUpload(event, accessTokenid) {
    let files = event.target.files[0];
    let formData = new FormData();
    formData.append("file", files);
    return Request.http.post(`?accessToken=${accessTokenid}`, formData, 100);
}