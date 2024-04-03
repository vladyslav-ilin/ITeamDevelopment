import {createReducer, on} from "@ngrx/store";
import {graphInitialState} from "./graph.state";
import graphActions from "./graph.actions";

export const graphReducer = createReducer(
  graphInitialState,
  on(graphActions.loadGraphSuccess, (state, { payload }) => {
    return {
      ...state,
      graph: payload
    };
  })
)
