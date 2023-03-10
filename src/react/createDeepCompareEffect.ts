import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { isEqual } from '../utils/isEqual';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;
type CreateUpdateEffect = (hook: EffectHookType) => EffectHookType;

const depsEqual = (aDeps: React.DependencyList = [], bDeps: React.DependencyList = []) => {
  return isEqual(aDeps, bDeps);
};

export const createDeepCompareEffect: CreateUpdateEffect = (hook) => (effect, deps) => {
  const ref = useRef<React.DependencyList>();
  const signalRef = useRef<number>(0);

  if (deps === undefined || !depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  hook(effect, [signalRef.current]);
};
