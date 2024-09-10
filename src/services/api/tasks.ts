import { tasksFaker } from '../../pages/Tasks/tasksFaker';

export async function getTasks() {
  try {
    const data = await tasksFaker;

    //const { data } = await axios.get("/task");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}

export async function getTaskId() {
  try {
    const data = await tasksFaker;
    const dataId = data.filter((task) => task.id === 1);

    //const { data } = await axios.get("/task/id");
    return dataId;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
