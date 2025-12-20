/**
 * 1-to-1 mapping to the v3 mechanism protobuf.
 */
export type MechanismProto = {
  name: string;
};

/**
 * 1-to-1 mapping to the v3 command protobuf.
 */
export type CommandProto = {
  name: string;
  id: number;
  parent_id?: number;
  requirements: MechanismProto[];
  last_time_ms: number;
  total_time_ms: number;
};

/**
 * 1-to-1 mapping to the v3 scheduler protobuf.
 */
export type SchedulerProto = {
  running_commands: CommandProto[];
  queued_commands: CommandProto[];
  mechanisms: MechanismProto[];
  last_time_ms: number;
};
