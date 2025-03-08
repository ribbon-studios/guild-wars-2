import * as v1 from './apis/v1';

// TODO: Remove this if its never used elsewhere
// export enum EventState {
//   /**
//    * The event is not running.
//    */
//   INACTIVE = 'Inactive',
//   /**
//    * The event is running now.
//    */
//   ACTIVE = 'Active',
//   /**
//    * The event has succeeded
//    */
//   SUCCESS = 'Success',
//   /**
//    * The event has failed
//    */
//   FAIL = 'Fail',
//   /**
//    * The event is inactive and waiting for certain criteria to be met before becoming `Active`
//    */
//   WARMUP = 'Warmup',
//   /**
//    * The criteria for the event to start have been met, but certain activities (such as an NPC dialogue) have not completed yet. After the activites have been completed, the event will become `Active`.
//    */
//   PREPARATION = 'Preparation',
// }

export class GuildWars2 {
  v1 = v1;
}
