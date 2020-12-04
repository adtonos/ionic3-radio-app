import { Genre } from "./genre";
import { Station } from "./station";

const station = new Station('radio-net','Radio Net',8020)
  
export const genres:Genre[] = [
    new Genre('181_pop','Pop',[station]),
]