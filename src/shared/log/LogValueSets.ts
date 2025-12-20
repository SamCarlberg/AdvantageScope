// Copyright (c) 2021-2025 Littleton Robotics
// http://github.com/Mechanical-Advantage
//
// Use of this source code is governed by a BSD
// license that can be found in the LICENSE file
// at the root directory of this project.

export interface LogValueSetAny {
  timestamps: number[];
  values: any[];
}

export interface LogValueSetRaw {
  timestamps: number[];
  values: Uint8Array[];
}

export interface LogValueSetBoolean {
  timestamps: number[];
  values: boolean[];
}

export interface LogValueSetNumber {
  timestamps: number[];
  values: number[];
}

export interface LogValueSetString {
  timestamps: number[];
  values: string[];
}

export interface LogValueSetBooleanArray {
  timestamps: number[];
  values: boolean[][];
}

export interface LogValueSetNumberArray {
  timestamps: number[];
  values: number[][];
}

export interface LogValueSetStringArray {
  timestamps: number[];
  values: string[][];
}

/**
 * Special case to track the running commands for a mechanism over time.
 */
export interface LogCommandMechanism {
  /** Doesn't change over time. */
  name: string;
  commands: LogCommand[];
}

/**
 * Special case for running commands. Commands have a start time, end time, and data that doesn't change over time.
 * This is used to optimize storage and data lookup for controllers and renderers.
 */
export interface LogCommand {
  /**
   * Start and end time of the command.
   */
  range: [number, number];

  /**
   * Unique ID number of the command.
   */
  id: number;
  /**
   * ID number of the parent command. Undefined if there is no parent.
   */
  parentId?: number;
  /**
   * Name of the command.
   */
  name: string;

  /**
   * Any children of this command.
   */
  children: LogCommand[];

  // last_time_ms and total_time_ms do change over time, and would necessitate tracking individual data points
  // but for the time being, we discard them for the sake of performance
}
