<script lang="ts">
	import { browser } from "$app/environment";
	import Footer from "$lib/Footer.svelte";
	import Navbar from "$lib/Navbar.svelte";

    let mount = browser;

    if(mount) document.body.classList.add("scroll");
</script>

<svelte:head>
    <title>KekOnTheWorld | Imprint</title>
</svelte:head>

<div class="wrapper" class:mount id="about">
    <Navbar position={0}/>
    <main class="full">
        <h1>Impressum</h1>

        <section>
            <h2>Geltungsbereich</h2>
            <p>Dieses Impressum gilt für</p>
            
            <div>
                <p>kotw.dev</p>
                <p>kotw.host</p>
                <p>*.kotw.dev</p>
            </div>
        </section>

        <section>
            <h2>Verantwortlicher gemäß §5 TMG</h2>
    
            <p><em>Missbrauch dieser Daten jeglicher Art führt zur Anzeige</em></p>
            
            <br>

            <p>Lucas Birkert</p>
            <p>Im Tiefenbrunnen 2/1</p>
            <p>74635 Kupferzell</p>

            <h3>Vertreten durch:</h3>
            <p>Lucas Birkert</p>

            <h3>Kontakt:</h3>
            
            <p><em>Elektronisch (bitte vorzugsweise nutzen)</em></p>
            
            <p>E-Mail: <a href='mailto:kekontheworld@gmail.com'>kekontheworld@gmail.com</a></p>
            
            <p>Telefon: +49-1743644198</p>
        </section>

        <section>
            <h2>Haftungsausschluss</h2>

            <br>

            <h3>Haftung für Inhalte</h3>

            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            
            <br>

            <h3>Urheberrecht</h3>

            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

            <br>

            <h3>Datenschutz</h3>
            
            <p>Eine detaillierte version, welche Daten wir verarbeiten, finden sie in <a href="https://legal.kotw.dev/de/privacy" target="_blank" rel="noreferrer">unserer Datenschutzerklärung</a>.</p>
            
            <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
        </section>
    </main>
    <Footer/>
</div>

<style lang="postcss">
    main {
        @apply min-h-screen py-24 font-inter flex flex-col 
               gap-y-12 px-1.5 items-center;
    }

    h1 {
        @apply text-3xl font-dela;
    }

    section h2 {
        @apply mb-4;
    }

    section h3 {
        @apply mb-4 mt-6;
    }

    p {
        @apply sm:text-lg text-base max-w-3xl;
    }

    .wrapper {
        @apply transition-opacity duration-1000 opacity-0;
    }

    .wrapper.mount {
        opacity: 1;
    }
</style>