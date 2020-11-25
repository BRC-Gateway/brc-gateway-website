import React from "react"
import { Link } from "gatsby"

import LayoutFullwidth from "../components/LayoutFullwidth"
import SEO from "../components/Seo"

const TaxaPage = () => (
  <LayoutFullwidth>
    <SEO title="Taxa" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Taxa</h4>
        <p>The BRCs include, but are not limited to, organisms in the <a href="https://www.niaid.nih.gov/node/3275" target="_blank">NIAID list of emerging and re-emerging infectious diseases</a>, plus vectors of human pathogens. The table below provides direct links to major taxonomic groups supported by the BRCs.</p>

        <div className="row">
          <div className="col-md-3">
            <h6><a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr" target="_blank">Viruses</a></h6>
            <hr />
            <ul>
              <li><a href="https://www.fludb.org/brc/home.spg?decorator=influenza" target="_blank">Influenza</a></li>
              <br />
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr#" target="_blank">Bunyavirales</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=calici" target="_blank">Caliciviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=corona" target="_blank">Coronaviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=filo" target="_blank">Filoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=flavi" target="_blank">Flaviviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=hepe" target="_blank">Hepeviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=herpes" target="_blank">Herpesviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=paramyxo" target="_blank">Paramyxoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=picorna" target="_blank">Picornaviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=pneumo" target="_blank">Pneumoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=pox" target="_blank">Poxviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=reo" target="_blank">Reoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=rhabdo" target="_blank">Rhabdoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=toga" target="_blank">Togaviridae</a></i></li>
              <br />
              <li><a href="https://patricbrc.org/view/Taxonomy/10239" target="_blank">Bacteriophages</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6><a href="https://patricbrc.org/view/Taxonomy/2">Bacteria</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/469#view_tab=overview" target="_blank">Acinetobacter</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1386#view_tab=overview" target="_blank">Bacillus</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/773#view_tab=overview" target="_blank">Bartonella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/64895#view_tab=overview" target="_blank">Borreliella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/234#view_tab=overview" target="_blank">Brucella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/32008#view_tab=overview" target="_blank">Burkholderia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/194#view_tab=overview" target="_blank">Campylobacter</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/810#view_tab=overview" target="_blank">Chlamydia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1485#view_tab=overview" target="_blank">Clostridium</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/776#view_tab=overview" target="_blank">Coxiella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/943#view_tab=overview" target="_blank">Ehrlichia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/561#view_tab=overview" target="_blank">Escherichia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/262#view_tab=overview" target="_blank">Francisella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/209#view_tab=overview" target="_blank">Helicobacter</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1637#view_tab=overview" target="_blank">Listeria</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1763#view_tab=overview" target="_blank">Mycobacterium</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/286#view_tab=overview" target="_blank">Pseudomonas</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/780#view_tab=overview" target="_blank">Rickettsia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/590#view_tab=overview" target="_blank">Salmonella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/620#view_tab=overview" target="_blank">Shigella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1279#view_tab=overview" target="_blank">Staphylococcus</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1301#view_tab=overview" target="_blank">Streptococcus</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/662#view_tab=overview" target="_blank">Vibrio</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/629#view_tab=overview" target="_blank">Yersinia</a></i></li>
              <br />
              <li><a href="https://patricbrc.org/view/Taxonomy/2157" target="_blank">Archaea</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6><a href="https://veupathdb.org/veupathdb/app/search/organism/GenomeDataTypes?autoRun" target="_blank">Protozoa</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://amoebadb.org/" target="_blank">Acanthamoeba</a></i></li>
              <li><i><a href="https://piroplasmadb.org/" target="_blank">Babesia</a></i></li>
              <li><i><a href="https://cryptodb.org/" target="_blank">Cryptosporidium</a></i></li>
              <li><i><a href="https://toxodb.org/" target="_blank">Cyclospora</a></i></li>
              <li><i><a href="https://amoebadb.org/" target="_blank">Entamoeba</a></i></li>
              <li><i><a href="https://giardiadb.org/" target="_blank">Giardia</a></i></li>
              <li><i><a href="https://tritrypdb.org/" target="_blank">Leishmania</a></i></li>
              <li><i><a href="https://microsporidiadb.org/" target="_blank">Microsporidia</a></i></li>
              <li><i><a href="https://amoebadb.org/" target="_blank">Naegleria</a></i></li>
              <li><i><a href="https://plasmodb.org/" target="_blank">Plasmodium</a></i></li>
              <li><i><a href="https://piroplasmadb.org/" target="_blank">Theileria</a></i></li>
              <li><i><a href="https://toxodb.org/" target="_blank">Toxoplasma</a></i></li>
              <li><i><a href="https://trichdb.org/" target="_blank">Trichomonas</a></i></li>
              <li><i><a href="https://tritrypdb.org/" target="_blank">Trypanosoma</a></i></li>
            </ul>

            <h6><a href="https://fungidb.org/fungidb/app/search/organism/GenomeDataTypes?autoRun" target="_blank">Fungi</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://fungidb.org/" target="_blank">Aspergillus</a></i></li>
              <li><i><a href="https://fungidb.org/fungidb/app" target="_blank">Blastomyces</a></i></li>
              <li><i><a href="https://fungidb.org/" target="_blank">Candida</a></i></li>
              <li><i><a href="https://fungidb.org/" target="_blank">Coccidioides</a></i></li>
              <li><i><a href="https://fungidb.org/" target="_blank">Cryptococcus</a></i></li>
              <li><i><a href="https://fungidb.org/" target="_blank">Histoplasma</a></i></li>
              <li><i><a href="https://fungidb.org/fungidb/app" target="_blank">Pneumocystis</a></i></li>
              <li><i><a href="https://fungidb.org/" target="_blank">Oomycetes</a></i></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6><a href="https://vectorbase.org/vectorbase/app/search/organism/GenomeDataTypes?autoRun" target="_blank">Vectors</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://vectorbase.org/" target="_blank">Aedes</a></i></li>
              <li><i><a href="https://vectorbase.org/" target="_blank">Anopheles</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Biomphalaria</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Cimex</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Culex</a></i></li>
              <li><i><a href="https://vectorbase.org/" target="_blank">Glossina</a></i></li>
              <li><i><a href="https://vectorbase.org/" target="_blank">Ixodes</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Leptotrombidium</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Lutzomyia</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Pediculus</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Phlebotomus</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Rhipicephalus</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Rhodnius</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app" target="_blank">Sarcoptes</a></i></li>
            </ul>

            <h6><a href="https://hostdb.org/hostdb/app/search/organism/GenomeDataTypes?autoRun" target="_blank">Host Mammals</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://hostdb.org/hostdb/app" target="_blank">Bos taurus</a></i></li>
              <li><i><a href="https://hostdb.org/hostdb/app/" target="_blank">Homo sapiens</a></i></li>
              <li><i><a href="https://hostdb.org/hostdb/app/" target="_blank">Macaca mulatta</a></i></li>
              <li><i><a href="https://hostdb.org/hostdb/app/" target="_blank">Mus musculus</a></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </LayoutFullwidth>
)

export default TaxaPage