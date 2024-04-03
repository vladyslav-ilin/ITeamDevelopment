import {IGraph} from "../../../../dtos/graph";

export const graphStateName = 'graph';

export interface IGraphState {
  graph: IGraph;
}

export const graphInitialState: IGraphState = {
  graph: {
    data: {
      agreeableness: null,
      drive: null,
      luck: null,
      openness: null
    },
    type: ''
  }
}
