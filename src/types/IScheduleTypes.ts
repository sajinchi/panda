interface Event {
    image: string;
    time: string;
    act_type: string;
    artist: string;
  }
  
export interface IScheduleTypes {
    days: Event[];
  }