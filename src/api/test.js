import request from '@/utils/request';

export function haveTest(){
    return request({
        method:'get',
        url:'/website/test'
    })
}