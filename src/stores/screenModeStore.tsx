/**
* 스토어 생성
* 
* @author Yu-sooho
*/

import { observable, runInAction } from 'mobx';

const createStore = () => {
    //스토어 이름
    const screenModeStore = {
        screenMode: observable.box('selectVoca'),   //변수 이름
        changeScreenMode: (data: any) => runInAction(() => screenModeStore.screenMode.set(data))    //변수 변경하는 함수
    };

    return screenModeStore;
};

const store = createStore();
export default store;