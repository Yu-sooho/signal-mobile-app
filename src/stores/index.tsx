/**
* 스토어 반환
* 
* @author Yu-sooho
*/

//생성한 스토어 참조
import screenModeStore from './screenModeStore'

//생성한 스토어를 반환
const createRootStore = () => {
  return {
    screenModeStore
  };
};


//반환한 createRootStore로 생성한 모든 스토어 한번에 관리 가능
export default createRootStore;