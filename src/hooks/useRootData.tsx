/**
* 스토어 변경하는 hooks 생성
* 
* @author Yu-sooho
*/

import { useObserver } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { storesContext } from '../utils/context';

export const useStoreData = (
  context:any,
  storeSelector:any,
  dataSelector:any,
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error("No store");
  }
  const store = storeSelector(value);

  return useObserver(() => {
    return dataSelector(store);
  });
};

export default (dataSelector:any) => {
  return useStoreData(storesContext, (contextData:any) => contextData, dataSelector);
};