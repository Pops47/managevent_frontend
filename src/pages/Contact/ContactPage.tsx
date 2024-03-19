// interface Contact  {
//     cols:number,
//     rows:number,
// }

export default function ContactPage() {

    return (

        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-screen">
            <h1 className="text-center text-xl text-white font-medium">Contact</h1>

            <form className="flex flex-col m-6 p-4 border-orange-300 border-2 rounded-lg"
                aria-label="Contactez-nous"
                aria-braillelabel="Contactez-nous">
                <label className="text-white" htmlFor="name">Nom et Prénom</label>
                <input className="rounded-lg px-8 py-2 mb-6" type="text" />
                <label className="text-white" htmlFor="email">Adresse Email</label>
                <input className="rounded-lg px-8 py-2 mb-6" type="email" name="email" id="email" />
                <label className="text-white" htmlFor="messag">Votre message</label>
                <textarea className="rounded-lg px-8 py-2 mb-6" name="message" id="message"></textarea>
                <div className="mb-6">
                    <input className="rounded-sm" type="checkbox" name="rgpd" id="rgpd" />
                    <label className="text-white ml-2"
                        htmlFor="info">
                        En cochant cette case vous acceptez que vos informations soient envoyées et stockées dans notre base de données.
                    </label>
                </div>
                <button className="rounded-lg bg-orange-300 px-8 py-2" type="submit">Envoyer</button>
            </form>
        </div>
    )
}