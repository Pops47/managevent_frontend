import { tasksListFaker } from "../fakers/tasksFaker";

export async function getTasksList() {
  try {
    const data = tasksListFaker;
    // REMPLACER par requete get sur task
    //
    // const {data} = await axios.get(`/task`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}
