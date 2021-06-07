interface Spider extends BaseModel {
  name?: string;
  display_name?: string;
  spider_type?: string;
  cmd?: string;
  param?: string;
  mode?: TaskMode;
  node_ids?: string[];
  node_tags?: string[];
  project_id?: string;
  project_name?: string;
  description?: string;
  update_ts?: string;
  create_ts?: string;
  last_task?: Task;
  stat?: SpiderStat;
}

interface SpiderStat {
  _id: number;
  last_task?: Task;
  tasks: number;
  results: number;
  wait_duration: number;
  runtime_duration: number;
  total_duration: number;
  average_wait_duration: number;
  average_runtime_duration: number;
  average_total_duration: number;
}
