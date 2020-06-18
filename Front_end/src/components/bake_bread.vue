<template class = "to__retailers">
  <div
    class="bake__bread__container">
      <div class="background__image">
        <div class="content">
         
          <p>ROZKVAS:
100 g žitné chlebové mouky
100 g vody
1 polévková lžíce kvásku
TĚSTO:
rozkvas
600 g pšeničné chlebové mouky
430 g vody
20 g soli
 
POSTUP:
   Večer před pečením připravíme rozkvas. V misce smícháme mouku s vodou a kváskem a zakryté necháme při pokojové teplote nakvasit přibližně 9 hodin. Asi 2 hodiny před přípravou těsta si smícháme pšeničnou chlebovou mouku s vodou a v zakryté misce necháme při pokojové teplotě proběhnout autolýzu. Je to proces, který nastává po smíchání vody s moukou. Voda aktivuje enzymy v mouce. Během  autolýzy se rozvine gluten a těsto bude kompaktnější.  
  Po dvou hodinách autolýzy těsto začneme hníst. Pokud použijeme robota, tak na nízkých otáčkách těsto hněteme cca 4 minuty. Následně přidáme rozkvas a těsto hněteme tak, aby se rozkvas zapracoval. Bude to trvat přibližně 2 minuty. Až potom přidáme sůl a těsto hněteme, dokud se nezačne odlepovat od stěn misky. Mělo by to trvat cca 3 minuty (záleží, jak výkonný robot používate). Pokud nemáte robota a hnětete těsto ručně, bude to trvat trošku déle a ano bude to i náročné, ale jen dostatečně vypracované těsto s vyvinutým lepkem vám zaručí andělský výsledek. Vypracované těsto necháme v zakryté misce kynout přibližně 2 hodiny. Během těchto dvou hodin budeme těsto překládat alespoň třikrát. Potřebujeme v těstě vybudovat pružnost a pevnost, aby sa nám chleba na plechu neroztekl. 
   Po posledním prádání necháme těsto odpočinout asi 20 minut a následně ho stočíme do ošatky.  Celou ošatku pořádně vysypeme škrobem, aby se chleba na ní nepřilepil. Pracovní desku/podložku si velmi jemně poprášíme moukou a těsto na desku vyklopíme. Dobře vypracované a nakynuté těsto by mělo jednoduše vyklouznout ze skleněné misky. Dáváme si pozor, abychom s těstem příliš nebouchli. Těsto stočíme do ošatky. Stočené těsto přeložíme do ošatky spojem nahoru, přikryjeme igelitem a vložíme do chladničky o teplotě přibližně 5 stupňů. Takto necháme cesto pomaličku fermetovat, dokud nenakyne. Trvá to okolo 19 hodin, dle teploty v lednici. 
   Pokud spěcháte, můžete chleba nechat vykynout při pokojové teplotě obvyklým způsobem. Troubu si před pečením rozehřejeme na nejvyšší možnou teplotu a budeme péct s párou prvních 10 minut. Následně páru z trouby vyvětráme, plech s vodou na zapaření trouby vyndáme a teplotu snížíme na 190 stupňů. Chleba dopečeme 20 minut. Řiďte se podle svojí trouby, každá totiž peče jinak. Upečený chleba necháme zchladit na mřížce. Krájíme, až vychladne.
   Zdroj: https://nelkafood.sk/anjelsky-dobry-kvaskovy-chlieb/
</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Pro__rozvozce",
};
</script>

<style scoped>
p {
  font: Cabin;
  font-size: 15px;
}

.bake__bread__container {
    min-height: 62vh;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;
    display: flex;
    justify-content: center;
}

.background__image {
  background-image: url(../assets/img/bake_your_own_pastry.jpg);
  display: flex;
  flex-basis: 100vw;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9D9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9D9065;
  padding: 19vw 13vw 19vw 13vw;
}

.content {
  width: 62vw;
  border: 5px solid  #9D9065;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9D9065;
  background-color: #fff9e8;
}

@media screen and (min-width: 576px) and (max-width: 991px) {
 .background__image {
    min-height: 62vh;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
 } 
}

@media screen and (min-width: 992px) {
p {
font-size: 1.25em;
}

h1 {
  font-size: 3.815em;
}

h2 {
  font-size: 3.052em;
}

.background__image{
    min-height: 62vh;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
}
.bake__bread__container {
  width: 62vw;
}
}

@media screen and (min-width: 1200px) {
  .background__image {
    flex-basis: 62vw;
    min-height: 62vh;
    padding: 8vh 19vh 8vh 19vh;
    margin-bottom: 19vh
  }

  .content[data-v-5d0d7ea8] {
    width: 38vw;
    border: 5px solid #9D9065;
    padding: 1em;
}
}

</style>