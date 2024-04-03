export interface IGraph {
  data: IGraphData,
  type: string
}

export interface IGraphData {
  agreeableness: number | null,
  drive: number | null,
  luck: number | null,
  openness: number | null
}
