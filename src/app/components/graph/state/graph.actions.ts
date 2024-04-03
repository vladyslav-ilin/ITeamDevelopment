import {createAction, props} from "@ngrx/store";
import {IGraphState} from "./graph.state";
import {IGraph} from "../../../../dtos/graph";

const loadGraph = createAction('[Graph] Load Graph Info', props<{ id: number | null; token: string }>());
const loadGraphSuccess = createAction('[Graph] Load Graph Info Success', props<{payload: IGraph}>());

const graphActions = {
  loadGraph,
  loadGraphSuccess
};

export default graphActions;
