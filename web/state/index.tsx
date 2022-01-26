import React from "react";

export type LXLT_State_Filters = {
  queries: string[];
};

type LXLT_State = {
  currentFilter: {
    _state: LXLT_State_Filters;
    _set: (_filterUpdate: LXLT_State_Filters) => void;
  };
};

/**
 *
 * @name LAXALT_DEFAULT_STATE
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */
export const LAXALT_DEFAULT_STATE: LXLT_State = {
  currentFilter: {
    _state: {
      queries: [],
    },
    _set: () => {},
  },
};

/**
 *
 * @name useLaxaltState
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */
export const useLaxaltState = (): LXLT_State => {
  const initialFilterState: LXLT_State_Filters = { queries: [] };
  const [filterState, setFilterState] = React.useState(initialFilterState);

  const updateFilterState = React.useCallback(
    (_filterUpdate: LXLT_State_Filters): void => {
      setFilterState(_filterUpdate);
    },
    []
  );

  return {
    currentFilter: {
      _state: filterState,
      _set: updateFilterState,
    },
  };
};

/**
 *
 * @name LaxaltContext
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */
export const LaxaltContext =
  React.createContext<LXLT_State>(LAXALT_DEFAULT_STATE);
