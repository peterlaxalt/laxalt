// Core
import React from "react";

// // Types
// import { LXLT_LayeredSidebar } from ".";

// // Begin Types
// // __________________________________________________________________________________________

// export type LXLT_LayeredSidebar_Context = LXLT_LayeredSidebar & {
//   setSidebar?: (panes: LXLT_LayeredSidebar) => void;
// };

// // Begin Data
// // __________________________________________________________________________________________

// /**
//  *
//  * @name SidebarContext_Defaults
//  * @description Defaults for our context
//  *
//  */
// export const SidebarContext_Defaults: LXLT_LayeredSidebar_Context = {
//   addClass: "",
//   panes: [],
//   setSidebar: () => {},
// };

// /**
//  *
//  * @name useSidebarContext
//  * @description Our hook to update our context
//  * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
//  *
//  */
// export const useSidebarContext = (): LXLT_LayeredSidebar_Context => {
//   const [sidebarPanes, setSidebarPanes] = React.useState(
//     SidebarContext_Defaults
//   );

//   const setSidebar = React.useCallback(
//     (currentPanes: LXLT_LayeredSidebar_Context): void => {
//       setSidebarPanes(currentPanes);
//     },
//     []
//   );

//   return {
//     ...sidebarPanes,
//     setSidebar,
//   };
// };

// /**
//  *
//  * @name SidebarContext
//  * @description Our context provider
//  * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
//  *
//  */
// export const SidebarContext = React.createContext<LXLT_LayeredSidebar_Context>(
//   SidebarContext_Defaults
// );
