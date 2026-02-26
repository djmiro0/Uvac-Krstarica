import React from 'react';
import Navbar from "@/app/components/Navbar";

export default function PolitikaPrivatnosti() {
    return (
        <>
            <Navbar/>
            <main className=" bg-[#020617] pt-32 pb-24 px-6 text-gray-300">
                <div className="py-24 px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Politika Privatnosti</h1>

                    <div className="space-y-6 text-sm md:text-base leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Uvod</h2>
                            <p>
                                Vaša privatnost nam je važna. Ova Politika privatnosti objašnjava kako [Ime tvog preduzeća/gazdinstva] ("mi", "naš", "nas") prikuplja, koristi i štiti vaše lične podatke kada posetite naš sajt [tvoj-domen.com] i koristite naše usluge zakazivanja tura.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Podaci koje prikupljamo</h2>
                            <p>Kada nas kontaktirate radi zakazivanja vožnje čamcem ili džipom (putem kontakt forme, telefona ili e-maila), možemo prikupiti sledeće podatke:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                                <li>Ime i prezime</li>
                                <li>Broj telefona i e-mail adresa</li>
                                <li>Podatke o željenom terminu i broju osoba</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Kako koristimo vaše podatke</h2>
                            <p>Prikupljene podatke koristimo isključivo u sledeće svrhe:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                                <li>Za organizaciju i potvrdu vaših rezervacija (vožnja čamcem, džipom).</li>
                                <li>Za komunikaciju sa vama u vezi sa uslugama.</li>
                                <li>Za unapređenje korisničkog iskustva na našem sajtu (kroz anonimnu analitiku).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Deljenje podataka</h2>
                            <p>
                                Vaše lične podatke <strong>ne prodajemo, ne iznajmljujemo i ne delimo</strong> sa trećim licima u marketinške svrhe. Podaci se mogu podeliti sa nadležnim državnim organima samo ukoliko je to zakonska obaveza.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Kolačići (Cookies)</h2>
                            <p>
                                Naš sajt koristi osnovne kolačiće potrebne za funkcionisanje sajta, kao i analitičke kolačiće (npr. Google Analytics) koji nam pomažu da razumemo kako posetioci koriste sajt. Ovi podaci su anonimizovani. Možete kontrolisati upotrebu kolačića kroz podešavanja vašeg internet pregledača.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Vaša prava</h2>
                            <p>Prema Zakonu o zaštiti podataka o ličnosti RS, imate pravo da zahtevate uvid, ispravku ili brisanje vaših ličnih podataka koje čuvamo. Kontaktirajte nas ukoliko želite da ostvarite ova prava.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Kontakt</h2>
                            <p>Za sva pitanja u vezi sa Politikom privatnosti, možete nas kontaktirati na:</p>
                            <ul className="mt-2 text-gray-400">
                                <li><strong>Email:</strong> rezervat.uvac.krstarenje@gmail.com</li>
                                <li><strong>Telefon:</strong> +381 60 3228 819</li>
                            </ul>
                        </section>

                        <p className="text-xs text-gray-500 mt-8 pt-8 border-t border-white/10">
                            Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}
                        </p>
                    </div>
                </div>
            </main>
        </>

    );
}