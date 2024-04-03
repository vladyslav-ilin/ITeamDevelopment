import {createFeatureSelector, createSelector} from "@ngrx/store";
import {graphStateName, IGraphState} from "./graph.state";

const graphStateSelectors = createFeatureSelector<IGraphState>(graphStateName)

export const selectGraphData = createSelector(
  graphStateSelectors,
  (state) => state.graph.data
);

export const selectGraphType = createSelector(
  graphStateSelectors,
  (state) => state.graph.type
);
