import {
  eventsProfileFaker,
  profileFaker,
  skillsProfileFaker,
} from "../../pages/Profil/profilFaker";
import { useApi } from "../hooks/useApi";

const api = useApi();

export async function getUserProfile() {
  try {
    const data = await profileFaker;

    //const { data } = await axios.get("/profile");
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function getProfile() {
  try {
    const { data } = await api.get(`profiles`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getEventsByUserIdForProfilePage(id: string | undefined) {
  try {
    const data = eventsProfileFaker;
    console.log(id);
    // REMPLACER par requete get sur (user_task_event JOIN events) by user_id
    //
    // const {data} = await axios.get(`/user-task-event/${id}`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSkillsByUserIdForProfilePage(id: string | undefined) {
  try {
    const data = skillsProfileFaker;
    console.log(id);
    // REMPLACER par requete get sur (user_task_event JOIN events) by user_id
    //
    // const {data} = await axios.get(`/user-task-event/${id}`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserProfileId() {
  try {
    const data = await profileFaker;
    const dataId = data.filter((profile) => profile.id === 1);

    //const { data } = await axios.get("/profile/id");
    return dataId;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function putPorfileUser(updateProfile: any) {
  try {
    const { data } = await api.patch(`profiles`, updateProfile);

    console.log("🚀 ~ putPorfileUser ~ data:", data);
    return data.data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}
