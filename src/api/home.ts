import http from '@/utils/http';
import apiOpen from '@/utils/apiOpen';
import apiOpenw from '@/utils/apiOpenw';

export const apiMfree = (data: any, config: any) => {
    return apiOpenw.get('novelApi', data);
};

export const apiListJoke = (data: any, config: any) => {
    return apiOpen.get('getJoke?page=1&count=2&type=video', data);
};

export const apiListNews = (data: any, config: any) => {
    return apiOpenw.get('satinGodApi?type=2&page=1', data);
};
