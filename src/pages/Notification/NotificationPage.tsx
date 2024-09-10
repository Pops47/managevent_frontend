import { useEffect, useState } from "react";
// import NotiFaker from "./NotiFaker";
import Notification from "../../components/Notifications";
import NotiFaker from "./NotiFaker";
import ButtonDefault from "../../components/ButtonDefault";
import { Message } from "../../components/messageTest/messageTest";
import messageFaker from "../../components/messageTest/messageFaker";

export default function NotificationPage() {
    const [notifs, setNotifs] = useState(NotiFaker.notiFaker);
    const [messages, setMessages] = useState(messageFaker.messageFaker);
    const currentUrl = window.location.href;
    const [showNotif, setShowNotif] = useState(false);
    const [showMessage, setShowMessage] = useState(true);

    function handleClickNotif() {
        setShowNotif(true)
        setShowMessage(false)
    }
    function handleClickMessage() {
        setShowNotif(false)
        setShowMessage(true)
    }

    useEffect(() => {
        console.log(NotiFaker.notiFaker);
        async function loadNotifications() {
            const Notifications = await NotiFaker.notiFaker
            const Messages = await messageFaker.messageFaker
            setNotifs(Notifications);
            setMessages(Messages);
        }
        loadNotifications();
    }, [])

    return (<>
        <div className="m-6 flex flex-col gap-4">
            <div className="h-12 flex flex-row justify-center gap-2">
                <ButtonDefault
                    onClick={handleClickMessage}
                    variant="secondary"
                    className={showMessage ? "bg-orangeDP text-darkBlueDP hover:text-darkBlueDP" : "border-lightBlueDP text-lightBlueDP"}>
                    Messages
                </ButtonDefault>

                {currentUrl ? <ButtonDefault
                    onClick={handleClickNotif}
                    variant="secondary"
                    className={showNotif ? "bg-orangeDP text-darkBlueDP hover:text-darkBlueDP" : "border-lightBlueDP text-lightBlueDP"}>
                    Notifications
                </ButtonDefault>
                    :
                    <ButtonDefault className="">
                        Notifications
                    </ButtonDefault>}

            </div>
            <div className="h-24 text-center">
                Div de suppression
            </div>


            {showNotif && <div className="flex flex-col gap-4">
                {notifs.length > 0 ? (notifs?.map((contenu, index) => (
                    <Notification element={contenu} key={index} />
                ))) : <div className="border-2 border-orangeDP rounded-xl h-80 flex items-center justify-center">
                    <p className="font-semibold text-center text-2xl">Vous n'avez pas de notifications</p>
                </div>}
            </div>}
            <div className="flex flex-col gap-4">
            {showMessage && messages.map((contenu, index) => <Message element={contenu} key={index} />)}
        </div>
        </div>

    </>

    )
}
