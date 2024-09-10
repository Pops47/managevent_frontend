
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import * as yup from "yup";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./TaskList.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    Textarea,
} from "@material-tailwind/react";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
export interface taskList {
    nom: string,
    description: string
}

const dataSchema = yup.object({
    nom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    description: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
})

export default function TaskList() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
        reset();
    }
    const [tasks, setTasks] = useState<taskList[]>([])

    const { register, handleSubmit, reset, formState: { errors } } =
        useForm<taskList>({
        resolver: yupResolver(dataSchema),
        });
    
    const onSubmit = (data: taskList): void => {
        const newTask = {
            nom: data.nom,
            description: data.description,
        }
        setTasks([newTask, ...tasks]);
        handleOpen();
        reset()
    }

    function cancelTask() {
        reset()
        handleOpen();
    }
    return (
        <>
            <h1 className=" font-bold text-center text-xl mt-10">Espace Admin </h1>
            <h2 className=" font-bold text-center text-md mt-10">Liste des taches :</h2>
            <div className=" flex justify-center  rounded-md mt-5 mb-5 relative">
                <input type="text" placeholder="Recherche par nom" className="px-10 text-black" />
                <FontAwesomeIcon title="Voir la tache" icon={faSearch} className=" absolute text-black top-1 ms-60" />
            </div>
            <div className="mt-10 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mx-auto" >
                <ButtonDefault onClick={handleOpen} >
                    Créer
                </ButtonDefault>
                <Dialog
                    className="gap-3"
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>  <h1 className="mx-auto text-white mt-3 text-xl font-bold">Créer une tache</h1></DialogHeader>
                    <DialogBody >
                        <form onSubmit={handleSubmit(onSubmit)} className=" gap-3">
                            <div className="mt-5">
                                <div className="">
                                    <InputDefault
                                        register={register} type="text" label="nom" name="nom" />
                                    <small className="text-sm text-red-500">{errors.nom?.message}</small>
                                </div>
                                <div className="mt-4">
                                    <Textarea {...register("description")}
                                        color="orange" label="description" name="description" className="text-white" />
                                    <small className="text-sm text-red-500">{errors.description?.message}</small>
                                </div>
                                <div>
                                    <ButtonDefault type="submit" value="submit" className="mb-3">Valider</ButtonDefault>
                                    <ButtonDefault type="reset" value="reset" onClick={cancelTask}>Annuler</ButtonDefault>
                                </div>
                            </div>
                        </form>
                    </DialogBody>
                </Dialog>
            </div>
            {/*-------------------*/}
            {tasks.length ? (<div className="text-white mt-5">
                <div className="flex justify-center">
                    <ul className=""> {tasks.map((task, index) => (
                        <div key={index} className="flex mt-3 items-center  border border-orange-300 p-2 gap-1 rounded-lg " >
                           <div className=" w-6/12 p-1 mx-10"><Link to="" title="">{task.nom}</Link></div>
                            <div className="flex gap-5 mx-auto">
                                <FontAwesomeIcon title="Voir la tache" icon={faEye} />
                                <FontAwesomeIcon title="Modifier la tache" icon={faPencil} />
                                <FontAwesomeIcon icon={faTrash} title="Supprimer la tache" />
                            </div>
                        </div>
                    ))}
                    </ul>
                </div>
            </div>) : (<p className="text-center text-md mt-10 text-orangeDP ">Aucune tache pour l'instant</p>)}

        </>
    )
}
